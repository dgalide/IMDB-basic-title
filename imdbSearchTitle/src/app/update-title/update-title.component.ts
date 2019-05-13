import { HttpClient } from '@angular/common/http';
import { ITitle } from './../models/title.interface';
import { IUpdateTitleData } from './../models/updateTitleData';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-title',
  templateUrl: './update-title.component.html',
  styleUrls: ['./update-title.component.css']
})
export class UpdateTitleComponent implements OnInit {

  index                     = 0;
  closeIcon                 = faWindowClose;
  current: ITitle           = null;
  form: FormGroup           = null;

  constructor(
    public dialogRef: MatDialogRef<UpdateTitleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUpdateTitleData,
    private httpClient: HttpClient,
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
    this.httpClient.put(`http://localhost:1234/title/${this.current._id}/update`, this.form.value)
      .subscribe(
        res => console.log('Title Updated', res),
        err => console.log(err),
      );
  }
}
