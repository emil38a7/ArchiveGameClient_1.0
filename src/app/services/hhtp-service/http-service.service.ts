import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../../models/question.model';
import { Answer } from '../../models/answer.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 

@Injectable()
export class HttpServiceService {
questionToPost;
public resultArray: Question[];
;
url = "http://localhost:3000/question";
loginUrl = "http://localhost:3000/user/login";
userUrl = "http://localhost:3000/user";

  constructor(private http: Http){
}

loginHTTP(model): Observable<any> { 
  return this.http.post(this.loginUrl,model)
  .map(data => data.status);
}

displayQuestionList(): Observable<any> {
  return this.http.get(this.url)
  .map(data => data.json());
}

displayUserList():Observable<any> {
  return this.http.get(this.userUrl)
  .map(data => data.json());
}

postNewQuestion(model){
  this.questionToPost = model;
  console.log(this.questionToPost)
  this.http.post(this.url,this.questionToPost)
    .subscribe(
       (val) => {
          console.log("POST call successful value returned in body", val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
    }
}

export const ServiceHTTP_PROVIDERS: Array<any> = [
  { provide: HttpServiceService, useClass: HttpServiceService }
];
