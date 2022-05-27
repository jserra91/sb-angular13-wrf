import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IWrfButtonIconProperties } from './wrf-button-icon-properties.interface';

@Component({
  selector: 'wrf-button-icon',
  templateUrl: './wrf-button-icon.component.html',
  styleUrls: ['./wrf-button-icon.component.scss']
})
export class WrfButtonIconComponent {

  @Input() key: string = "";
  @Input() label: string = "";
  @Input() color: string = "primary";
  @Input() icon: string = "";
  @Input() disabled: string = "false";
  @Input() properties?: IWrfButtonIconProperties = undefined;

  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  getClass() {
    let output = "button-icon ";
    switch (this.color) {
      case "primary":
        output += "button-icon-primary"
        break;
      case "secondary":
        output += "button-icon-secondary"
        break;
      default:
        output += "button-icon-primary"
        break;
    }
    return output;
  }

  // return: key input or {key, [all data of the form]}
  handleOnClick() {
    if (this.properties && this.properties.onSubmit && this.properties.onSubmit.enable) {
      if (this.properties.onSubmit.native) {
        //const allData = this.werfenService.getDataArrayValue(this.properties.onSubmit.data)
        this.onClick.emit([this.key, "native"]);
      } else {
        this.onClick.emit([this.key, "custom"]);
      }
    } else {
      this.onClick.emit([this.key]);
    }
  }

  getDisabled():  boolean{
    return (this.disabled || this.disabled == "true") ? true : false;
  }
}
