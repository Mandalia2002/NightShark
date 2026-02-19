import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InformeComponent } from './informe/informe.component';
import { PesoComponent } from './peso/peso.component';
import { DayComponent } from './day/day.component';
import { VoidComponent } from './void/void.component';
import { MorningComponent } from './morning/morning.component';
import { NightComponent } from './night/night.component';

export const routes: Routes = [
    {path: '', redirectTo:'Inicio',pathMatch:'full', component: InicioComponent},
    {path: 'Inicio', component: InicioComponent},
    {path: 'Informe', component: InformeComponent},
    {path: 'Peso', component: PesoComponent},
    {path: 'Day', component: DayComponent},
    {path: 'Morning', component: MorningComponent},
    {path: 'Night', component: NightComponent},
    {path: '**', component: VoidComponent},
];
