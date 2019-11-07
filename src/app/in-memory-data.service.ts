import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', attack: 24, defense: 50 },
      { id: 12, name: 'Narco', attack: 42, defense: 8},
      { id: 13, name: 'Bombasto', attack: 35, defense: 14 },
      { id: 14, name: 'Celeritas', attack: 24, defense: 22 },
      { id: 15, name: 'Magneta', attack: 14, defense: 16 },
      { id: 16, name: 'RubberMan', attack: 17, defense: 34 },
      { id: 17, name: 'Dynama', attack: 8, defense: 11 },
      { id: 18, name: 'Dr IQ', attack: 6, defense: 6 },
      { id: 19, name: 'Magma', attack: 10, defense: 10 },
      { id: 20, name: 'Tornado', attack: 25, defense: 5 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
