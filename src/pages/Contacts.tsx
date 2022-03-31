import { useNavigate, Navigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';

const Contacts: FC = () => {
  const [isAuth, setAuth] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('isAuth');
    const parsedAuth: object = JSON.parse(auth);
    if (parsedAuth.auth === true) {
      setAuth(true);
    }
  });

  const handleExit = () => {
    localStorage.removeItem('isAuth');
    setAuth(false);
    navigate('/login');
  };

  return isAuth ? (
    <div>
      Welcome
      <button onClick={handleExit}>Выйти</button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Contacts;
