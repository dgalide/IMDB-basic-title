import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchResultComponent } from './search-result/search-result.component';
import {MatTableModule} from '@angular/material/table';
import { UpdateTitleComponent } from './update-title/update-title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { IsAdultPipe } from './is-adult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    UpdateTitleComponent,
    IsAdultPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  entryComponents: [
    UpdateTitleComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
