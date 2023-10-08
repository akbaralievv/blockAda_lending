import screen from '../assets/images/Screenshot_3.png';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home_inner">
          <div className="content">
            <div className="title">
              <span>BlockAda</span>
              <h1>BlockAda</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ipsa a reiciendis ad
                non odit quaerat unde explicabo dolores veniam.
              </p>
              <div className="button">
                <a href="/">Add to Chrome</a>
                <img src="//cdn.easyadblocker.com/v2/images/chrome.png" alt="" />
              </div>
            </div>
            <div className="images">
              <img src={screen} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
