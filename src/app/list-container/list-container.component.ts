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
  dateVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  listItemToggle(item: TodoItem): void {
    item.done = !item.done;
  }

  addItem(item: TodoItem): void {
    this.todoItems.push(item);
  }

  deleteItem(toBeDeletedItem: TodoItem): void {
    this.todoItems = this.todoItems.filter(item => item !== toBeDeletedItem);
  }

  clearCompletedItems(): void {
    this.todoItems = this.todoItems.filter(item => !item.done);
  }

  toggleDateVisibility(): void {
    this.dateVisible = !this.dateVisible;
  }
}
