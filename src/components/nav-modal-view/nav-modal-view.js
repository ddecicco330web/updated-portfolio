const NavModalView = ({ showModal, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <nav className={`nav-modal ${showModal && 'nav-modal--visible'}`}>
      <button className="close-btn close-btn--nav-modal" onClick={handleClick}>
        X
      </button>
      <ul className="nav-modal__list">
        <li className="nav-modal__item">
          <a href="#header" className="nav-modal__link" onClick={handleClick}>
            Home
          </a>
        </li>
        <li className="nav-modal__item">
          <a href="#about" className="nav-modal__link" onClick={handleClick}>
            About
          </a>
        </li>
        <li className="nav-modal__item">
          <a href="#projects" className="nav-modal__link" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li className="nav-modal__item">
          <a href="#contact" className="nav-modal__link" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavModalView;
