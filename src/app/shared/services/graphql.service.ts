import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) {
  }

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

  loginUser(username: string, password: string) {
    return this.apollo.query<any>({
      query: gql`
        query loginUser($request: LoginUserRequest) {
          loginUser(request: $request) {
            token,
            expiredTokenAt
          }
        }
      `,
      variables: {
        request: {
          username,
          password
        }
      }
    });
  }

  logOutUser(token: string) {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation logOutUser($token: String) {
          logOutUser(token: $token) {
            success
            message
          }
        }
      `,
      variables: {
        token
      }
    })
  }

  updateUser(token: string, name: string, password: string) {
    return this.apollo.mutate<any>({
      mutation: gql `
        mutation  updateUser($token: String, $request: UpdateUserRequest) {
          updateUser(token: $token, request: $request) {
            success
            message
          }
        }
      `,
      variables: {
        token,
        request: {
          name,
          password
        }
      }
    })
  }
}
