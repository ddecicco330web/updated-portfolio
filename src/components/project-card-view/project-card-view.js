const ProjectCardView = ({
  name,
  description,
  index,
  gitHubLink,
  siteLink
}) => {
  return (
    <div className={`project-card project-card--${index}`}>
      <div className="project-card__info">
        <div className="project-card__links">
          {gitHubLink && (
            <a
              className="icon-btn icon-btn--project-link"
              href={gitHubLink}
              target="_blank"
              rel="noreferrer"
            >
              <svg>
                <use
                  xlinkHref={process.env.PUBLIC_URL + 'sprites.svg#icon-github'}
                ></use>
              </svg>
            </a>
          )}

          {siteLink && (
            <a
              className="icon-btn icon-btn--project-link"
              href={siteLink}
              target="_blank"
              rel="noreferrer"
            >
              <svg>
                <use
                  xlinkHref={process.env.PUBLIC_URL + 'sprites.svg#icon-link'}
                ></use>
              </svg>
            </a>
          )}
        </div>
        <h4 className="heading-4">{name}</h4>
        <p className="paragraph paragraph--project-text">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCardView;
