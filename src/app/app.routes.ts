import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './frontend/home-layout/home-layout.component';

export const routes: Routes = [
    {
    path: '',
    component: HomeLayoutComponent,
    loadChildren: () =>
      import('./frontend/home-layout/routes').then(
        (m) => m.routes
      ),
    }
];
