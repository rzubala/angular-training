import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignup;

    constructor(private actions$: Actions) {}
}