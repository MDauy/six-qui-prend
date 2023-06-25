import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Player } from 'src/models/player';
import { Card } from 'src/models/card';
import cardsData from '../../cards.json'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'board-game',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.less'],
})
export class BoardGameComponent implements OnInit {
  players: Player[] = [];
  cardsData: any = cardsData;
  remainingCards: Card[] = [];
  tableCards: Card[][] = [];

  ngOnInit(): void {
    this.players = [{
      hand: [],
      name: 'player1',
      score: 0
    }, {
      hand: [],
      name: 'player2',
      score: 0
    },
    {
      hand: [],
      name: 'player3',
      score: 0
    },
    {
      hand: [],
      name: 'player4',
      score: 0
    }];
    this.remainingCards = this.cardsData.cards.sort(() => (Math.random() > .5) ? 1 : -1);
    this.distributeToPlayers();
    this.tableCards = [
      [this.pickFirstCard()!], [this.pickFirstCard()!], [this.pickFirstCard()!], [this.pickFirstCard()!]
    ];
  }

  private pickFirstCard(): Card | undefined {
    return this.remainingCards.shift();
  }

  private distributeToPlayers(): void {
    for (let index = 0; index < this.players.length; index++) {
      this.players[index].hand.push(this.pickFirstCard()!);
      if (index == 3) {
        if (this.players[index].hand.length < 10) {
          index = -1;
        }
      }
    }
  }
}
