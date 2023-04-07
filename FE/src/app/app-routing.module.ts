import { ListsComponent } from './lists/lists.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'products', component: ProductListComponent,canActivate: [AuthGuard] },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'lists', component: ListsComponent },
    ]
  },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
