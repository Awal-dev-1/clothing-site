import { useNavigate } from "react-router-dom";

const LikeCard= (items) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/like/${items.id}`)}
    >
      <div className="">
        <img
          className="h-[320px] w-[260px] p-4 bg-[#F6F5F5] rounded"
          src={items.img}
          alt=""
        />
      </div>
      <div className="flex flex-col my-4 gap-2">
        <h3>{items.name}</h3>
        <div className="flex items-center gap-4">
          <del className="text-slate-400">GHS{items.oldPrice}</del>
          <p>GHS {items.newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default LikeCard;
