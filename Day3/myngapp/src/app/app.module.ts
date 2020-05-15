import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/app.product.component';
import { ProductReactiveFormComponent } from './components/productReactivrForm/app.productreactiveform.component';
import { TableDirectiveComponent } from './directives/table.component.directive';
import { SelectDirectiveComponent } from './directives/select.component.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
  declarations: [
    AppComponent, ProductComponent, TableDirectiveComponent, ProductReactiveFormComponent, SelectDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule, NgbModule
  ],
  providers: [],
  bootstrap: [ProductReactiveFormComponent]
})
export class AppModule { }
