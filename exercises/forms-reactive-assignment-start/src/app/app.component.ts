import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  statuses: string[] = ['Stable', 'Critical', 'Finished']

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, Validators.required, this.validateProjectNameAsync),
      'mail': new FormControl(null, [ Validators.required, Validators.email]),
      'status': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  validateProjectName(input: FormControl) : {[s: string]: boolean} {
    if (input.value === 'Test') {
      return {'forbiddenName': true};
    }
    return null;
  }

  validateProjectNameAsync(input: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input.value === 'Test') {
          resolve({'forbiddenName': true});
        } else {
          resolve(null);
        }
        
      }, 1500);
    });
    return promise;
  }
}
