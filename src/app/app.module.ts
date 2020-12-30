import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from 'src/app/app-routing.module';

import { AppComponent } from './app.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { PhotoCreatorComponent } from './photo-creator/photo-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumPageComponent,
    PhotosPageComponent,
    PhotoCreatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
