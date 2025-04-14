import './App.css'
import TeamCard from './components/TeamCard'

function App() {

  const teamMembers = [
    { name: "Silvia", role: "Product Owner", photo: "./src/assets/silvia.png" },
    { name: "Luis", role: "Diseñador UX/UI", photo: "./src/assets/luis.png" },
    { name: "Matías", role: "Desarrollador", photo: "./src/assets/matias.png" },
    { name: "Sabrina", role: "Desarrollador", photo: "./src/assets/sabrina.png" }
  ];

  return (
    <>
      {teamMembers.map(member => (
        <TeamCard
          className="team-card"
          name={member.name}
          role={member.role}
          photo={member.photo}
        />
      ))}
    </>
  )
}

export default App
