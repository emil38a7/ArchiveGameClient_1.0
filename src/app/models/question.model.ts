export class Question {
    questionID : string;
    questionText: string;
    questionDifficulty: string;
    constructor(questionID : string, questionText:string, questionDifficulty:string){
        this.questionID = questionID;
        this.questionText = questionText;
        this.questionDifficulty = questionDifficulty;

    }
}
