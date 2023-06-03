import { Card } from "src/models/card";
import { BoardGameComponent } from "../board-game/board-game.component";
import { Choice } from "src/models/choice";

export class RulesService {
    getCardScoring(card: Card, tableCards: Card[][]): Choice {
        return {
            card,
            scoring: 0,
            line_index: 0
        }
    }
}