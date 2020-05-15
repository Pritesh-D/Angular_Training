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
import { UtilityServiceComponent } from './components/utilityservicecomponent/app.utilityservice.component';
import { CustomerSenderComponent } from './components/communicationComponent/app.customersender.component';
import { OrderReciverComponent } from './components/communicationComponent/app.orderreciver.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TableDirectiveComponent,
    ProductReactiveFormComponent,
    SelectDirectiveComponent,
    UtilityServiceComponent,
    CustomerSenderComponent,
    OrderReciverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule, NgbModule
  ],
  providers: [],
  bootstrap: [
    CustomerSenderComponent,
    OrderReciverComponent]
})
export class AppModule { }
