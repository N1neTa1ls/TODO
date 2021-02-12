import { Component, Inject, OnInit } from '@angular/core';
import { ITask } from '../app.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-todo-item-edit',
  templateUrl: './todo-item-edit.component.html',
  styleUrls: ['./todo-item-edit.component.scss']
})
export class TodoItemEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TodoItemEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITask) {}

  ngOnInit(): void {

  }

  AcceptFunc() {
    this.dialogRef.close(this.data);
  }

  DeclineFunc(): void {
    this.dialogRef.close();
  }
}
