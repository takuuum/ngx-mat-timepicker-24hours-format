import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateTime } from 'ts-luxon';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formControlItem: FormControl = new FormControl('');
  maxTime: DateTime = DateTime.local().set({
    hour: 16,
  });
  minTime: DateTime = DateTime.local().set({
    hour: 14,
  });
  required: boolean = !1;

  @ViewChild('timepicker') timepicker: any;

  /**
   * Lets the user click on the icon in the input.
   */
  openFromIcon(timepicker: { open: () => void }) {
    if (!this.formControlItem.disabled) {
      timepicker.open();
    }
  }

  /**
   * Function to clear FormControl's value, called from the HTML template using the clear button
   *
   * @param $event - The Event's data object
   */
  onClear($event: Event) {
    this.formControlItem.setValue(null);
  }
}
