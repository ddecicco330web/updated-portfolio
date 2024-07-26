const AboutView = () => {
  return (
    <section className="about" id="about">
      <div className="about__portrait">
        <img
          className="about__portrait-img"
          src={process.env.PUBLIC_URL + 'dominic-decicco-potrait.jpg'}
          alt="Portrait"
        />
      </div>
      <a
        className="about__resume-btn"
        href={process.env.PUBLIC_URL + 'Dominic_DeCicco_Resume.pdf'}
        download
      >
        <svg>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + 'sprites.svg#icon-cloud-download'
            }
          ></use>
        </svg>
        Download Resume
      </a>

      <h2 className="heading-2 heading-2--section-title">About Me</h2>
      <p className="paragraph">
        Hi, I’m Dominic, a web developer excited about technology and media. I
        have strong problem-solving and research skills that allow me to find
        exceptional ways to design code and fix arising issues promptly. These
        skills have helped me greatly with the web applications that I have
        built recently. In my experience as a game developer, I worked well
        collaborating with others using AGILE project management methods. I’m
        excited to be part of a team to build future great web applications.
      </p>

      <ul className="list">
        <li className="list__item">
          <span>City:</span> New York, NY
        </li>
        <li className="list__item">
          <span>Phone:</span> 347-697-2081
        </li>
        <li className="list__item">
          <span>E-Mail:</span> ddecicco330@gmail.com
        </li>
      </ul>
    </section>
  );
};

export default AboutView;
