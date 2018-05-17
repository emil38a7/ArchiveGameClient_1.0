export class Game {
    gameID : string;
    questionRelationID: string;
    playerRelationID: string;
    constructor(gameID : string, questionRelationID:string, playerRelationID:string){
        this.gameID = gameID;
        this.questionRelationID = questionRelationID;
        this.playerRelationID = playerRelationID;

    }
}
