import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted = false;
  success = false;
  messageForm: FormGroup;

  constructor(private form:FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.form.group({
        name: ['',Validators.required],
        message: ['',Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;

    if(this.messageForm.invalid){
      return;
    }

    this.success = true;

  }
}
