const NavModalView = ({ showModal, setShowModal }) => {
  return (
    <nav className={`nav-modal ${showModal && 'nav-modal--visible'}`}>
      <button
        className="close-btn close-btn--nav-modal"
        onClick={() => {
          setShowModal(false);
        }}
      >
        X
      </button>
      <ul className="nav-modal__list">
        <li className="nav-modal__item">
          <a
            href="#header"
            className="nav-modal__link"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-modal__item">
          <a
            href="#about"
            className="nav-modal__link"
            onClick={() => {
              setShowModal(false);
            }}
          >
            About
          </a>
        </li>
        <li className="nav-modal__item">
          <a
            href="#projects"
            className="nav-modal__link"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Projects
          </a>
        </li>
        <li className="nav-modal__item">
          <a
            href="#contact"
            className="nav-modal__link"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavModalView;
