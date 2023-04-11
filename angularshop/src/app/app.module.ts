import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './productPage/productPage.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ReviewComponent } from './review/review.component';
import { FeatureComponent } from './feature/feature.component';
import { FramesComponent } from './frames/frames.component';
import { VaseComponent } from './vase/vase.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { LightComponent } from './light/light.component';
import { ClocksComponent } from './clocks/clocks.component';
import { MirrorComponent } from './mirror/mirror.component';
import { CupComponent } from './cup/cup.component';
import { OrderPopupComponent } from './order-popup/order-popup.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [																										
    AppComponent,
      HomeComponent,
      FooterComponent,
      HeaderComponent,
      LoginComponent,
      SignupComponent,
      ContactusComponent,
      DashboardComponent,
      ProductPageComponent,
      AddtocartComponent,
      ReviewComponent,
      FeatureComponent,
      FramesComponent,
      VaseComponent,
      SculpturesComponent,
      LightComponent,
      ClocksComponent,
      MirrorComponent,
      CupComponent,
      OrderPopupComponent,
      CheckOutComponent,
      PaymentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
