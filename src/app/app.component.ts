import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../app/services/hhtp-service/http-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  hService: HttpServiceService;

  constructor(hService:HttpServiceService) {
    this.hService = hService;
   }

  ngOnInit(){
    this.hService.cleanGame();
    //alert("HI")
  }
};

