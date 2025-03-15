import React, { useState } from 'react'
import Calculadora from './calculadora';
import Ejercicos from './Ejercicos';

export default function Manual() {
    const [mostrarCalculadora, setMostrarCalculadora] = useState(false);
    const [mostrarEjercicos, setMostrarEjercicos] = useState(false);

    // Función para mostrar/ocultar la calculadora
    const toggleEjercicos = () => {
        setMostrarEjercicos(!mostrarEjercicos);}
    const toggleCalculadora = () => {
      setMostrarCalculadora(!mostrarCalculadora);}
    

  return (
    <div>
        
        
            <p className='que-es'><button  onClick={toggleCalculadora} className="boton">Ensamblador ¿Qué es?</button></p>
            <p className='ejer'><button onClick={toggleEjercicos}>Ejercicios</button></p>

            <h2 className='holam'>Hola Mundo de React y de Github</h2>
            
        
        {mostrarCalculadora && <Calculadora />}
        {mostrarEjercicos && <Ejercicos />}
    </div>
  )
}
  /*
import React from 'react';

function App() {
  const tools = [
    { id: 1, name: 'Calculadora', link: '#' },
    { id: 2, name: 'Editor de texto', link: '#' },
    { id: 3, name: 'Generador de contraseñas', link: '#' },
  ];

  return (
    <div>
      <h1>Herramientas</h1>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            <a href={tool.link}>{tool.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

function Calculadora(){
    return <h2>Calculadora de Ensamblador</h2>;
}

function Factorial(){
    return <h2>Factorial de Ensamblador </h2>;
}

function Leer(){
    return <h2>Leer en Ensamblador</h2>;
}

function Par(){
    return <h2>Si es Par en Ensamblador </h2>;
}

function Piramide(){
    return <h2>Piramide en Ensamblador </h2>;
}

function Raiz(){
    return <h2>Raiz en Ensamblador </h2>;
}

function Suma(){
    return <h2>Suma</h2>;
}

function App() {
    // Estado para controlar qué componente mostrar
    const [currentPage, setCurrentPage] = useState('home');
  
    // Función para cambiar la página
    const navigateTo = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <div>
        <h1>Ejercicios de Ensamblador</h1>
        <ul>
          <li>
            <button onClick={() => navigateTo('calculadora')}>Calculadora</button>
          </li>
          <li>
            <button onClick={() => navigateTo('Factorial')}>Editor de texto</button>
          </li>
          <li>
            <button onClick={() => navigateTo('Leer')}>Leer Ensamblador</button>
          </li>
          <li>
            <button onClick={() => navigateTo('Par')}>Par Ensamblador</button>
          </li>
          <li>
            <button onClick={() => navigateTo('Piramide')}>Piramide Ensamblador</button>
          </li>
          <li>
            <button onClick={() => navigateTo('Raiz')}>Raiz Ensamblador</button>
          </li>
          <li>
            <button onClick={() => navigateTo('Suma')}>Suma Ensamblador</button>
          </li>
          
        </ul>
  
        {Renderizar el componente correspondiente }
        {currentPage === 'home' && <h2>Bienvenido al Catalogo de Ensamblador</h2>}
        {currentPage === 'calculadora' && <Calculadora />}
        {currentPage === 'Factorial' && <Factorial />}
        {currentPage === 'Leer' && <Leer />}
        {currentPage === 'Par'&&<Par/>}
        {currentPage === 'Piramide'&&<Piramide/>}
        {currentPage === 'Raiz'&&<Raiz/>}
        {currentPage === 'Suma'&&<Suma/>}
      </div>
    );
  }
  
  export default App;*/