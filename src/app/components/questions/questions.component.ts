import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../models/question.model';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {

  private currentQuestion : Question;

  public questions: Question[];
  url: string = "http://localhost:3000/question"
  questionWasSelected(question: Question):void{

  }
  constructor(http:Http) {
    http.get(this.url).subscribe(result =>{
      this.questions = result.json() as Question[];
    }, error => console.error(error));
    
    }
    }
    
