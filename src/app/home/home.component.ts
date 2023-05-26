import { Component, inject } from '@angular/core';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Create an empty list that will have to have the same types and the interface
  dogsList: Dog[] = [];
  // inject the service to allow the use of its methods
  dogsService: DogsService = inject(DogsService);

  // Since the constructor is the first to run we want to get all our data and get it ready for use
  constructor() {
    // Get all dogs and update the list. Since getAllDogs mehtod returns a Promise we need to use "then" to asyncronously get the data
    this.dogsService.getAllDogs().then((dogsList: Dog[]) => {
      this.dogsList = dogsList;
    });
  }
}
