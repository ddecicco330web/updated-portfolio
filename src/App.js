import AboutView from './components/about-view/about-view';
import ContactView from './components/contact-view/contact-view';
import HeaderView from './components/header-view/header-view';
import NavbarView from './components/navbar-view/navbar-view';
import ProjectsView from './components/projects-view/projects-view';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <NavbarView />
        <HeaderView />
      </header>
      <main>
        <AboutView />
        <ProjectsView />
        <ContactView />
      </main>
    </div>
  );
}

export default App;
