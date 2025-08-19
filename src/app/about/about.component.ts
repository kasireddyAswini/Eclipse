import { Component, OnInit} from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(){};
  ngOnInit():void{
    let obser=new Observable(observer=>{
    observer.next('Hello');
    observer.next('World!');
    observer.complete();
  });
  obser.subscribe(b=>console.log(b));
let sub=new Subject();
sub.subscribe(a=>console.log(a));
sub.subscribe(c=>console.log(c));
sub.next("Hello World!");
 
let bs=new BehaviorSubject(0);
bs.subscribe(d=>console.log(d));
bs.next(1);
bs.next(2);
bs.subscribe(e=>console.log(e));
}
}
