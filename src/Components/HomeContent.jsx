import { homePageBanner } from "../Constant/homeBanner"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const HomeContent = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    arrows:true
  };
  return (
    <div className="overflow-hidden">
      <div className="">
        <Slider {...settings}>
          {homePageBanner.length > 0 &&
            homePageBanner.map((item) => (
              <div className="relative" key={item.id}>
                <img
                  className="w-[100%] h-[100vh]"
                  src={item.image}
                  alt="image"
                />
                <div className="layer"></div>
                <div className="absolute top-[35%] left-[50%] translate-x-[-50%] flex items-center flex-col gap-12 text-white font-bold w-[100%]">
                  <div className="">
                    <h2 className="text-3xl -tracking-tither font-light">
                      {item.text}
                    </h2>
                  </div>
                  <h1 className="text-6xl uppercase">{item.text1}</h1>
                  <div className="">
                    <Link to="our-store">
                      <button className="bg-white text-black py-3 px-8 text-lg cursor-pointer font-medium">
                        {item.btn}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeContent
