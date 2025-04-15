import styles from './App.module.css'
import TeamGrid from './components/TeamGrid/TeamGrid';
import ProjectCard from './components/ProjectCard/ProjectCard';
import InterestsGallery from './components/InterestsGallery/InterestsGallery';

function App() {

  const teamMembers = [
    { name: "Silvia", role: "Product Owner", photo: "./src/assets/silvia.png" },
    { name: "Luis", role: "Diseñador UX/UI", photo: "./src/assets/luis.png" },
    { name: "Matías", role: "Desarrollador", photo: "./src/assets/matias.png" },
    { name: "Sabrina", role: "Desarrollador", photo: "./src/assets/sabrina.png" }
  ];

  const interests = ["React", "JavaScript", "APIs", "Diseño UX", "Noje.js"];

  return (
    <div className={styles.appWrapper}>
      <h1>Miembros de Talento Lab</h1>
      <TeamGrid
        teamMembers={teamMembers}
        className={styles.teamMembers}
      />

      <h2 className={styles.subtitle}>Proyectos</h2>
      <ProjectCard
        className={styles.projectCard}
        title="Plataforma de Gestión"
        description="Una herramienta para optimizar la gestión de equipos."
        buttonText="Explorar proyecto"
      />

      <h2 className={styles.subtitle}>Temas de interés</h2>
      <InterestsGallery
        interests={interests}
      />
    </div>
  )
}

export default App
