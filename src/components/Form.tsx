import { useNavigate } from 'react-router-dom';
import { FC, useState } from 'react';

const Form: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email === 'login@gmail.com' && pass === 'password') {
      localStorage.setItem(
        'isAuth',
        JSON.stringify({
          auth: true,
        })
      );
      navigate('/contacts');
    }
  };

  return (
    <form className="login__form">
      <label htmlFor="email">
        Почта:
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
        />
      </label>
      <label htmlFor="pass">
        Пароль:
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          type="password"
          name="pass"
          id="pass"
        />
      </label>
      <button onClick={(e) => handleSubmit(e)}>Войти</button>
    </form>
  );
};

export default Form;
