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
          name="Recipes"
          description="Django, Python, AWS S3"
          gitHubLink="https://github.com/ddecicco330web/django-recipe-app"
          siteLink="https://recipes330-b394d7d440dc.herokuapp.com/"
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
          name="Chat"
          description="React Native, JS, Firebase"
          gitHubLink="https://github.com/ddecicco330web/chat"
          siteLink={null}
        />
      </div>
    </section>
  );
};

export default ProjectsView;
