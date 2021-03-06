import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HelpComponent } from './help/help.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    HelpComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
