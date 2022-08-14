import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalGroupDialogComponent } from './animal-group-dialog.component';

describe('AnimalGroupDialogComponent', () => {
  let component: AnimalGroupDialogComponent;
  let fixture: ComponentFixture<AnimalGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalGroupDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
