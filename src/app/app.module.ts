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
import { FilterComponent } from './observable/filter/filter.component';
import { TapDoComponent } from './observable/tap-do/tap-do.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './observable/subject/subject.component';
import { Comp3Component } from './comp/comp3/comp3.component';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PromiseComponent,
    ObservableComponent,
    FromEventComponent,
    SubjectComponent,
    ListComponent,
    OfFormComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapDoComponent,
    TakeComponent,
    DebounceTimeComponent,
    RetryComponent,
    Comp1Component,
    Comp3Component,
    Comp2Component
  ],
  providers: [DesignUtilitesService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
