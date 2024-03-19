import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './billPage/billing/billing.component';
import { ActualbillComponent } from './components/actualbill/actualbill.component';
import { FormsModule } from '@angular/forms';

//Material Modules
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    ActualbillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
