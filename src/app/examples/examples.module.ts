import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { BlogListComponent } from './bloglist/bloglist.component';
import { ComponentsModule } from 'app/components/components.module';
import { BlogDetailComponent } from './blogdetail/blogdetail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ComponentsModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        BlogListComponent,
        BlogDetailComponent
    ]
})
export class ExamplesModule { }
