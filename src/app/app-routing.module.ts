import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ AboutusComponent} from './components/aboutus/aboutus.component';
import { AdvertiesComponent } from './components/adverties/adverties.component';
import{ CoMarketingComponent} from './components/co-marketing/co-marketing.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import{PartnersComponent} from './components/partners/partners.component';
import{PrivacypolicyComponent} from './components/privacypolicy/privacypolicy.component';
import { SellComponent } from './components/sell/sell.component';


const routes: Routes = [
  {path:'aboutus',component:AboutusComponent},
  {path:'comarketing',component:CoMarketingComponent},
  {path:'partners',component:PartnersComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'adverties',component:AdvertiesComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'helppage',component:HelpPageComponent},
  {path:'sell',component:SellComponent},
  {path:'',redirectTo:'/aboutus',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
