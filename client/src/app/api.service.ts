import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL: string = "http://192.168.99.100:3000/";
  constructor(public http: HttpClient, private messageService: MessageService) { }

  public get(path) {
    this.messageService.add('ApiService: fetched ' + path);
    var endpoint = this.API_URL + path;
    return this.http.get(endpoint);
  }
}
