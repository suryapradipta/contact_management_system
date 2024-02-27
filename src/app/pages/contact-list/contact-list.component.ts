import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {GraphqlService} from "../../shared/services/graphql.service";
import {filter, map, Subject, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];
  subscription: Subscription;

  constructor(private contactService: GraphqlService) {
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    /*this.contactService.getAllContactsWithUsers().subscribe(
      (result) => {
      this.contacts = result.data.getAllContactsWithUsers;

      console.log(this.contacts);
    });*/

    /*this.contactService.getAllContactsWithUsers()
      .pipe(map(result => result.data.getAllContactsWithUsers.map(
        contact => ({
          fullName: `${contact.firstName} ${contact.lastName}`,
          email: contact.email,
          phone: contact.phone,
          username: contact.user.username
        }))))
      .subscribe((transformedContacts) => {
        this.contacts = transformedContacts;
        console.log("This the MAP Operator", this.contacts);
      })*/


    this.subscription = this.contactService.getAllContactsWithUsers().pipe(
      // map to transform data received from the graphql
      map(result => result.data.getAllContactsWithUsers),

      // tap for logging, debugging, side effects
      tap(contacts => console.log('ALL CONTACTS: ', contacts)),

      map(contacts => contacts
        .filter(contact => contact.email && contact.email.includes('@'))
        .map(contact => ({
          fullName: `${contact.firstName} ${contact.lastName}`,
          email: contact.email,
          phone: contact.phone,
          username: contact.user.username
        }))
      ),
      // filter((contacts) => contacts.every(contact => contact.email.includes('@'))),
      tap(validContacts => console.log('VALID & TRANSFORMED CONTACTS:', validContacts)),

      // // map to formatting the data
      // map(validContacts => validContacts.map(contact => ({
      //   fullName: `${contact.firstName} ${contact.lastName}`,
      //   email: contact.email,
      //   phone: contact.phone,
      //   username: contact.user.username
      // })))
    ).subscribe((transformedContacts) => {
      this.contacts = transformedContacts;
    })
  }
}
