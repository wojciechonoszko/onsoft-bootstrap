import './App.css';
import NavbarMenu from './components/navbar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container className='my-container'>
      <header className="App-header">
        <NavbarMenu></NavbarMenu>
        
      </header>
      <main>
        <AboutMe/>
      </main>
      <footer>

      </footer>

      </Container>
    </div>
  );
}

export default App;
