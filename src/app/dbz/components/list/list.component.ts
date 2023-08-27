import { Component, EventEmitter, Input, Output } from '@angular/core';
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


  @Output()
  public onDelete_List: EventEmitter<number> = new EventEmitter();

  onDelete(index: number): void {
    this.onDelete_List.emit(index)
  }

}
