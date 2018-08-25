import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items = new BehaviorSubject<any>(['First Item', 'Second Item']);
  item = this.items.asObservable();

  constructor() { }

  changeItem(item) {
    this.items.next(item);
  }
}
