import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  projectForms!: FormGroup;

  constructor( private fb:FormBuilder,) { }

  ngOnInit(): void {

    this.projectForms=this.fb.group({

      firstName:[null,[Validators.required]],
      
      lastName:[null,[Validators.required]],
      email:[null,[Validators.required]],
      phonenumber:[null,[Validators.required]], 
      address:[null,[Validators.required]], 
       

    })
  }

  onSubmit(){

  }

}
