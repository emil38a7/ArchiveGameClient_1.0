import{ Answer } from '../models/answer.model';
export class Question {
    questionID : string;
    questionText: string;
    questionDifficulty: string;
    questionAnswers: Array<{answerID :string,answerText :string,correctAnswer:string}>;
    
    constructor(questionID : string, questionText:string, questionDifficulty:string, questionAnswers:Array<{answerID:string,answerText:string,correctAnswer:string}>){
        this.questionID = questionID;
        this.questionText = questionText;
        this.questionDifficulty = questionDifficulty;
        this.questionAnswers = Array<{answerID,answerText,correctAnswer}>();

    }
}
