
const HomeAdvert = ({banner}) => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="" id="advert"></div>
      <div className="absolute top-[35%] left-[50%] translate-x-[-50%] flex items-center flex-col gap-12 w-[100%] text-white">
        <h4 className=" text-2xl">Latest Trendy Outfit Ideas & Pairings</h4>
        <h1 className="text-6xl font-bold">Clothing Trends From InStyle</h1>
        <button className="bg-white py-2 px-10 text-lg text-black font-medium rounded">SHOP NOW</button>
      </div>
    </div>
  );
}

export default HomeAdvert
