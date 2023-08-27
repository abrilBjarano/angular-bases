import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteId(index: number): void {

  }

  onDeleteCharacter(index: number): void {
    console.log({index});
  }

}
