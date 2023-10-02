import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
  
    HeaderUserComponent,
       MediaPlayerComponent,
       CardPlayerComponent,
       SectionGenericComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
  ]
})
export class SharedModule { }
