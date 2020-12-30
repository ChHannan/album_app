import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {Photo} from 'src/app/models/photo';
import {PhotoService} from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-creator',
  templateUrl: './photo-creator.component.html',
  styleUrls: ['./photo-creator.component.css']
})
export class PhotoCreatorComponent implements OnInit {
  photoForm: FormGroup;
  photo: Photo;
  isEditMode = false;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photo = history.state.photoData;
    if (isNotNullOrUndefined(this.photo)) {
      this.isEditMode = !this.isEditMode;
    }
    this.photoForm = new FormGroup({
      photoTitle: new FormControl(this.isEditMode ? this.photo.title : '', [Validators.required, Validators.minLength(5)]),
      photoUrl: new FormControl(this.isEditMode ? this.photo.url : '', [Validators.required, Validators.pattern('^(https:\\/\\/)|^(http:\\/\\/)')]),
    });
  }

  get formControl() {
    return this.photoForm.controls;
  }

  get getPhotoTitle() {
    return this.photoForm.get('photoTitle');
  }

  get getPhotoUrl() {
    return this.photoForm.get('photoUrl');
  }

  onSubmit(): void {
    if (this.photoForm.valid) {
      if (this.isEditMode) {
        this.photo.title = this.formControl.photoTitle.value;
        this.photo.url = this.formControl.photoUrl.value;
        this.photoService.updatePhoto(this.photo.id, this.photo).subscribe(() => {
          alert('Updated Successfully');
        });
      } else {
        const photo: Photo = {
          title: this.formControl.photoTitle.value,
          url: this.formControl.photoUrl.value,
        };
        this.photoService.createPhoto(photo).subscribe(() => {
          alert('Added Successfully');
        });
      }
    } else {
      alert('Please provide valid data');
    }
  }
}
