import { useNavigate, Navigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactsList from '../components/ContactsList';

const Contacts: FC = () => {
  const [isAuth, setAuth] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isLogin: string = localStorage.getItem('isAuth') || '{}';

    interface IparsedLogin {
      auth: boolean;
    }

    const parsedLogin: IparsedLogin = JSON.parse(isLogin);

    if (parsedLogin.auth === true) {
      setAuth(true);
      navigate('/');
    }
  }, [navigate, setAuth]);

  const handleExit = (): void => {
    localStorage.setItem(
      'isAuth',
      JSON.stringify({
        auth: false,
      })
    );
    setAuth(false);
    navigate('/login');
  };

  return isAuth ? (
    <div className="contacts">
      <ContactForm />
      <ContactsList />
      <button
        className="btn contacts__btn contacts__exit-btn"
        onClick={handleExit}
      >
        Выйти
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Contacts;
