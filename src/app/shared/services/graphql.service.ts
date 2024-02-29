import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {map, Observable} from "rxjs";

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
            id
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

  registerUser(username: string, name: string, password: string) {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation registerUser($request: RegisterUserRequest) {
          registerUser(request: $request) {
            success
            message
          }
        }
      `,
      variables: {
        request: {
          username,
          name,
          password
        }
      }
    });
  }
}
