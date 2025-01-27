import { useEffect, useState } from 'react';
import NavModalView from '../nav-modal-view/nav-modal-view';

const NavbarView = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Change background if page is scrolled after a certain point
    const handleScroll = () => {
      const navbarElem = document.querySelector('.navbar');
      if (window.scrollY > navbarElem.offsetHeight && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY < navbarElem.offsetHeight && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className={`navbar ${isScrolled && 'navbar--scrolled'}`}>
      <a href="https://dominicdecicco.io" className="navbar__brand">
        Dominic DeCicco
      </a>
      <a
        href="https://linkedin.com/in/dominicdecicco"
        className="icon-btn"
        target="_blank"
        rel="noreferrer"
      >
        <svg>
          <use
            xlinkHref={process.env.PUBLIC_URL + 'sprites.svg#icon-linkedin'}
          ></use>
        </svg>
      </a>

      <a
        href="https://github.com/ddecicco330web"
        className="icon-btn"
        target="_blank"
        rel="noreferrer"
      >
        <svg>
          <use
            xlinkHref={process.env.PUBLIC_URL + 'sprites.svg#icon-github'}
          ></use>
        </svg>
      </a>

      <button
        className="navbar__menu-btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <NavModalView showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default NavbarView;
