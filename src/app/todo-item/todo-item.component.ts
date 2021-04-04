import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem!: TodoItem;
  @Input() showDate = false;
  @Output() toggleItem: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteItem: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onListItemChange(): void {
    this.toggleItem.emit();
  }

  onDeleteItem(): void {
    this.deleteItem.emit();
  }

}
