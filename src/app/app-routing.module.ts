import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GetQuoteComponent } from './components/get-quote/get-quote.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '',    redirectTo: '/home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'get-quote', component: GetQuoteComponent }
];

// [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent,
//     children: [
//       { path: '', redirectTo: '/gallery', pathMatch: 'full' },
//       { path: 'detail', component: GalleryComponent }
//     ] 
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
