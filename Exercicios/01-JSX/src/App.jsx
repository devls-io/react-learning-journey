import './App.css'

export default function App(){
  return(
    <div className='main-container'> 
      <h1>Minha Jornada em React</h1>
      <p>Este é o primeiro passo. Foco 100% no básico de React e JSX!</ p>
      <ProfileCard/>
      <ProfileButton />
    </div>
  )
}

function ProfileCard(){
  return(
    <div className="profile-container">
      <h2>Meu Perfil</h2>
      <img src="../public/avatar-github.jpg" alt="Avatar do Github"/>
      <p> Sou Leonardo, 23 anos. Estou iniciando minha jornada em desenvolvimento com React! Ansioso para construir projetos e dominar essa tecnologia.</p>
    </div>
  )
}

function ProfileButton(){
  return(
    <a href="https://github.com/devls-io" target='_blank' rel='noopener noreferrer' className='btn-github'>
      Meu Github
    </a>
  )
}

