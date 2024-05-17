import { Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { KinkekaartComponent } from './kinkekaart/kinkekaart.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { SeadedComponent } from './seaded/seaded.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { EsindusedComponent } from './esindused/esindused.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TarnijaComponent } from './tarnija/tarnija.component';
import { YksToodeComponent } from './yks-toode/yks-toode.component';
import { YksEsindusComponent } from './yks-esindus/yks-esindus.component';

export const routes: Routes = [
  {path: "", component: AvalehtComponent},
  {path: "kinkekaart", component: KinkekaartComponent},
  {path: "lisa-toode", component: LisaToodeComponent},
  {path: "ostukorv", component: OstukorvComponent},
  {path: "seaded", component: SeadedComponent},
  {path: "halda", component: HaldaTooteidComponent},
  {path: "esindused", component: EsindusedComponent},
  {path: "tarnija", component: TarnijaComponent},
  {path: "toode/:nimi", component: YksToodeComponent},
  {path: "esindus/:linn/:index", component: YksEsindusComponent},
  {path: "**", component: NotFoundComponent},
];

// 17.05 R 9.00-12.15

// 21.05 T 9.00-12.15
// 23.05 N 9.00-12.15

// 28.05 T 9.00-12.15
// 31.05 R 9.00-12.15