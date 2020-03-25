import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { OthersComponent } from './others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    BindingsComponent,
    DirectivesComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

