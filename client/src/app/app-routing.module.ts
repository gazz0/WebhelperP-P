import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DefaultComponent } from './pages/default/default.component';


const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [{
      path: '',
      component: HomeComponent
    }, 

    ]
  },

  {path: 'home', component: HomeComponent},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
