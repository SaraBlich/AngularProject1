import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { commentDataService } from 'src/app/services/comment-data';
import { UserComment } from 'src/app/data/user-comment';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-commentsection',
  templateUrl: './commentsection.component.html',
  styleUrls: ['./commentsection.component.scss'],
})

export class CommentsectionComponent implements OnInit {

  hide = true;

  public comment: string = ""; // we dont need public keyword here (in 20 and 21 line also). In angular, class fields are public by default
  public nickname: string = "";
  public commentSection: UserComment[] = [];

  constructor(public dataservice: commentDataService, private route: ActivatedRoute) { }

  onSubmit(form: NgForm){

    console.log("working?", form.valid); // all console logs should be deleted 

    console.log(form);
    if(form.valid)
    this.dataservice.postCommentForm(form.form.value as UserComment).subscribe(

      result => console.log("sent",result),
      error => {console.log("not",error)}
    )

    if(form.valid) // in line 30 we have the same condition. Why not to refactor this?
    this.commentSection.push(form.form.value as UserComment);
      
    form.form.reset()
  }

  ngOnInit(): void {

    this.dataservice.getCommentData().subscribe(result => this.commentSection = result)
  }

}
