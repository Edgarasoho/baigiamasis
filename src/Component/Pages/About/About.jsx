import React from "react";
import ImageSlider from "../../SlideShow/SlideShow";
import "./About.scss";
function About() {
  return (
    <div className="about">
      <h1>APIE MUS</h1>
      <p className="par">
        Baltic Recycling UAB jau dvidešimt metų dirba elektros ir elektronikos
        perdirbimo srityje. Per dvidešimt metų įmonė palaipsniui tobolino
        technologines linijas kurios palengvino perdirbimo procesą Šiuo metų
        įmonėje dirba apie dvidešimt darbuotojų, kiekvienas iš jų turi savo
        užduotis. Šiai dienai turime trys malunus ir gebame atlikti pilna
        elektros ir elektronikos perdirbimą. 2021 metais Baltic Recyclling UAB
        atidarė naują gamyklą kurioje yra perdirbimas plastikas. Tai ireiškia
        kad gebame plastiką išvalyti iki tam tikros rušies plastiką. Turint toki
        proces mes tampame labai konkurencingi Lietuvos,Europos bei Azijos
        rinkoje, kadangi šiai dienai labai daug kur naudojami plastikai. Šiai
        dienai gebame perdirbti apie 350 tonų per menesį. Su kieikvienais metais
        stengemes dydinti apimtis tobulindami technologines linijas.
      </p>
      <ImageSlider />
    </div>
  );
}

export default About;
