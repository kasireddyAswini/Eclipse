import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  mobiles=['redmi','realme','samsung','apple'];
  products=[
      {id:101,price:10000},
      {id:102,price:20000}
    ];
}
