import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserData } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from '../Navigation/Navigation.module.css';
import { apiLogoutUser } from '../../redux/auth/operations';

const Navigation = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.headerLink, {
      [css.active]: isActive,
    });

  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };
  return (
    <>
      <NavLink className={getNavLinkClassNames} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/contacts">
        Contacts
      </NavLink>
      <span>Hi, {userData.name}</span>
      <button type="button" onClick={onLogOut} className={css.onLogOutBtn}>
        Logout
      </button>
    </>
  );
};

export default Navigation;
