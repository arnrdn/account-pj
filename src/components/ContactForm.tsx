import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addContact } from '../redux/contact/contact';

const ContactForm: FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (name === '' || number === '') return;
    const newContact = {
      id: uuid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Имя"
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          type="text"
          placeholder="Номер телефона"
        />
        <button onClick={(e) => handleSubmit(e)} type="button">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
