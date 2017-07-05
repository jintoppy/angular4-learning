import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import {AuthGuard} from './auth.guard';
const routes: Route[] = [
  {
    path :'', 
    component: ProductListComponent, 
    pathMatch:'full'
  },
  {
    path: 'profile', 
    component: ProfileComponent
  },
  {
      path: 'productdetails/:productId',
      component:  ProductDisplayComponent
  },
  {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          component: AddComponent
        },
        {
          path: 'addcategory',
          component: AddcategoryComponent
        }
      ]
  }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}