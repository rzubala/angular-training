import { Observable } from 'rxjs';
import { FormControl} from '@angular/forms';

export class CustomValidators {
    static validateProjectName(input: FormControl): { [s: string]: boolean } {
        if (input.value === 'Test') {
            return { 'forbiddenName': true };
        }
        return null;
    }

    static validateProjectNameAsync(input: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (input.value === 'TestP') {
                    resolve({ 'forbiddenName': true });
                } else {
                    resolve(null);
                }

            }, 1500);
        });
        return promise;
    }
}
