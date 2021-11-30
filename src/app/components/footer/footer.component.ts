import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //variables

  title = 'AnguBlog';
  author = 'Jakub Proszek'

  constructor() { }

  ngOnInit(): void {
  }



  // funkcje
}
