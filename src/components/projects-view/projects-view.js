import ProjectCardView from '../project-card-view/project-card-view';

const ProjectsView = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__title-row">
        <h2 className="heading-2 heading-2--section-title">Projects</h2>
      </div>
      <div className="projects__project-list">
        <ProjectCardView
          index={1}
          name="Plumbing Website (Mockup)"
          description="HTML, SASS, JS"
          gitHubLink="https://github.com/ddecicco330web/plumbing-site"
          siteLink="https://easyhomepipe.netlify.app/"
        />

        <ProjectCardView
          index={2}
          name="MyFlix"
          description="React, React Bootstrap, JSX, Node"
          gitHubLink="https://github.com/ddecicco330web/myFlix-client"
          siteLink="https://myflix330.netlify.app/login"
        />

        <ProjectCardView
          index={3}
          name="Educator Thesis Portfolio"
          description="Wordpress"
          siteLink="https://jeninnacalderon.com/"
        />
      </div>
    </section>
  );
};

export default ProjectsView;
