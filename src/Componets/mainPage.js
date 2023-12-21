import "./mainPage.css";

function MainPage() {
  const pictureOne =
    "https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format";
  return (
    <div>
      <div>
        <div className="page">
          <h1>
            Canal Street Market is a carefully curated retail market, food hall
            & community space open year-round at 265 Canal Street.{" "}
            <a href="/"> Support Small Business </a> this weekend!
          </h1>
        </div>

        <img className="pagePicture" src={pictureOne} alt="business" />

        <div className="newMarket">
          <h1 className="newMarketHeader">A New Type of Market</h1>
          <div className="newMarketImages">
            <img src="" alt="picOne" className="newMarketPicOne" />
            <img src="" alt="picTwo" className="newMarketPicTwo" />
            <img src="" alt="picThree" className="newMarketPicThree" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
