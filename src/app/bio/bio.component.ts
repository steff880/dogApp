import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
})
export class BioComponent {
  // Allows us to get info about the route e.g. ID
  route: ActivatedRoute = inject(ActivatedRoute);
  // Inject the service to use its method
  dogsService: DogsService = inject(DogsService);
  // Create a dog parameter which will either have the dog data or be undefined
  dog: Dog | undefined;
  constructor() {
    // get the dog id from the route by accessing the params
    const dogId = this.route.snapshot.params['id'];
    // by passing the ID into this mehtod we can then asyncronously get the data
    this.dogsService.getDogById(dogId).then((dog) => {
      this.dog = dog;
    });
  }
}
