import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { HeaderUserComponent } from './shared/components/header-user/header-user.component';
import { FavoritePageComponent } from './modules/favorites/page/favorite-page/favorite-page.component';

@NgModule({
  declarations: [ //Declaraciones, componentes, directivas, pipes
    AppComponent
    
  ], 
  imports: [ //Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
