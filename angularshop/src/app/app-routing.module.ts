import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './productPage/productPage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ReviewComponent } from './review/review.component';
import { FeatureComponent } from './feature/feature.component';
import { CupComponent } from './cup/cup.component';
import { LightComponent } from './light/light.component';
import { FramesComponent } from './frames/frames.component';
import { MirrorComponent } from './mirror/mirror.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { VaseComponent } from './vase/vase.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'productPage', component: ProductPageComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'addtocart',component:AddtocartComponent},
  {path:'review',component:ReviewComponent},
  {path:'feature',component:FeatureComponent},
  {path:'cup',component:CupComponent},
  {path:'light',component:LightComponent},
  {path:'vase',component:VaseComponent},
  {path:'frames',component:FramesComponent},
  {path:'mirror',component:MirrorComponent},
  {path:'sculptures',component:SculpturesComponent},
  {path:'checkOut',component:CheckOutComponent},
  {path:'payment',component:PaymentComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
