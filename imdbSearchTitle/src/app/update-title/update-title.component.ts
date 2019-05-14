import { AppComponent } from './../app.component';
import { TitleService } from './../providers/title.service';
import { ITitle } from './../models/title.interface';
import { IUpdateTitleData } from './../models/updateTitleData';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackSuccessComponent } from '../snack-success/snack-success.component';

@Component({
  selector: 'app-update-title',
  templateUrl: './update-title.component.html',
  styleUrls: ['./update-title.component.css']
})
export class UpdateTitleComponent implements OnInit {

  index                     = 0;
  closeIcon                 = faTimes;
  current: ITitle           = null;
  form: FormGroup           = null;

  constructor(
    public dialogRef: MatDialogRef<UpdateTitleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUpdateTitleData,
    private titleService: TitleService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.current  = this.data.titles[0];
    this.form     = this.initForm(this.current);
  }

  close(refresh?: boolean) {
    this.dialogRef.close(refresh);
  }

  initForm(title: ITitle): FormGroup {
    return this.fb.group({
      primaryTitle: [title.primaryTitle],
      originalTitle: [title.originalTitle],
    });
  }

  updateTitle(): void {
    this.titleService.updateTitle(this.current._id, this.form.value)
      .subscribe(
        res => this.successHandler(),
        err => console.log(err),
      );
  }

  successHandler(): void {

    console.log('SUCCESS');
    this.snackBar.openFromComponent(SnackSuccessComponent, {
      duration: 1000,
    });
    this.close(true);
  }
}
