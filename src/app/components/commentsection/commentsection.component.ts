import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { commentDataService } from 'src/app/data/comment-data';
import { UserComment } from 'src/app/data/user-comment';


@Component({
  selector: 'app-commentsection',
  templateUrl: './commentsection.component.html',
  styleUrls: ['./commentsection.component.css'],
})
export class CommentsectionComponent implements OnInit {

  hide = true;


  URL = window.location.href

  originalUserComment: UserComment = {
    comment: ""
  };

  userComment: UserComment = {
    ...this.originalUserComment
  };

  constructor(private dataservice: commentDataService) { }

  

  onSubmit(form: NgForm){

    console.log("working?", form.valid)
    this.dataservice.postCommentForm(this.userComment).subscribe(

      result => console.log("sent",result),
      error => console.log("not",error)
      


    )

    document.getElementsByName("comment")[0].nodeValue = ""

  }

  ngOnInit(): void {


  }

}
