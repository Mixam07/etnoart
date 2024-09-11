// import { Image } from 'antd';
// import YouTube from 'react-youtube';
import homePageVideo from '../../assets/videos/homePageVideo.mp4';
import './index.css';
import Description from "../../components/Description/Description";
import homePageImg from '../../assets/images/HomeBanner3.jpg';

function Home() {
    // const opts = {
    //     width: '560',
    //     height: '315',
    //     playerVars: {
    //         autoplay: 1,
    //         mute: 1,
    //         loop: 1,
    //     },
    // };

    return (
        <div className="home-page">
            <div className="home-video">
                <video autoPlay loop src={homePageVideo} muted />
            </div>
            <div className="home-slogan">
                <Description
                    description="Histori & Stil"
                />
            </div>
            <div className="home-description">
                <Description
                    description="Rrezato elegancën me veshjet tradicionale shqiptare"
                />
            </div>
            <div className="home-img">
                <img src={homePageImg} alt="home-img" />
            </div>
            {/* <div class="marquee">
                <div>
                    <span>Ngjyra, Motive, Tradite, Detaje të trashëgimisë</span>
                    <span>Ne i bëjmë veshjet tuaja të flasin me zërin e traditës shqiptare, duke e mbajtur gjallë trashëgiminë tonë me një stil të mrekullueshëm.</span>
                    <span>Veshje shqiptare që bëjnë histori!</span>
                </div>
            </div> */}
            {/* <div>
                <YouTube videoId="Kka5-Gj24_A" opts={opts} />
            </div> */}
        </div>
    );
}

export default Home;
