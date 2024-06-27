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
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';
import { KategooriaComponent } from './kategooria/kategooria.component';
import { ShopComponent } from './shop/shop.component';
import { ImageComponent } from './image/image.component';
import { MapComponent } from './map/map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AutodComponent } from './tarnija/autod/autod.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {path: "", component: AvalehtComponent},
  {path: "kinkekaart", component: KinkekaartComponent},
  {path: "lisa-toode", component: LisaToodeComponent, canActivate: [authGuard]},
  {path: "ostukorv", component: OstukorvComponent},
  {path: "seaded", component: SeadedComponent},
  {path: "halda", component: HaldaTooteidComponent, canActivate: [authGuard]},
  {path: "esindused", component: EsindusedComponent},
  {path: "tarnija", component: TarnijaComponent, canActivate: [authGuard]},
  {path: "toode/:nimi", component: YksToodeComponent},
  {path: "muuda-toode/:nimi", component: MuudaToodeComponent, canActivate: [authGuard]},
  {path: "esindus/:linn/:index", component: YksEsindusComponent},
  {path: "kategooria", component: KategooriaComponent, canActivate: [authGuard]},
  {path: "poed", component: ShopComponent, canActivate: [authGuard]},
  {path: "pildid", component: ImageComponent, canActivate: [authGuard]},
  {path: "map", component: MapComponent},
  {path: "contact-us", component: ContactUsComponent},
  {path: "autod", component: AutodComponent, canActivate: [authGuard]},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "**", component: NotFoundComponent},
];