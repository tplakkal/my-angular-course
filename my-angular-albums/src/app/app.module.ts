import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { MyComponentComponent } from './test/my-component/my-component.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    MyComponentComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
