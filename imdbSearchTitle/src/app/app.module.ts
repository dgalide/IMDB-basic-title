import { TitleService } from './providers/title.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

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
import { SnackSuccessComponent } from './snack-success/snack-success.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    UpdateTitleComponent,
    IsAdultPipe,
    SnackSuccessComponent,
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
    MatSnackBarModule,
    MatButtonToggleModule,
  ],
  entryComponents: [
    UpdateTitleComponent,
    SnackSuccessComponent,
  ],
  providers: [
    TitleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
