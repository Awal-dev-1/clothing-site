import { useEffect, useState } from "react";
import { likeData} from "../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LikeCard from "../Cards/LikeCard";

const AlsoLike = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      arrows: true
    };

  const [randomPick, setRandomPick] = useState([]);

  useEffect(()=>{
    const handleRandom = () =>{
      const getRandom = likeData.sort(() => 0.5 - Math.random());
      const resRandom = getRandom.slice(0, 4);

      return resRandom
    }

    setRandomPick(handleRandom)
  },[])
  return (
    <div className="my-32">
      <h2 className="text-center font-semibold mb-12 text-3xl">You might also like </h2>
      <div className="">
        <Slider {...settings}>
          {randomPick.length > 0 &&
            randomPick.map((items) => (
              <LikeCard key={items.id} {...items} />
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default AlsoLike
