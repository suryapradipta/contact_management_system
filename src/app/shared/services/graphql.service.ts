import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) {}

  getAllContactsWithUsers(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          getAllContactsWithUsers {
            firstName
            lastName
            email
            phone
            user {
              username
            }
          }
        }
      `,
    });
  }
}
