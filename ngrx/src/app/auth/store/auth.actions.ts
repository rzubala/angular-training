import { Action } from "@ngrx/store";

export const TRY_SIGNUP = 'TRY_SIGNUP'
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action {
    readonly type: string = TRY_SIGNUP;

    constructor(private payload: {}) {}
}

export class Signup implements Action {
    readonly type: string = SIGNUP;
    public payload: any;
}

export class Signin implements Action {
    readonly type: string = SIGNIN;
    public payload: any;
}

export class Logout implements Action {
    readonly type: string = LOGOUT;
    public payload: any;
}

export class SetToken implements Action {
    readonly type: string = SET_TOKEN;

    constructor(public payload: string) {}
}

export type AuthActions = SetToken | Signup | Signin | Logout;