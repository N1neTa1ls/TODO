import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Output() clicked = new EventEmitter()

  task;

  constructor() { }

  ngOnInit(): void {
  }

  emitData() {
    this.clicked.emit(this.task);

  }

}
