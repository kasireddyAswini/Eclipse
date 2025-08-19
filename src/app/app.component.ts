import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';
  active=true;
  obj=[{
    name:"Aswini",
    id:6213
  }];
  name='admin';
  eveAc(a:string){
    this.name=a;
  }
  c="yellow";
}
