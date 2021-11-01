import React from 'react';
import SliderComponent from '../SliderTwoVersion/SliderComponent';
import three from './ThreeWaterFool.module.css';
import su from './../../assets/su.jpg';
import su1 from './../../assets/su1.jpg';
import su2 from './../../assets/su2.jpg';

const ThreeWaterFool = () => {
    return (
        <div className={three.wrapperWater}>
            <SliderComponent vodopad1={su} vodopad2={su1} vodopad3={su2} />
            <div className={three.discription}>
                <h1 className={three.name}>Су-Учхан</h1>
                <p className={three.discriptionText}>
                    Водопад Су-Учхан в Крыму находится в 30 км от Симферополя.
                    Это самый неординарный из крымских водопадов, удивляющий
                    своей длиной и формами. Подземная река, веками прокладывая
                    себе путь через пещеру, выносила из недр массива
                    растворённую известь. В результате образовалась грандиозная
                    туфовая площадка, с высоты которой водный поток обрушивается
                    вниз. Срываясь с 25-метрового обрывистого склона, река
                    превращается в череду роскошных каскадов общей
                    протяжённостью около 50 метров. Вода с шумом разбивается о
                    камни, разлетается фонтанами брызг, а затем устремляется в
                    тихие заводи, где образует живописные природные ванны. Это
                    стоит увидеть хотя бы раз в жизни. Водопад Су-Учхан и его
                    окрестности давно известны своей особой энергетикой и
                    почитаются как места силы. В речке Кизилкобинке и
                    естественных купелях окунаются на Крещение симферопольцы и
                    жители близлежащих сёл. А в тёплое время года здесь много
                    активных туристов, желающих ощутить на себе бодрящий и
                    омолаживающий эффект, которым славится эта кристально чистая
                    вода. Расположен: Крым, Симферопольский район, с.
                    Перевальное Координаты: 44.869847, 34. 344061
                </p>
            </div>
        </div>
    );
};

export default ThreeWaterFool;