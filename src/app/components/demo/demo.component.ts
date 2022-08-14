import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';
import { AnimalService } from 'src/app/services/animal.service';
import { MatDialog } from '@angular/material/dialog';
import { MsgDialogComponent } from '../msg-dialog/msg-dialog.component';
import { AnimalDialogComponent } from '../animal-dialog/animal-dialog.component';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name: string = "";
  animals: Animal[] = [];
  msg: string = "";
  textAreaValue: string = "";
  constructor(private animalService: AnimalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.animalService.getName().subscribe(tesponseText => {
      this.name = tesponseText;
    }, error => this.msg = "Get Name: Failed!");
  }

  handleNewNameButton(): void {
    this.animalService.getNewName().subscribe(response => {
      this.name = response.name;
      this.msg = "Get New Name: Success!";
      this.dialog.open(MsgDialogComponent , {data: this.msg});
    }, error => this.msg = "Get New Name: Failed!")
  }

  handleGetButton(): void {
    this.animalService.getAnimals().subscribe(data => {
      this.animals = data;
      this.msg = "Get all Animals: Success!";
      this.textAreaValue = JSON.stringify(this.animals);
      this.dialog.open(MsgDialogComponent , {data: this.msg});
    }, error => this.msg = "Get all Animals: Failed!")
  }

  handleResetButton(): void {
    this.animalService.resetAnimals().subscribe(tesponseText => {
      this.msg = "Rest DataBase: Success!";
      this.textAreaValue = "";
      this.dialog.open(MsgDialogComponent , {data: this.msg});
    }, error => this.msg = "Rest DataBase: Failed!")
  }

  handleUpdateButton(animal:Animal): void {
    this.dialog.open( AnimalDialogComponent, {data: animal})

    // this.animalService.updateAnimals(this.textAreaValue).subscribe(data => {
    //   this.msg = "Update Data: Success!";
    //   this.textAreaValue = "";
    //   this.openMsgDialog();
    // }, error => this.msg = "Update Data: Failed!")
  }

  imgPath(name: string): string {
    return `assets/dogImg/${name}.jpg`;
  }


}
