import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { AppRoutingModule } from './app-routing.module';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { DesignUtilitesService } from '../AppServies/design-utilites.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PromiseComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
  ],
  providers: [DesignUtilitesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
