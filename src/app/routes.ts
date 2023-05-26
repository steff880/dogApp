import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';

// Create and export routes configuration by specifying the path to each component.
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'bio/:id',
    component: BioComponent,
    title: 'Bio',
  },
];

export default routeConfig;
