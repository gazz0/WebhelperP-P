import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DefaultComponent } from './pages/default/default.component';
import { AuthGuard } from './helpers/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';


const routes: Routes = [
  {
    path: '', component: DefaultComponent, canActivate: [AuthGuard],  children: [{
      path: '',
      component: HomeComponent
    },

    ]
  },

  {path: 'auth', component: AuthComponent},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
