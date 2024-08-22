import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const FooterList = () => {
  return (
    <div className="grid grid-cols-4 m-auto w-[90%] my-16 gap-12">
      <div className="">
        <h2
          className="text-3xl font-bold text-white tracking-widest cursor-pointer"
        >
          HAZZANX
        </h2>
        <div className="mt-4">
          <p className="text-lg">Clothing Store</p>
          <p className="text-lg">
            Spintex Road <span className="text-slate-500">flower pot 2277</span>
          </p>
          <p className="text-lg">Ghana, Accra</p>
          <p className="text-lg">
            Call us now: <span className="text-slate-500">+233241529904</span>
          </p>
          <div className="flex items-center gap-4 mt-6">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">My Account</h2>
        <ul className="flex flex-col gap-2 text-[18px]">
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Delivery
          </li>
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Legal Notice
          </li>
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Secure payment
          </li>
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            My account
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Information</h2>
        <ul className="flex flex-col gap-2 text-[18px]">
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            About us
          </li>
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Price drop
          </li>
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Best sales
          </li>
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Stores
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Your Account</h2>
        <ul className="flex flex-col gap-2 text-[18px]">
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Personal info
          </li>
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Orders
          </li>
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Credit slips
          </li>
          <li className="cursor-pointer duration-500 hover:text-[#ff4141]">
            Addresses
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterList
