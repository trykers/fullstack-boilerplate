import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
  },
  {

  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);