import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Item {
  id: number;
  item: string;
  source: string;
  cta: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})


export class ItemsService {

  constructor(private httpService: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getItems() {
    return this.httpService.get('assets/json/items.json');
  }
}
