import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { MyCenterComponent } from './my-center/my-center.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { RouterModule } from '@angular/router/src/router_module';
// import { Router } from '@angular/router/src/router';
// import { ROUTES } from '@angular/router/src/router_config_loader';

const appRoutes:Routes = [
  {
    path:"",
    redirectTo:'exhibition',
    pathMatch:'full',
    // canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'exhibition',
    loadChildren:'app/exhibition/exhibition.module#ExhibitionModule',
  },
  {
    path:'tale',
    loadChildren:'app/tale/tale.module#TaleModule',
  }
]


@NgModule({
  declarations: [
    AppComponent,
    MyCenterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
