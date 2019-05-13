import { IUpdateTitleData } from './../models/updateTitleData';
import { UpdateTitleComponent } from './../update-title/update-title.component';
import { ITitle } from './../models/title.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent implements OnInit {

  @Input() titles: Array<ITitle> = [];
  @Output() refresh: EventEmitter<null> = new EventEmitter();

  columns = ['primaryTitle', 'originalTitle', 'isAdult', 'startYear', 'action'];

  penIcon = faPen;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openPopup(element: ITitle): void {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.data = <IUpdateTitleData>{
      titles: [element],
    };

    const ref = this.dialog.open(UpdateTitleComponent, config);

    ref
      .afterClosed()
      .subscribe(
        refresh => {
          if (refresh) {
            this.refresh.emit();
          }
        }
      );
  }

}
