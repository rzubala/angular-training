import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,    
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule {}