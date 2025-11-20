

// export const Form =()=>{
//     return(
//     <>
//     <form>
//         <input type="text"/>
//         <input type="email"/>
//         <input type="number"/>
//     </form>
//     </>)

// }
export const Form = () => {
  return (
    <form className="w-full  max-w-[450px] mx-auto flex flex-col gap-4 mt-10">

      {/* Name */}
      <div className="flex flex-col gap-1">
       
        <input
          type="text"
          className="w-full p-4 rounded-xl bg-white outline-none text-[15px]"
          placeholder="Enter your name"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        
        <input
          type="email"
          className="w-full p-4 rounded-xl bg-white outline-none text-[15px]"
          placeholder="Enter your email"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-1">
       
        <input
          type="tel"
          className="w-full p-4 rounded-xl bg-white outline-none text-[15px]"
          placeholder="Enter your number"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
       
        <textarea
          rows="5"
          className="w-full p-4 rounded-xl bg-white outline-none text-[15px] resize-none"
          placeholder="Write something..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 bg-black text-white text-[16px] rounded-xl mt-4"
      >
        Submit
      </button>
    </form>
  );
};
