import { useSelector } from 'react-redux';
import { FC } from 'react';
import ContactItem from './ContactItem';

const ContactsList: FC = () => {
  const contacts = useSelector((state: Contact[]) => state);

  const renderList = contacts.map((contact) => (
    <ContactItem key={contact.id} contact={contact} />
  ));

  return (
    <ul className="list">
      {contacts.length > 0 ? (
        renderList
      ) : (
        <h2 className="heading-2">Список пуст</h2>
      )}
    </ul>
  );
};

export default ContactsList;
