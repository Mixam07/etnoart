import { Row } from 'antd';
import "./index.css";
import aboutPageImg from '../../assets/images/AboutImage1.jpg';
import imgPrize1 from '../../assets/images/prize1.png';
import imgPrize2 from '../../assets/images/prize2.jpg';
import imgPrize3 from '../../assets/images/prize3.png';
import imgPrize4 from '../../assets/images/prize4.jpg';
import PrizeItem from './PrizeItem';
import Description from "../../components/Description/Description";

function About() {
  return (
    <div className="about-page">
      <div className="about-img">
        <img src={aboutPageImg} alt="about-img" />
      </div>
      <div className="description">
        <Description
          description="Unë jam Lirika Pojani, rrobaqepëse me një përvojë 23 vjeçare. Pasioni im më i madh është t'i jap jetë rrobave tradicionale shqiptare. Për mua, çdo punim i këtyre veshjeve është një rrugëtim emocionues drejt kulturës sonë të pasur."
        />
      </div>
      <div className="prizes-content">
          <Row gutter={[0, 40]}>
            <PrizeItem
              img={imgPrize1}
              title="Best Costume"
              txt1="International Folklore Festival"
              txt2="'VITOSHA'"
              txt3="Solo and Duet performance"
              txt4="Skenderbeu Ensemble ALBANIA"
            />
            <PrizeItem
              img={imgPrize2}
              title="Maska më e mirë"
              txt1="Certifikatë"
              txt2="I jepet vendi i II-të grupit"
              txt3="Dielli, Yjet dhe Hëna"
            />
            <PrizeItem
              img={imgPrize3}
              title="Kostumografia më e mirë"
              txt1="Festivali Ndërkombëtar"
              txt2="'Shkupi Folk-Fest 2018'"
            />
            <PrizeItem
              img={imgPrize4}
              title="Kostumi më i bukur i Festivalit"
              txt1="Karnavalet në Korcë"
              txt2="I jepet Kostumit Venecian"
            />
          </Row>
      </div>
    </div>
  );
}

export default About;
