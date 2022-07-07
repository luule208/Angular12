import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { GetDataComponent } from './get-data/get-data.component';
import { GuardLoginNavComponent } from './guard-login-nav/guard-login-nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { PostDataComponent } from './post-data/post-data.component';
import { QRComponent } from './qr/qr.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'templateform', component: TemplateDrivenFormComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'getdata', component: GetDataComponent },
  { path: 'postdata', component: PostDataComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'qr', component: QRComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
