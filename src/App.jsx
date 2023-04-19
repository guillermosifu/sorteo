import React, { useState } from "react";
import Slider from "./components/slider";
import "./App.css"


function App() {
  const [winningNumber, setWinningNumber] = useState(null);
  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(100);

  const handleStartDraw = () => {
    const newWinningNumber = Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;
    setWinningNumber(newWinningNumber);
  };

  const handleReset = () => {
    setWinningNumber(null);
  };

  const handleStartNumberChange = (event) => {
    setStartNumber(Number(event.target.value));
  };

  const handleEndNumberChange = (event) => {
    setEndNumber(Number(event.target.value));
  };

  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Sorteo de Números</h1>
        {winningNumber === null ? (
          <div className="container">
            <p className="lead">Ingrese el rango de números a sortear:</p>
            <div className="form-group">              
              <input type="number" placeholder="ingresa numero inicial" id="startNumber" value={startNumber} onChange={handleStartNumberChange} />
            </div>
            <div className="form-group">              
              <input type="number" id="endNumber" value={endNumber} onChange={handleEndNumberChange} />
            </div>
            <button onClick={handleStartDraw} className="btn btn-primary">
              Iniciar Sorteo
            </button>
          </div>
        ) : (
          <div className="container">
            <p className="lead">El número ganador es:</p>
            <h2 className="winner">{winningNumber}</h2>
            <button onClick={handleReset} className="btn btn-danger">
              Reiniciar Sorteo
            </button>
          </div>
        )}
      
         {/* <div className="slider2">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.postimg.cc/SxLZqH06/carro.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/qM1sL0dZ/iphone.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/QxJ4ZRZp/carusel.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div> */}
 <Slider/> 
      </header>  
        
    </div>
     
    </>
  );
}

export default App;
