import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatButtonToggleModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DataTableComponent } from './data-table/data-table.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { MatCardComponent } from './mat-card/mat-card.component';

const routes: Routes = [
  {
    path: "",
    component: FirstpageComponent
  },
  {
    path: "home",
    component: FirstpageComponent
  },
  {
    path: "data-table",
    component: DataTableComponent
  },
  {
    path: "mat-card",
    component: MatCardComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DataTableComponent,
    FirstpageComponent,
    MatCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
