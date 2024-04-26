import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'  // Ensures that the whole URL must match
    },
    {
        path: 'items',
        loadComponent: () => import('./pages/view-items/view-items.component').then(component => component.ViewItemsComponent)
    },
    {
        path: 'items/create',
        loadComponent: () => import('./pages/create-item/create-item.component').then(component => component.CreateItemComponent)
    }
];
