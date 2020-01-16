import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-list/customer-edit/customer-edit.component';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './customer-list/store/customer.reducer';
import { CommonModule } from '@angular/common';
import { CustomerEffect } from './customer-list/store/customer.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot({customerList:CustomerReducer}),
    EffectsModule.forRoot([CustomerEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
