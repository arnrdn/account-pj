import React, { FC, ReactElement, ReactNode } from 'react';

const ContactItem: FC = ({ contact }) => {
  return (
    <li>
      {console.log(contact)}
      {contact.name}
      {contact.number}
      <button type="button">Изменить</button>
      <button type="button">X</button>
    </li>
  );
};

export default ContactItem;
