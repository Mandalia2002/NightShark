import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InformeComponent } from './informe/informe.component';
import { PesoComponent } from './peso/peso.component';
import { TrackingComponent } from './tracking/tracking.component';
import { VoidComponent } from './void/void.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'Inicio', component: InicioComponent},
    {path: 'Informe', component: InformeComponent},
    {path: 'Peso', component: PesoComponent},
    {path: 'Tracking', component: TrackingComponent},
    {path: '**', component: VoidComponent},
];
