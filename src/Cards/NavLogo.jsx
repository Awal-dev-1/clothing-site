import { Link } from "react-router-dom";
import cart from "../assets/icons/cart.png";
import search from "../assets/icons/search.png";
import user from "../assets/icons/user.png";
import { useContext, useRef} from "react";
import { GetDataContext } from "../Context/ShopContext";


const NavLogo = () => {
  const {getTotalCart,setQuery} = useContext(GetDataContext);
  const inputRef = useRef();
 

  const handleSearch = () =>{
    if(inputRef.current.classList.contains("hide")){
      inputRef.current.classList.remove("hide")
    }else{
      inputRef.current.classList.add("hide")
    }
  }
  return (
    <div className="flex items-center gap-10 relative">
      <div className="">
        <img onClick={() => handleSearch()} className="w-[30px] cursor-pointer" src={search} alt="" />
      </div>
      <input onChange={(e) => setQuery(e.target.value)}
        className="hide outline-none py-2 px-3 w-[240px] border-[2px] border-slate-700 right-[30%] rounded absolute top-[50px]"
        type="search"
        placeholder="Search.."
        ref={inputRef}
      />
      <img className="w-[30px]" src={user} alt="" />
      <div className="flex items-center gap-2">
        <Link to="cart">
          <img className="w-[30px]" src={cart} alt="" />
        </Link>
        <div className="text-2xl text-white font-bold">{getTotalCart()}</div>
      </div>
    </div>
  );
}

export default NavLogo
