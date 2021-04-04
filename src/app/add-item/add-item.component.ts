import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() addItem: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  todoName = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(): void {
    this.addItem.emit({
      name: this.todoName,
      done: false,
      createdDate: new Date()
    });

    this.todoName = '';

  }
}
