import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCreatorComponent } from './photo-creator.component';

describe('PhotoCreatorComponent', () => {
  let component: PhotoCreatorComponent;
  let fixture: ComponentFixture<PhotoCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
