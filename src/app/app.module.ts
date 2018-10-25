import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';


import {CiudadanoModule} from './ciudadano/ciudadano.module';
import {GrupodeinteresModule} from './grupodeinteres/grupodeinteres.module';
import {CategoriaModule} from './categoria/categoria.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CiudadanoModule,
        FormsModule,
        GrupodeinteresModule,
        CategoriaModule
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}