import { useDispatch, useSelector } from 'react-redux';
import { FC } from 'react';
import { deleteContact } from '../redux/contact/contact';

const ContactsList: FC = () => {
  const contacts = useSelector((state: Contact[]) => state);

  const dispatch = useDispatch();
  const deleteFromContact = (contact: Contact) => {
    dispatch(deleteContact(contact));
  };

  return (
    <ul className="list">
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li className="list__item" id={contact.id}>
            <div className="list__info">{contact.name}</div>
            <div className="list__info">{contact.number}</div>
            <button
              className="list__btn"
              type="button"
              onClick={() => deleteFromContact(contact)}
            >
              &#10005;
            </button>
          </li>
        ))
      ) : (
        <h2 className="heading-2">No contacts yet!</h2>
      )}
    </ul>
  );
};

export default ContactsList;
