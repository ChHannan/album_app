import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Album} from 'src/app/models/album';
import {AlbumService} from 'src/app/services/album.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
  albums: Album[];

  constructor(private albumService: AlbumService, private router: Router) {
  }

  ngOnInit(): void {
    this.albumService.fetchAlbumsList().subscribe(albums => {
      this.albums = albums;
    });
  }

  navigate(id): void {
    this.router.navigate(['photos', id]).then();
  }
}
