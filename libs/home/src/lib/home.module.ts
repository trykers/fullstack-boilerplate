import { NgModule } from '@angular/core';
import { SharedModule } from '@kubic/shared';
// import { AuthModule } from '@kubic/auth';

// import { HomeRouting } from './home.routing';
import { HeaderComponent } from './components';
import {
  // LoginComponent,
  HomeLayoutComponent,
  // LandingComponent,
  // PricingComponent
} from './containers';

@NgModule({
  exports: [
    SharedModule,
    HeaderComponent,
    // HomeLayoutComponent,
  ],
  declarations: [
    HeaderComponent,
    // HomeLayoutComponent,
    // LoginComponent,
    // LandingComponent,
    // PricingComponent,
  ],
  imports: [
    // AuthModule,
    SharedModule,
    /*NgxsModule.forFeature([
      LoginState,
    ]),*/
    // HomeRouting,
  ]
})
export class HomeModule {}
