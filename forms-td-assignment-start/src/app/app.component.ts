import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('f') form: NgForm;
  submitted: boolean = false;
  data = {mail: '', subscription: '', password: ''};
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.form);

    this.data.mail = this.form.value.email;
    this.data.subscription = this.form.value.subscription;
    this.data.password = this.form.value.password;
    this.submitted = true;
    this.form.form.reset();
  }
}
