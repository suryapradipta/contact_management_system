import {createActionGroup, props} from '@ngrx/store';
import {Contact} from "../models/contact.model";

export const ContactActions = createActionGroup({
  source: 'Contact',
  events: {
    'Add Contact': props<{ contactId: string }>(),
    'Remove Contact': props<{ contactId: string }>()
  }
});

export const ContactApiActions = createActionGroup({
  source: 'Contact API',
  events: {
    'Retrieved Book LIst': props<{contacts: ReadonlyArray<Contact>}>()
  }
});
