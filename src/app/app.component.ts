import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoItemEditComponent } from './todo-item-edit/todo-item-edit.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface ITask {
  title: string;
  checked: boolean | 'fake';
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TODO';
  tasks: Array<ITask> = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    if (localStorage.getItem('itms')){
      this.tasks = JSON.parse(localStorage.getItem('itms')); 
    }
  }

  saveLocalStorage() {
    localStorage.setItem('itms', JSON.stringify(this.tasks));
  }

  changedArray(item: string) {
    const task: ITask = {
      title: item,
      checked: false
    };
    this.tasks.push(task);
    this.saveLocalStorage();
    console.log(this.tasks);
  }

  clearFunc() {
    this.tasks.length = 0;
    localStorage.removeItem('itms');
  }

  changeParams(index) {
    this.tasks[index].checked = !this.tasks[index].checked;
    this.saveLocalStorage();
  }

  delTask(index) {
    this.tasks.splice(index, 1);
    this.saveLocalStorage();
  }

  openDialog(item, index) {
    const dialogRef = this.dialog.open(TodoItemEditComponent, {
      width: '450px',
      data: {...item}
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.tasks[index].title = data.title;
        this.saveLocalStorage();
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  trackByFn(index) {
    return index;
  }

}
