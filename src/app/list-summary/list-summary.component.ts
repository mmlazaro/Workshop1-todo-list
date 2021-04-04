import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss']
})
export class ListSummaryComponent implements OnInit {

  @Input() todoItems!: TodoItem[];
  constructor() { }

  ngOnInit(): void {
  }

  get itemsCount(): number {
    return this.todoItems.filter(item => !item.done).length;
  }

}
