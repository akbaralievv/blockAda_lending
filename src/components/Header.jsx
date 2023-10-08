import { useDispatch } from 'react-redux';
import { setIsActive, setIsOpenModal, setIsVisible } from '../redux/slices/isModalSlice';

function Header() {
  const dispatch = useDispatch();
  const handleClick = (e, isActive) => {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    dispatch(setIsOpenModal(true));
    dispatch(setIsActive(isActive));
    dispatch(setIsVisible(true));
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <nav className="nav">
            <div className="logo">
              <h2>BlockAda</h2>
            </div>
            {/* <div className="nav-button">
              <a href="/">for Chrome</a>
            </div> */}
          </nav>
          <div className="button">
            <a href="/" onClick={(e) => handleClick(e, true)}>
              Sign in
            </a>
            <a href="/" onClick={(e) => handleClick(e, false)}>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
