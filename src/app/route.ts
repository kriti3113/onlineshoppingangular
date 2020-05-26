import {Routes} from '@angular/router';
import {SearchComponent} from './components/search/search.component';

export const MAIN_ROUTES: Routes = [
  {
    path : '',
    redirectTo: '',
    pathMatch: 'full',

  },
  {
    path: 'getpro',
    component: SearchComponent
  },
];
