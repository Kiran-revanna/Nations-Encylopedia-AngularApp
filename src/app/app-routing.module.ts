import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
  },
  // {
  //   path: 'country/:id',
  //   component:DetailComponent,
  // },
  
  //In order to lazy load the data.
  {
    path:'country/:id',
    loadChildren: () => import('./pages/detail/detail.module').then(d => d.DetailModule)
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
