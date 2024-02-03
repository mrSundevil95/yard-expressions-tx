import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Grocery } from '../../models/Grocery';

import { ContactDataService } from '../../services/contact-data.service';
import { GroceryListCrudService } from '../../services/grocery-list-crud.service';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

  groceries$: Observable<Grocery[]>;

  constructor(
    private contactDataService: ContactDataService,
    private groceryListCrudService: GroceryListCrudService
  ) { }

  ngOnInit(): void {
    this.groceries$ = this.fetchAll();
    console.log('failED!!!!')
  }

  fetchAll(): Observable<Grocery[]> {
    console.log('fetch service:');
    return this.groceryListCrudService.fetchAll();
  }

  post(groceryItem): void {
    const item = (<string>groceryItem).trim();
    if (!item) {
      return;
    }

    this.groceries$ = this.groceryListCrudService.post({ item: item}).pipe(
      tap((_) => this.groceries$ = this.fetchAll())
    )
  }

  update(id: number, updatedItem): void {
    const item = (<string>updatedItem).trim();
    if (!item) {
      return;
    }

    const newGrocery: Grocery = {
      id: id,
      item: updatedItem
    }
    this.groceries$ = this.groceryListCrudService.update(newGrocery).pipe(
      tap((_) => this.groceries$ = this.fetchAll())
    )

  }

  deleteItem(id): void {
    this.groceries$ = this.groceryListCrudService.delete(id).pipe(
      tap((_) => this.groceries$ = this.fetchAll())
    )
  }


}
