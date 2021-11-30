import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subpage1Component } from './subpage1.component';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

    {path: '', component: Subpage1Component}

]

@NgModule({
  declarations: [Subpage1Component],
  imports: [
    
    RouterModule.forChild(routes),
    CommonModule,
    MatDividerModule,
    MatListModule,
    FormsModule

  ]
})
export class Subpage1Module { }
