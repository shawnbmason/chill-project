import "./mainPage.css";

const MainPage = ({ onPress3, onPress2, onPress }) => {
  const pictureOne =
    "https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format";
  return (
    <div className="mainPageBody">
      <section>
        <div className="page">
          <h1>
            Canal Street Market is a carefully curated retail market, food hall
            & community space open year-round at 265 Canal Street.{" "}
            <a href="/"> Support Small Business </a> this weekend!
          </h1>
        </div>

        <img className="pagePicture" src={pictureOne} alt="business" />
      </section>

      <section>
        <div className="newMarket">
          <h1 className="newMarketHeader">A New Type of Market</h1>
          <div className="newMarketImages">
            <div>
              <div>
                <img
                  src="https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg?auto=compress,format"
                  alt="picOne"
                  className="newMarketPicOne"
                />
              </div>
              <p>
                Merging retail, food, art, and culture, Canal Street Market
                highlights top retail and design concepts, restaurants, and
                up-and-coming players in the downtown New York City community.
              </p>
            </div>

            <div>
              <div>
                <img
                  src="https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress,format"
                  alt="picTwo"
                  className="newMarketPicTwo"
                />
              </div>
              <p>Retail Market Hours: Thursday – Sun: 11:00AM - 7:00PM</p>
            </div>

            <div>
              <div>
                <img
                  src="https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format"
                  alt="picThree"
                  className="newMarketPicThree"
                />
              </div>
              <p>Food Hall Hours: Mon – Sun: 11:00AM - 8:00PM</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="marketEvents">
            <h1 className="marketEventCharacter">活動 </h1>
            <h1 className="marketEventCharacterHeader"> Market Events</h1>
            <h1 className="marketEventCharacter"> 活動</h1>
          </div>

          <div className="marketEventsDates">
            <div className="eventSection" onClick={onPress}>
              <p className="dateEvent one">02/07</p>
              <p className="event one">
                New Ball x Paperboy Paris by Greenhouse @ Canal Street Market
              </p>
            </div>
            <div className="eventSection" onClick={onPress2}>
              <p className="dateEvent two">12/11</p>
              <p className="event two">Hack City 12/11</p>
            </div>
            <div className="eventSection" onClick={onPress3}>
              <p className="dateEvent three">07/27</p>
              <p className="event three">Taiwanese Wave</p>
            </div>
          </div>
        </div>
        <button className="eventSelectAll" onClick={onPress3}>
          Select All
        </button>
      </section>
    </div>
  );
};

export default MainPage;

// const x = 2;
// let y = 4;
// function update(arg) {
//   return Math.random() + y * arg;
// }
// y = 2;
// y = 3;
// const result = update(x);

// console.log(result);
