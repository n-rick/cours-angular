import { Component, OnInit } from '@angular/core';
import { count, filter, interval, map, Observable, Observer, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  status = '';
  tab: Array<number> = [];
  constructor() { }

  ngOnInit(): void {
    const observable: Observable<number> = interval(1000).pipe(
      take(15),
      // count(elt => elt % 2 === 0),
      filter(elt => elt % 2 == 0),
      map(elt => elt + 2)
    );
// const observer: Observer<number> = {
//   next: (value: number) => {
//     this.tab.push(value);
//   },
//   error: (error: string) => {
//     this.status = error;
//   },
//   complete: () => {
//     this.status = 'fini';
//   }
// };

    observable.subscribe((value: number) => {
      this.tab.push(value);
    }
    );
  }
}
