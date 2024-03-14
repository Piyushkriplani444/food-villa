import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h3 className="p-10 m-10">
      This website is developer by - {user.name} - {user.email}
    </h3>
  );
};

export default Footer;
