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
import { OfFormComponent } from './observable/of-form/of-form.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';

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
    OfFormComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent
  ],
  providers: [DesignUtilitesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
