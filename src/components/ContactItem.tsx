import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contact/contact';

const ContactItem = (props: ContactItemProps) => {
  const dispatch = useDispatch();
  const deleteFromContact = (contact: Contact) => {
    dispatch(deleteContact(contact));
  };
  return (
    <li className="list__item" id={props.contact.id}>
      <div className="list__info">{props.contact.name}</div>
      <div className="list__info">{props.contact.number}</div>
      <button
        className="list__btn"
        type="button"
        onClick={() => deleteFromContact(props.contact)}
      >
        &#10005;
      </button>
    </li>
  );
};

export default ContactItem;
