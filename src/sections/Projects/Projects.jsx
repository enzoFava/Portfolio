import styles from './ProjectsStyles.module.css';
import expenses from '../../assets/expensesIcon.png';
import notepad from '../../assets/notepadIcon.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={expenses}
          link="https://expensestracker-client.vercel.app/"
          h3="Tracker"
          p="Money tracker app"
        />
        <ProjectCard
          src={notepad}
          link="https://notepad-client.vercel.app/"
          h3="Notepad"
          p="Notepad app"
        />
      </div>
    </section>
  );
}

export default Projects;
