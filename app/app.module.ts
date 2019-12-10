import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgImageSliderModule} from 'ng-image-slider';

import {SlideshowModule} from 'ng-simple-slideshow';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SeatmatrixComponent } from './seatmatrix/seatmatrix.component';
import { PaymentComponent } from './payment/payment.component'
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { PollingComponent } from './polling/polling.component';
import { PointsComponent } from './points/points.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddComponent } from './components/add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollComponent } from './components/poll/poll.component';
import { MatSnackBar, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatTableModule, MatOptionModule, MatIconModule, MatSelectModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSlider, MatSliderModule } from '@angular/material';
import { ArchivedMoviesComponent } from './components/archived-movies/archived-movies.component';
import { ImageComponent } from './image/image.component';
import {MatFileUploadModule} from 'angular-material-fileupload';



@NgModule({
  declarations: [
    AppComponent,
   
    DisplayComponent,
    SeatmatrixComponent,
    PaymentComponent,
    SignUpComponent,
    SignInComponent,
    PollingComponent,
    PointsComponent,
    UpcomingComponent,
    UserhomeComponent,
    EditComponent,
    HomeComponent,
    ProfileComponent,
    AddComponent,
    PollComponent,
    ArchivedMoviesComponent,
    ImageComponent
    
   

  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    NgImageSliderModule,
   BrowserAnimationsModule,
    SlideshowModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    SelectDropDownModule,
    SlideshowModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatOptionModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFileUploadModule,
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
