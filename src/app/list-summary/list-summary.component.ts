import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss']
})
export class ListSummaryComponent implements OnInit {

  @Input() todoItems!: TodoItem[];
  @Output() clearCompleted: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggleDate: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  get doneItemsCount(): number {
    return this.todoItems.filter(item => !item.done).length;
  }

  get areDoneItems(): boolean {
    return this.todoItems.some(item => item.done);
  }

  onClearClick(): void {
    this.clearCompleted.emit();
  }

  toggleDateVisibility(): void {
    this.toggleDate.emit();
  }

}
