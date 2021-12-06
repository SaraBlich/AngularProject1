import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subpage1Component } from './subpage1.component';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { CommentsectionModule } from '../../commentsection/commentsection.module';


let id = 1;

var routes: Routes = [

    {path: '', component: Subpage1Component},
    {path: '1',loadChildren: () => import('./subpage1s1/subpage1s1.module').then(n => n.Subpage1s1Module)},
    {path: '2',loadChildren: () => import('./subpage1s2/subpage1s2.module').then(n => n.Subpage1s2Module)}

]



@NgModule({
  declarations: [Subpage1Component],
  imports: [
    
    RouterModule.forChild(routes),
    CommonModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    CommentsectionModule

  ]
})
export class Subpage1Module { }
