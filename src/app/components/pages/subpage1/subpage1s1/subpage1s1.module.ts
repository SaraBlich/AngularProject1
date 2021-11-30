import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subpage1s1Component } from './subpage1s1.component'
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CommentsectionComponent } from 'src/app/components/commentsection/commentsection.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [

  {path: '', component: Subpage1s1Component}

]

@NgModule({
  declarations: [
    Subpage1s1Component,
    CommentsectionComponent
  ],

  imports: [
    RouterModule.forChild(routes),
    CommonModule,

    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class Subpage1s1Module { }
