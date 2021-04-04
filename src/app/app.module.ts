import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListSummaryComponent } from './list-summary/list-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    TodoItemComponent,
    ListSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
