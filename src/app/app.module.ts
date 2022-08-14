import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { DesignComponent } from './components/design/design.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MsgDialogComponent } from './components/msg-dialog/msg-dialog.component';
import { AnimalDialogComponent } from './components/animal-dialog/animal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DesignComponent,
    HomeComponent,
    MsgDialogComponent,
    AnimalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'demo', component: DemoComponent },
      { path: 'design', component: DesignComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
