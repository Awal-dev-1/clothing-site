
const HeadFooter = () => {
  return (
    <div className="flex items-center flex-col gap-8 p-10 w-[100%]">
      <h4 className="text-xl">For Daily Updates</h4>
      <h1 className="text-4xl font-semibold ">Subscribe our Newsletter</h1>
      <form className="flex items-center gap-2">
        <input
          className="border px-4 py-2 w-[100%] outline-none"
          type="email"
          placeholder="Enter Your Email..."
          required
        />
        <button className="border px-4 py-2 bg-[#ffffff] text-black" type="submit">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default HeadFooter
