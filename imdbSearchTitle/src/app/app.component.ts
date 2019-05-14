import { TitleService } from './providers/title.service';
import { ITitle } from './models/title.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

enum yearOperator {
  Before = 'before',
  After = 'after',
  Equal = 'equal',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private form: FormGroup                   = null;
  public titles$: Observable<Array<ITitle>> = null;

  public toggleFilter                       = false;

  public yearOperator                       = yearOperator;

  constructor(private titleService: TitleService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.initForm();
  }

  public search(value: string): void {
    if (value) {
      this.titles$ = this.titleService
        .getByName(value)
        .pipe(
          map(titles => {
            if (this.searchYear.valid && this.searchYearOperator.valid) {
              return this.filterByYear(titles, this.searchYear.value, this.searchYearOperator.value);
            }
            return titles;
          })
        );
    }
  }

  public toggle(): void {
    this.toggleFilter = !this.toggleFilter;
  }

  public filterByYear(titles: Array<ITitle>, year: number, operator: yearOperator): Array<ITitle> {
    return titles.filter(
      item => {
        return operator === yearOperator.Equal
          ? item.startYear === year
          : operator === yearOperator.Before
            ? item.startYear < year
            : item.startYear > year;
      }
    );
  }

  public initForm(): FormGroup {

    const filterForm = this.fb.group({
      genre: [null],
      year: [null],
      yearOperator: [null]
    });

    return this.fb.group({
      name: ['', Validators.required],
      filter: filterForm,
    });
  }

  public get searchName(): FormControl {
    return this.form.get('name') as FormControl;
  }

  public get searchYear(): FormControl {
    return this.form.get('filter').get('year') as FormControl;
  }

  public get searchYearOperator(): FormControl {
    return this.form.get('filter').get('yearOperator') as FormControl;
  }

  public get searchGenre(): FormControl {
    return this.form.get('filter').get('genre') as FormControl;
  }
}
