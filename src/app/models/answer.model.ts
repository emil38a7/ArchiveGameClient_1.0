
export class Answer {
  answerID : string;
  questionID: string;
  correctAnswer: string;
  constructor(answerID : string, questionID:string, correctAnswer:string){
      this.answerID = answerID;
      this.questionID = questionID;
      this.correctAnswer = correctAnswer;

  }
  
}
