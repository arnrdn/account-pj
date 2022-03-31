import { FC, SyntheticEvent, useState } from 'react';
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
    <form className="contacts__form">
      <h1 className="heading-1">Добавьте контакт</h1>
      <label htmlFor="name" className="label">
        Имя:
      </label>
      <input
        className="input"
        onChange={(e) => setName(e.target.value)}
        name="name"
        value={name}
        type="text"
        placeholder="Введите имя..."
      />
      <label htmlFor="number" className="label">
        Номер:
      </label>
      <input
        className="input"
        onChange={(e) => setNumber(e.target.value)}
        name="number"
        value={number}
        type="text"
        placeholder="Введите номер телефона..."
      />
      <button
        className="btn contacts__btn"
        onClick={(e) => handleSubmit(e)}
        type="button"
      >
        Добавить
      </button>
    </form>
  );
};

export default ContactForm;
