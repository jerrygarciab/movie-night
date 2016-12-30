import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieInfoComponent } from './movie-info/movie-info.component';
import { UserAdminComponent } from './user-admin/user-admin.component';

const appRoutes: Routes = [
    //{ path: '', component: LoginComponent }, @TODO Create LoginComponent
    { path: '', component: MovieInfoComponent },
    { path: 'movie-info', component: MovieInfoComponent },
    { path: 'user-admin', component: UserAdminComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
