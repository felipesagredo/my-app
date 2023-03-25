import logo from '../img/logo.svg';
import img1 from '../img/breakingbad.jpg'
import img2 from '../img/breakingbad_2.jpg'
import img3 from '../img/breakingbad_3.jpg'
import '../css/GaleriaFotos.css';

function GaleriaFotos() {
  return (
    <div className='GaleriaFotos'>
        <p>Breaking Bad</p>
      <section className='GaleriaSection'>
        <img src={img1} className="Img-bd" alt='bd'/>
        <img src={img2} className="Img-bd" alt='bd'/>
        <img src={img3} className="Img-bd" alt='bd'/>
      </section>
        <img src={logo} className="App-logo-sc" alt="logo" />
    </div>
  );
}

export default GaleriaFotos;