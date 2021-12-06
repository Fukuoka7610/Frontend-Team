import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { TeamPageComponent } from './team-page/team-page.component';
import { MembersPageComponent } from './members-page/members-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamPageComponent,
    MembersPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
