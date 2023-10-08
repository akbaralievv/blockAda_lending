import screen from '../assets/images/Screenshot_2.png';

function Windows() {
  return (
    <section className="windows">
      <div className="container">
        <div className="windows_inner">
          <div className="images">
            <img src={screen} alt="" />
          </div>
          <div className="title">
            <span>BlockAda</span>
            <h2>
              BlockAda <strong>FOR WINDOWS</strong>
            </h2>
            <p className="first-child">
              BLOCKS ANNOYING VIDEO ADS, POP-UPS, BANNERS AND MUCH MORE.
            </p>
            <p>
              BlockAda is an easy to use adblocker that you can turn on or off with a single click.
              When it is running, it will silently and automatically get rid of ads, banners and
              pop-ups. Saving your bandwidth, time and patience.
            </p>
            <a href="/">Download For Windows</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Windows;
