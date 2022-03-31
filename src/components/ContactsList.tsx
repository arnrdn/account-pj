import { useSelector } from 'react-redux';
import { FC } from 'react';
import ContactItem from './ContactItem';

const ContactsList: FC = () => {
  const contacts = useSelector((state: Contact[]) => state);

  const renderList = contacts.map((contact) => (
    <ContactItem key={contact.id} contact={contact} />
  ));
  return (
    <div>
      <ul>{contacts.length > 0 ? renderList : <h1>No contacts yet!</h1>}</ul>
    </div>
  );
};

export default ContactsList;
