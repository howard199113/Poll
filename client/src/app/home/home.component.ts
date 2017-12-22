import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

currentUser: any = {name:""};
allQuestions: any[];
searchString: any;
questionID: any = {qid:""};
shownQuestions: any[];


  constructor(private _apiService: ApiService,
  private _router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getAllQuestions();
  }

  getCurrentUser(){
    this._apiService.getCurrentUser()
    .then((data)=>{
      console.log(data);
      this.currentUser = data;
    })
    .catch((error)=>{
      console.log(error);
        this._router.navigate(['']);
    })
  }

  getAllQuestions(){
    this._apiService.getAllQuestions()
    .then((data)=>{
      console.log(data);
      this.allQuestions = data;
      this.shownQuestions = data;
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  delete(qid){
    this.questionID.qid = qid;
    console.log(this.questionID);
    this._apiService.delete(this.questionID)
    .then((data)=>{
      console.log(data);
      location.reload();
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  searchScore(){
    console.log("hit searchScore", this.searchString);
    this.shownQuestions = this.allQuestions.filter((question)=>{
      console.log(question.question.includes(this.searchString));
      return question.question.toLowerCase().includes(this.searchString);

      // score.score.toString().includes(this.searchString);
    })
  }

  logout(){
    console.log('hit logOut')
    this._apiService.logout()
    .then((data)=>{
      console.log(data.currentUserSession);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
