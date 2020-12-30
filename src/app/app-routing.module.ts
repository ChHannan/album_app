import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlbumPageComponent} from 'src/app/album-page/album-page.component';
import {PhotoCreatorComponent} from 'src/app/photo-creator/photo-creator.component';
import {PhotosPageComponent} from 'src/app/photos-page/photos-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'albums', pathMatch: 'full'},
  {path: 'albums', component: AlbumPageComponent},
  {path: 'photos/:id', component: PhotosPageComponent},
  {path: 'photo/:mode', component: PhotoCreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
