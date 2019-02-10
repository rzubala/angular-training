import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observer, Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSub: Subscription;
  customObsSub: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(map((data: number) => {
        return data * 2;
      }));
    this.numbersObsSub = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        //observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });
    this.customObsSub = myObservable.subscribe((data: string) => {
      console.log(data);
    },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    this.customObsSub.unsubscribe();
    this.numbersObsSub.unsubscribe();
  }

}
