import './Home.scss';
import myImage from '../../utils/Birthday_Cake.svg.png'


const Home = () => {

  return (
    <div className='home-container'>
      <h1>
      <span>R</span><span>E</span><span>M</span><span>I</span><span>N</span><span>D</span><span> </span><span>M</span><span>E</span>
      </h1>
      <img src={myImage} alt="birthday-cake"/>




    </div>
  )
}

export default Home;