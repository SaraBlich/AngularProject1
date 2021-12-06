import { Component, OnInit } from '@angular/core';
import { commentDataService } from 'src/app/services/comment-data';

@Component({
  selector: 'app-subpage1',
  templateUrl: './subpage1.component.html',
  styleUrls: ['./subpage1.component.css']
})

export class Subpage1Component implements OnInit {
  posties: any;

  constructor(private dataservice: commentDataService) { }

  ngOnInit(): void {

    this.dataservice.getPostData().subscribe(result => this.posties = result)
    

  }

}
