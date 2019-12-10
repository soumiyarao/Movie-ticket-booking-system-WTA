import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { SeatmatrixComponent } from './seatmatrix/seatmatrix.component';
import { PaymentComponent } from './payment/payment.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { PollingComponent } from './polling/polling.component';
import { PointsComponent } from './points/points.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArchivedMoviesComponent } from './components/archived-movies/archived-movies.component';
import { PollComponent } from './components/poll/poll.component';
import { ImageComponent } from './image/image.component';


const routes: Routes = [
  {path:"",redirectTo:"/homes",pathMatch:"full"},
  {path:"homes",component:UserhomeComponent},
  {path:"display",component:DisplayComponent},
  {path:"seat",component:SeatmatrixComponent},
  {path:"payment",component:PaymentComponent},
  {path:"login",component:SignInComponent},
  {path:"regis",component:SignUpComponent},
  {path:"poll",component:PollingComponent},
  {path:"points",component:PointsComponent},
  {path:"upcoming",component:UpcomingComponent},
  {path:"admin",component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'archives',component:ArchivedMoviesComponent},
  {path:'polls',component:PollComponent},
  {path:'image',component:ImageComponent},
  //{path:'',redirectTo:'home', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
