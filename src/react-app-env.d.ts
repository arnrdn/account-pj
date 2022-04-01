/// <reference types="react-scripts" />

interface IInitialStateObj {
  id: string;
  name: string;
  number: string;
}

interface IPayload {
  id: string;
  name: string;
  number: string;
}

interface IEditPayload {
  id: string;
}

interface IAction {
  type: string;
  payload: IPayload;
}

interface Contact {
  id: string;
  name: string;
  number: string;
}

interface ContactItemProps {
  key: string;
  contact: Contact;
}

interface IparsedLogin {
  auth: boolean;
}

interface IparsedContacts {
  id: string;
  name: string;
  number: string;
}
