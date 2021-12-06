import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserComment } from "../data/user-comment";

@Injectable({
    providedIn: 'root'
})

export class commentDataService {

    constructor(private http: HttpClient) { }


    
    BaseURL = "https://localhost:44309/CommentBase"

    postCommentForm(userComment: UserComment) : Observable<any> {

        const CurrentID = ((window.location.href).split("/"))[4]

        return this.http.post(this.BaseURL + "/" + CurrentID, userComment);
        
        
        //return of(userComment);

    }

    getCommentData() : Observable<any> {

        const CurrentID = ((window.location.href).split("/"))[4]

        return this.http.get(this.BaseURL + "/" + CurrentID)

    }

    getPostData() : Observable<any> {

        return this.http.get("https://localhost:44309/PostBase")

    }

}