import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { DistritoService } from './distrito.service';
import { DistritoListComponent } from './distrito-list/distrito-list.component';
import { DistritoDetailComponent } from './distrito-detail/distrito-detail.component';
import { DistritoCreateComponent } from './distrito-create/distrito-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
  ],
  declarations: [DistritoListComponent, DistritoDetailComponent, DistritoCreateComponent],
  exports: [DistritoListComponent, DistritoCreateComponent],
  providers:[DistritoService]
})
export class DistritoModule { }
