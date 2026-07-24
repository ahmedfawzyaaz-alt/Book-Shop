import "../../App.css";

export default function Profile() {
  return (
    // Parent 
    <div className="flex flex-col items-center">
      {/* Image Box */}
      <div className="w-[180px] h-[180px] overflow-hidden rounded-full -mt-17">
        <img src="./assets/man.jpg" alt="" />
      </div>
      {/* Form */}
      <form className="flex flex-col w-[90%] px-2  rounded md:w-[70%] shadow-lg gap-3 p-3 my-3">
        <div className="flex gap-3">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="" className="px-1 py-0">
              First Name
            </label>
            <input type="text" className="p-2 border rounded" placeholder="First Name"  />
          </div>
          <div className="flex flex-col w-[46%] md:w-[50%]">
            <label htmlFor="" className="px-1">Last Name</label>
            <input type="text" className="p-2 border rounded" placeholder="Last Name" />
          </div>
        </div>
        <label htmlFor="" className="px-1">
          Email
        </label>
        <input type="email" className="p-2 border rounded" placeholder="Email" />
        <label htmlFor="" className="px-1">Phone Number</label>
        <input type="tel" className="p-2 border rounded" placeholder="phone Number" />
        <label htmlFor="" className="px-1">Address</label>
        <input type="text" className="p-2 border rounded" placeholder="Address" />
      </form>
      <button className="bg-[#D9176C] p-2 w-[90%] md:w-[20%]  rounded my-3 text-white">Update information</button>
    </div>
  );
}
