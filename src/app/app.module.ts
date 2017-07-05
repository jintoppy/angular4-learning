import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ProductService} from './services/product.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveProfileComponent } from './reactive-profile/reactive-profile.component';
import { ConverterPipe } from './converter.pipe';
import {AppRoutingModule} from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import {AuthGuard} from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDisplayComponent,
    ProfileComponent,
    ReactiveProfileComponent,
    ConverterPipe,
    AdminComponent,
    AddComponent,
    AddcategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
