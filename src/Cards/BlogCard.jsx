import { FaSearch, FaBook} from "react-icons/fa";

const BlogCard = (list) => {
  return (
    <div className=" h-[300px]">
      <div className="relative">
        <div className="relative w-[360px] m-auto">
          <img
            id="blog-image"
            className="h-[300px]  duration-500 w-[100%] cursor-pointer hover:duration-500 hover:scale-[1.05]"
            src={list.image}
            alt=""
          />
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <p className="font-semibold">13 AUGUST 2024</p>
          <h3>{list.text}</h3>
        </div>
        <div
          className="absolute top-[30%] left-[50%] translate-x-[-50%] flex items-center justify-center gap-10 "
          id="blog-icon"
        >
          <FaSearch
            className="text-white font border w-[45px] h-[45px] rounded-full p-2 cursor-pointer"
            size={30}
            title="click to view Full Image"
          />
          <FaBook
            className="text-white font border w-[45px] h-[45px] rounded-full p-2 cursor-pointer"
            size={30}
            title="click to view Read More"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
