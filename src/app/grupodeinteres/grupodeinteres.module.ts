import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrupodeinteresService } from './grupodeinteres.service';
import { GrupodeinteresListComponent } from './grupodeinteres-list/grupodeinteres-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GrupodeinteresDetailComponent } from './grupodeinteres-detail/grupodeinteres-detail.component';
import { GrupodeinteresNoticiaComponent } from './grupodeinteres-noticias/grupodeinteres-noticia.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GrupodeinteresAddNoticiaComponent } from './grupodeinteres-add-noticia/grupodeinteres-add-noticia.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
    declarations: [GrupodeinteresListComponent, GrupodeinteresDetailComponent, GrupodeinteresNoticiaComponent, GrupodeinteresAddNoticiaComponent],
    providers: [GrupodeinteresService],
    exports: [GrupodeinteresListComponent, GrupodeinteresDetailComponent]
})
export class GrupodeinteresModule { }
