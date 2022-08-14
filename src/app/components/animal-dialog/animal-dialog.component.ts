import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Animal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-animal-dialog',
  templateUrl: './animal-dialog.component.html',
  styleUrls: ['./animal-dialog.component.css']
})
export class AnimalDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AnimalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public animal: Animal) { }

  ngOnInit(): void {
  }

}
