import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Player } from 'src/models/player';
import { Card } from 'src/models/card';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'board-game',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.less'],
})
export class BoardGameComponent {
  players: Player[]
  remainingCards: Card[];
  tableCards: Card[][];

  constructor(){
    this.players = [];
    this.remainingCards = [];
    this.tableCards = [
      [{value: 1, points:1}, {value: 2, points:1}, {value: 3, points:1}],
      [{value: 56, points:1}, {value: 70, points:1}, {value: 80, points:1}],
      [{value: 82, points:1}, ],
      [{value: 15, points:1}, {value: 17, points:1}]
    ]
  }
}
