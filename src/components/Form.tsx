import { useNavigate } from 'react-router-dom';
import { FC, useState } from 'react';

const Form: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (email === 'login@gmail.com' && pass === 'password') {
      localStorage.setItem(
        'isAuth',
        JSON.stringify({
          auth: true,
        })
      );
      navigate('/');
    }
  };

  return (
    <form className="login__form">
      <h1 className="heading-1">Войдите в аккаунт</h1>
      <label className="label" htmlFor="email">
        Почта:
      </label>
      <input
        className="input"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        id="email"
        placeholder="Введите свою почту..."
      />

      <label className="label" htmlFor="pass">
        Пароль:
      </label>
      <input
        className="input"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        type="password"
        name="pass"
        id="pass"
        placeholder="Введите свой пароль..."
      />

      <button className="btn login__btn" onClick={(e) => handleSubmit(e)}>
        Войти
      </button>
    </form>
  );
};

export default Form;
