import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { todoList } from '../todo-list';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  todoItems = todoList;
  constructor() { }

  ngOnInit(): void {
  }

  listItemToggle(item: TodoItem): void {
    item.done = !item.done;
  }
}
