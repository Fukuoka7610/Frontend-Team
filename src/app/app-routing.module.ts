import { RouterModule, Routes } from '@angular/router';

import { MembersPageComponent } from './members-page/members-page.component';
import { NgModule } from '@angular/core';
import { TeamPageComponent } from './team-page/team-page.component';

const routes: Routes = [
  { path: '', component: TeamPageComponent },
  { path: 'members', component: MembersPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
