import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../redux/contact/contact';

const ContactItem = (props: ContactItemProps) => {
  const [edit, setEdit] = useState(false);
  const contacts = useSelector((state: Contact[]) => state);

  const dispatch = useDispatch();
  const deleteFromContact = () => {
    dispatch(deleteContact(props.contact));
  };

  const editFromContact = (id: string) => {
    setEdit(true);
    const selectedContact = contacts.find((contact) => contact.id === id);
    console.log(selectedContact);
  };
  return (
    <li id={props.contact.id}>
      {props.contact.name}
      {props.contact.number}
      <button type="button" onClick={() => editFromContact(props.contact.id)}>
        Изменить
      </button>
      <input type="text" className={edit} />
      <button type="button" onClick={deleteFromContact}>
        X
      </button>
    </li>
  );
};

export default ContactItem;
