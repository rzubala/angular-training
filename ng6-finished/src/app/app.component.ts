import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDZVZOBVLo0CqXvqcedwU9SDmh9AY2hOtk",
      authDomain: "ng-recipe-book-89723.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
