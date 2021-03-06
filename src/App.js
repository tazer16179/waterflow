import './App.css';
import HeadModal from './Components/ModalComponents/HeadModal';
import SliderComponent from './Components/SliderTwoVersion/SliderComponent';
import code from './assets/code.jpg';
import ship from './assets/ship.jpg';
import OneWaterFool from './Components/OneWaterFool/OneWaterFool';
import TwoWaterFool from './Components/TwoWaterFool/TwoWaterFool';
import ThreeWaterFool from './Components/ThereeWaterFool/ThreeWaterFool';
import FourWaterFool from './Components/FourWaterFool/FourWaterFool';
import FiveWaterFool from './Components/FiveWaterFool/FiveWaterFool';
import SixWaterFool from './Components/SixWaterFool/SixWaterFool';
import StartCopmonent from './Components/StartComponents/StartCopmonent';
import HeaderComponent from './Components/Header/HeaderComponent';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <HeaderComponent/>
            <StartCopmonent/>
            <HeadModal />
            <OneWaterFool />
            <TwoWaterFool />
            <ThreeWaterFool />
            <FourWaterFool />
            <FiveWaterFool/>
            <SixWaterFool/>
            <Footer/>
            {/* <SliderComponent ship={ship}  code={code}/> */}
            {/* <SliderComponent/> */}
        </div>
    );
}

export default App;
