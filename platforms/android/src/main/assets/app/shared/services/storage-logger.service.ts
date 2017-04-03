import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class StorageLogger {

  private logger = new BehaviorSubject<any>(null);

  public logger$ = this.logger.asObservable();

  set(key: string, value: any): void {

    localStorage.setItem(key, JSON.stringify(value));

    this.get(key);
  }

  get(key: string): void {

    let item: any;

    item = JSON.parse(localStorage.getItem(key));

    this.logger.next({value: item, key: key});
  }

  remove(keys: string[]): void {

    for (const key of keys) {

      localStorage.removeItem(key);

      this.logger.next({value: null, key: key});
    }
  }
}
