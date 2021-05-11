import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }
  makeCapitalPopup(data: any): string { 
    return `` +
    `<div>Name: ${ data.name }</div>` +
    `<div>State: ${ data.state }</div>` 
  }
}
