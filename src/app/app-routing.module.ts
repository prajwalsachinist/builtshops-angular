import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ AboutusComponent} from './components/aboutus/aboutus.component';
import{ CoMarketingComponent} from './components/co-marketing/co-marketing.component';
import{PartnersComponent} from './components/partners/partners.component';
import{PrivacypolicyComponent} from './components/privacypolicy/privacypolicy.component';


const routes: Routes = [
  {path:'aboutus',component:AboutusComponent},
  {path:'comarketing',component:CoMarketingComponent},
  {path:'partners',component:PartnersComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'',redirectTo:'/aboutus',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
