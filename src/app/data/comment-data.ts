import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserComment } from "./user-comment";

@Injectable({
    providedIn: 'root'
})

export class commentDataService {

    constructor(private http: HttpClient) { }

    postCommentForm(userComment: UserComment) : Observable<any> {

        return this.http.post('components/firstpost', userComment);
        
        
        //return of(userComment);

    }

}