import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contact/contact';

const ContactItem = (props: ContactItemProps) => {
  const dispatch = useDispatch();
  const deleteFromContact = () => {
    dispatch(deleteContact(props.contact));
  };
  return (
    <li id={props.contact.id}>
      {props.contact.name}
      {props.contact.number}
      <button type="button">Изменить</button>
      <button type="button" onClick={deleteFromContact}>
        X
      </button>
    </li>
  );
};

export default ContactItem;
