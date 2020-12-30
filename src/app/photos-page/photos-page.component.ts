import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Photo} from 'src/app/models/photo';
import {PhotoService} from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})
export class PhotosPageComponent implements OnInit {
  photos: Photo[];

  constructor(private route: ActivatedRoute, private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
    const albumID = this.route.snapshot.params.id;
    this.photoService.fetchPhotos(albumID).subscribe(photos => {
      this.photos = photos;
    });
  }

  addPhoto(): void {
    this.router.navigate(['photo', 'add']).then();
  }

  editPhoto(photo: Photo): void {
    this.router.navigate(['photo', 'edit'], {state: {photoData: photo}}).then();
  }

  removePhoto(photoID: number): void {
    this.photoService.deletePhoto(photoID).subscribe(() => {
      alert('Deleted Successfully');
    });
  }
}
