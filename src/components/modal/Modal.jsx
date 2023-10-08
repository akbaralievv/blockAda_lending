import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import closeIcon from '../../assets/icons/close.svg';
import { setIsActive, setIsOpenModal, setIsVisible } from '../../redux/slices/isModalSlice';
import SignIn from '../forms/signIn';
import SignUp from '../forms/SignUp';

function Modal() {
  const { isActive, isVisible } = useSelector((state) => state.isModalSlice);
  const modalRef = useRef();
  const dispatch = useDispatch();

  const handleClick = (isActive) => {
    dispatch(setIsActive(isActive));
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    dispatch(setIsVisible(false));
    dispatch(setIsOpenModal(false));
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.inner} ${isVisible ? styles.visible : styles.hidden}`}
        ref={modalRef}>
        <div className={styles.content}>
          <div className={styles.close}>
            <img src={closeIcon} alt="close" onClick={closeModal} />
          </div>
          <nav>
            <div className={styles.nav}>
              <a className={isActive ? styles.activeAuth : ''} onClick={() => handleClick(true)}>
                Войти
              </a>
              <a className={!isActive ? styles.activeReg : ''} onClick={() => handleClick(false)}>
                Регистрация
              </a>
            </div>
            <hr />
          </nav>
          {isActive ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}

export default Modal;
