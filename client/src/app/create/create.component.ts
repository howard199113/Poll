import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  currentUser: any = {name:""};

  newQuestion: object = {question:"", option1:"", option2:"", option3:"", option4:""};

  constructor(private _apiService: ApiService,
  private _router: Router) { }

  ngOnInit() {
    this._apiService.getCurrentUser()
    .then((data)=>{
      this.currentUser = data;
    })
    .catch((error)=>{
      console.log(error);
        this._router.navigate(['']);
    })
  }

  onSubmit(){
    console.log('Hit onSubmit');
    this._apiService.addQuestion(this.newQuestion)
    .then((data)=>{
      if(data.errors == undefined){
        console.log(data);
        this._router.navigate(['home']).then((data)=>{
          console.log('You have successfully added a question!!')
        })
      }
    })
  }

}
