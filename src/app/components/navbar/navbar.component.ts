import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';;
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('myDOMElement') MyDOMElement: ElementRef;
  @ViewChild('logoElement') logoElement: ElementRef;
  collapsed = true;

  constructor() {
   }

   ngOnInit() {}

   selectMenu() {
     console.log('select');
     this.collapsed = !this.collapsed;
   }

   collapseNav() {
    this.collapsed = !this.collapsed;
    console.log('collapse');
  }

// ngAfterViewInit() {
//   console.log('inner', this.MyDOMElement.nativeElement.style)
//   // this.MyDOMElement.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
// }

//   @HostListener('window: scroll', ['$event'])

//   onScroll(event: any) {
//     console.log('event: ', document.documentElement.scrollTop);
//     if (document.documentElement.scrollTop > 200) {
//       this.MyDOMElement.nativeElement.style.padding = "10px 10px";
//       this.logoElement.nativeElement.style.width = "95px";
//       this.logoElement.nativeElement.style.height = "95px";
//     } else {
//       this.MyDOMElement.nativeElement.style.padding = "80px 10px";
//       this.logoElement.nativeElement.style.width = "200px";
//       this.logoElement.nativeElement.style.height = "200px";
//     }
//   }


// window.onscroll = function() {scrollFunction()};


// scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }

}
