import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  register(userObj){
    return this._http.post('/users', userObj)
    .map(Response=>Response.json()).toPromise();
  }

  getCurrentUser(){
    return this._http.get('/home/current')
    .map(Response=>Response.json()).toPromise();
  }

  addQuestion(questionObj){
    return this._http.post('/home/add', questionObj)
    .map(Response=>Response.json()).toPromise();
  }

  getAllQuestions(){
    return this._http.get('/home/getAllQuestions')
    .map(Response=>Response.json()).toPromise();
  }

  getOptions(qidObj){
    return this._http.post('/home/getOptions', qidObj)
    .map(Response=>Response.json()).toPromise();
  }

  like1(qidObj){
    return this._http.post('/home/like1', qidObj)
    .map(Response=>Response.json()).toPromise();
  }

  like2(qidObj){
    return this._http.post('/home/like2', qidObj)
    .map(Response=>Response.json()).toPromise();
  }

  like3(qidObj){
    return this._http.post('/home/like3', qidObj)
    .map(Response=>Response.json()).toPromise();
  }

  like4(qidObj){
    return this._http.post('/home/like4', qidObj)
    .map(Response=>Response.json()).toPromise();
  }

  delete(qidObj){
    return this._http.post('/home/delete', qidObj)
    .map(Response=>Response.json()).toPromise();
  }

  logout(){
    return this._http.get('/home/logout')
    .map(Response=>Response.json()).toPromise();
  }
}
