import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SectionPage } from './pages/section/section-page';
import { LoginClientPageComponent } from './pages/security/room/login-client.page/login-client.page.component';
import { AuthGuardService } from './shared/services/Guard/auth-room.guard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginModalComponent } from './shared/components/login-modal/login-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './shared/components/card/card.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { SectionComponent } from './shared/components/section/section.component';
import { CategoryPage } from './pages/category/category-page';
import { CategoryComponent } from './shared/components/category/category.component';
import { AccommodationCardComponent } from './shared/components/accommodation-card/accommodation-card.component';
import { AccommodationPage } from './pages/accommodation-page/accommodation-page.component';
import { AccommodationComponent } from './shared/components/accommodation/accommodation.component';
import { LoginEmployeeComponent } from './pages/login-employee/login-employee.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ConfigHotelGuard } from './shared/services/Guard/config-hotel.guard';
import { ButtonComponent } from './shared/components/button/button.component';
import { ToastrModule } from 'ngx-toastr';
import { RoleGuard } from './shared/services/Guard/role.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginClientPageComponent,
    SectionPage,
    CardComponent,
    CarouselComponent,
    HomePageComponent,
    SectionComponent,
    CategoryComponent,
    CategoryPage,
    AccommodationComponent,
    LoginEmployeeComponent,
    AccommodationPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    HammerModule,
    LoginModalComponent,
    BrowserAnimationsModule,
    NavbarComponent,
    FormsModule,
    AccommodationCardComponent,
    ButtonComponent,
    ModalComponent,
    CartComponent,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: 'authRoom',
      useFactory: (service: AuthGuardService) => service.authRoom(),
      deps: [AuthGuardService],
    },
    {
      provide: 'authEmployee',
      useFactory: (service: AuthGuardService) => service.authEmployee(),
      deps: [AuthGuardService],
    },
    {
      provide: 'configHotel',
      useFactory: (service: ConfigHotelGuard) => service.configHotel(),
      deps: [ConfigHotelGuard],
    },
    {
      provide: 'roleGuard',
      useFactory: (service: RoleGuard) => service.roleGuard(),
      deps: [RoleGuard],
    },
    {
      provide: 'roleGuardAdmin',
      useFactory: (service: RoleGuard) => service.roleGuardAdmin(),
      deps: [RoleGuard],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
