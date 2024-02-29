import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {GraphqlService} from "../../shared/services/graphql.service";
import {filter, map, Subject, Subscription, tap} from "rxjs";
import {Contact} from "../../shared/models/contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  subscription: Subscription;

  constructor(private contactService: GraphqlService) {
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.subscription = this.contactService.getAllContactsWithUsers().pipe(
      // map to transform data received from the graphql
      map(result => result.data.getAllContactsWithUsers),

      // tap for logging, debugging, side effects
      tap(contacts => console.log('ALL CONTACTS: ', contacts)),

      // map to formatting the data
      map(contacts => contacts
        .filter(contact => contact.email && contact.email.includes('@'))
        .map(contact => ({
          id: contact.id,
          fullName: `${contact.firstName} ${contact.lastName}`,
          email: contact.email,
          phone: contact.phone,
          username: contact.user.username
        }))
      ),
      // filter((contacts) => contacts.every(contact => contact.email.includes('@'))),
      tap(validContacts => console.log('VALID & TRANSFORMED CONTACTS:', validContacts)),

    ).subscribe((transformedContacts) => {
      this.contacts = transformedContacts;
      console.log(this.contacts)
    })
  }
}
