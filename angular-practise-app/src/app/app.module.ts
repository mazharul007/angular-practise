import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { OthersComponent } from './others/others.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    BindingsComponent,
    DirectivesComponent,
    OthersComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

