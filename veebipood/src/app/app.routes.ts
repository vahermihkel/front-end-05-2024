import { Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { KinkekaartComponent } from './kinkekaart/kinkekaart.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { SeadedComponent } from './seaded/seaded.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';

export const routes: Routes = [
  {path: "", component: AvalehtComponent},
  {path: "kinkekaart", component: KinkekaartComponent},
  {path: "lisa-toode", component: LisaToodeComponent},
  {path: "ostukorv", component: OstukorvComponent},
  {path: "seaded", component: SeadedComponent},
  {path: "halda", component: HaldaTooteidComponent},
];

// 07.05 T 9.00-10.30
// 10.05 R 9.00-12.15

// 15.05 K 9.00-12.15
// 17.05 R 9.00-12.15

// 21.05 T 9.00-12.15
// 23.05 N 9.00-12.15

// 28.05 T 9.00-12.15
// 31.05 R 9.00-12.15