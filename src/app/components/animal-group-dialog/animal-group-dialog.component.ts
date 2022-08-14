import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Animal } from 'src/app/interfaces/animal';
import { AnimalService } from 'src/app/services/animal.service';
import { MsgDialogComponent } from '../msg-dialog/msg-dialog.component';

@Component({
  selector: 'app-animal-group-dialog',
  templateUrl: './animal-group-dialog.component.html',
  styleUrls: ['./animal-group-dialog.component.css']
})
export class AnimalGroupDialogComponent implements OnInit {

  constructor(public animalService: AnimalService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AnimalGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public animals: Animal[]) { }

  ngOnInit(): void {
  }

  handleSubmitButton(data: string) {
    console.log(data);
    this.animalService.updateAnimals(data).subscribe(data => { this.dialog.open(MsgDialogComponent, { data: "Updated!" }) }
      , err => this.dialog.open(MsgDialogComponent, { data: "Action Failed!" }))

  }

}
