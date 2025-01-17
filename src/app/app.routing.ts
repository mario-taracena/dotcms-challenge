import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { BlogListComponent } from './examples/bloglist/bloglist.component';
import { BlogDetailComponent } from './examples/blogdetail/blogdetail.component';

const routes: Routes =[
    { path: '', redirectTo: 'bloglist', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'bloglist',         component: BlogListComponent},
    { path: 'blog/:id',         component: BlogDetailComponent},
    { path: 'blog', redirectTo: 'bloglist', pathMatch: 'full' },
    { path: 'Blog/Blog', redirectTo: 'bloglist', pathMatch: 'full' },
    { path: '**', redirectTo: 'bloglist', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

