import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/models/card';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input() card: Card | undefined;
}
