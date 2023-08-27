import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  }, {
    name: 'Goku',
    power: 9500
  }, {
    name: 'Vegeta',
    power: 7500
  }];


  onNewCharacters_Main( character: Character ): void {
    this.characters.push( character );
  }

  // Eliminar el <li> con el ID que escuchó del hijo

  onDeleteCharacter_Main( indice: number ) {
    this.characters.splice(indice, 1);
  }

}
