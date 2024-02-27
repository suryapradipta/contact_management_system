import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {map, Observable} from "rxjs";
import {RegisterUserRequest} from "../models/register-user-request.model";
import {User} from "../models/user.model";
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

  registerUser(username: string, name: string, password: string): Observable<User> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation RegisterUser($username: String!, $name: String!, $password: String!) {
          registerUser(username: $username, name: $name, password: $password) {
            id
            username
            name
          }
        }
      `,
      variables: {
        username,
        name,
        password
      }
    }).pipe(
      map(result => result.data.registerUser)
    );
  }
}
