import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  u=new FormGroup({
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    district:new FormControl('',[Validators.required]),
    pin:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
sbf(){
  console.log(this.u.value);
}
}
