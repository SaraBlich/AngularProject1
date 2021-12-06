import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {  MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CommentsectionModule } from './components/commentsection/commentsection.module';
import { Subpage1s1Module } from './components/pages/subpage1/subpage1s1/subpage1s1.module';
import { Subpage1s2Module } from './components/pages/subpage1/subpage1s2/subpage1s2.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    // MainpageComponent,
    // Subpage1Component,
    // Subpage1s1Component,
    // CommentsectionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CommentsectionModule,
    Subpage1s1Module,
    Subpage1s2Module,
    RouterModule.forRoot([
      {path: 'main', loadChildren: () => import('./components/pages/mainpage/mainpage.module').then(n => n.MainpageModule)},
      {path: 'components', loadChildren: () => import('./components/pages/subpage1/subpage1.module').then(n => n.Subpage1Module)},
      {path:'',redirectTo:'main', pathMatch: 'full' },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
