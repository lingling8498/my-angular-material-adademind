import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatButtonToggleModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { MatInputModule, MatFormFieldModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatTabsModule  } from '@angular/material';
import { MatRadioModule, MatSlideToggleModule, MatSliderModule, MatTooltipModule  } from '@angular/material';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DataTableComponent } from './data-table/data-table.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { MatCardComponent } from './mat-card/mat-card.component';

import { GridTileDiv } from './mat-card/grid-tile-div';
import { FormFieldOverviewExampleComponent } from './form-field-overview-example/form-field-overview-example.component';
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
    MatCardComponent,
    GridTileDiv,
    FormFieldOverviewExampleComponent
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
    MatGridListModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class AppModule { }
