import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  isShow: boolean = false;
  ngOnInit(): void {
    this.myForm;
  }
  myForm = new FormGroup({
    name: new FormControl('', Validators.minLength(3)),
    email: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  save() {
    console.log(this.myForm.value);
    this.isShow = true;
    this.myForm.reset();
  }
  update() {
    this.isShow = false;
  }
}
