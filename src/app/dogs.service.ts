import { Injectable } from '@angular/core';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root',
})
// The purpose of this service is to separate the functionality needed to fetch the data and at the same time to make it injectable(usable) by multiple components.
export class DogsService {
  url = 'http://localhost:3000/data';

  // Create an async method to fetch the data from the url provided and return the data in json format or if there is no data return and empty array.
  async getAllDogs(): Promise<Dog[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  // Create an async method to get a specific dog by ID and return its data in json format. If we get null or undefined return and empty ebject instead, to prevent the app from crashing.
  async getDogById(id: string): Promise<Dog | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
