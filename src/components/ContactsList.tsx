import { useSelector } from 'react-redux';
import { RootStateOrAny } from 'react-redux';
import { FC } from 'react';
import ContactItem from './ContactItem';

const ContactsList: FC = () => {
  const contacts = useSelector((state: Contacts[]) => state);

  interface Contact {
    id: string;
    name: string;
    number: string;
  }

  interface Contacts {
    [key: number]: {
      id: string;
      name: string;
      number: string;
    };
  }

  const renderList = contacts.map((contact: Contact) => (
    <ContactItem key={contact.id} contact={contact} />
  ));
  return (
    <div>
      {console.log(contacts)}
      <ul>{contacts.length > 0 ? renderList : <h1>No contacts yet!</h1>}</ul>
    </div>
  );
};

export default ContactsList;
