import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DefaultComponent } from './pages/default/default.component';
import { AuthGuard } from './helpers/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { StartComponent } from './pages/start/start.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path: 'home', 
    component: DefaultComponent,
    canActivate: [AuthGuard], children:[{
      path: '',
      component: HomeComponent,
    }, {
      path: 'profile',
      component: ProfileComponent,
    },{
      path: 'settings',
      component: SettingsComponent,
    }
  ]
  },  /* {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },*/ {
    path: '',
    component: StartComponent,
    pathMatch: 'full', 
  }, { 
    path: 'auth', 
    component: AuthComponent
  },
  // otherwise redirect to home
  {
    path: '**', 
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
