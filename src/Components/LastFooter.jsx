import { bankCards } from "../assets/icons/social"
import { listSecond } from "../Constant/navLinks"

const LastFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4 pb-4">
      <ul className="flex items-center gap-10 text-lg">
        {listSecond.map((list) => (
          <li className="cursor-pointer" key={list.href}>{list.label}</li>
        ))}
      </ul>

      <p>&copy; 2024 - Ecommerce website by Mohammed Awal</p>
      <div className="flex items-center gap-6">
        {bankCards.map((list) => (
          <div className="" key={list.id}>
            <img className="w-12 cursor-pointer" src={list.card} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastFooter
