import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BoardGameComponent } from './board-game/board-game.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BoardGameComponent],
  selector: 'six-qui-prend-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'six-qui-prend-angular';
}
