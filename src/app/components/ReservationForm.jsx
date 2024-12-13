const ReservationForm = () => {
    return (
      <form className="space-y-6 mx-40 font-lato">
        {/* Name*/}
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full text-lg px-5 py-3 border bg-transparent rounded-full focus:outline-none focus:border-[#ef7a54]"
          />
        </div>
  
        {/* Phone Number to Seats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full text-lg px-5 py-3 bg-transparent border rounded-full focus:outline-none focus:border-[#ef7a54]"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full text-lg px-5 py-3 bg-transparent border rounded-full focus:outline-none focus:border-[#ef7a54]"
          />
          <input
            type="number"
            placeholder="Date time"
            className="w-full text-lg px-5 py-3 bg-transparent border rounded-full focus:outline-none focus:border-[#ef7a54]"
          />
          <input
            type="number"
            placeholder="Seats"
            className="w-full text-lg px-5 py-3 bg-transparent border rounded-full focus:outline-none focus:border-[#ef7a54]"
          />
          
        </div>        
  
        {/* Message Field */}
        <textarea
          placeholder="Message"
          className="w-full text-lg px-5 py-3 pb-8 bg-transparent border border-gray-300 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#ef7a54]"
          rows={4}
        ></textarea>
      </form>
    );
  };
  
  export default ReservationForm;
  