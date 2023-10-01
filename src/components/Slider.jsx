import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import data from '../rewiews.json';
import userIcon from '../assets/icons/user-icon.png';

const SliderCards = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.map((item, id) => (
          <div key={id} className="slider-card">
            <p>&ldquo;{item.description}&ldquo;</p>
            <div className="user">
              <img src={userIcon} alt="" />
              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCards;
