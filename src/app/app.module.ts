import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListSummaryComponent } from './list-summary/list-summary.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    TodoItemComponent,
    ListSummaryComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
