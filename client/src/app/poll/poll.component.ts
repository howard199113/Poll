import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  questionID: any = {qid:""};
  foundQuestion: any;

  constructor(private _apiService: ApiService,
  private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getOptions();
  }

  getOptions(){
    this._route.paramMap.subscribe( params => {
      console.log(params.get('qid'));
      this.questionID.qid = params.get('qid');
      this._apiService.getOptions(this.questionID)
      .then((data)=>{
        console.log(data);
        this.foundQuestion = data;
      })
      .catch((error)=>{
        console.log(error);
      })
    })
  }

  like1() {
    console.log('like1', this.questionID.qid);
    this._apiService.like1(this.questionID)
    .then((data)=> {
      console.log(data);
      this.getOptions();
    })
  }

  like2() {
    console.log('like2', this.questionID.qid);
    this._apiService.like2(this.questionID)
    .then((data)=> {
      console.log(data);
      this.getOptions();
    })
  }

  like3() {
    console.log('like3', this.questionID.qid);
    this._apiService.like3(this.questionID)
    .then((data)=> {
      console.log(data);
      this.getOptions();
    })
  }

  like4() {
    console.log('like4', this.questionID.qid);
    this._apiService.like4(this.questionID)
    .then((data)=> {
      console.log(data);
      this.getOptions();
    })
  }

}
