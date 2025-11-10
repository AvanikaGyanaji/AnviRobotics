
export const Herosection =()=>{
    return(  <>
     
      {/* Hero Section */}
      <section
        id="herosection"
        className="herosection h-screen w-full flex justify-center items-center relative overflow-hidden"
      >
        <div className="flex flex-col justify-center items-center text-center">
          {/* Hero Heading */}
          <h1 className="heading hero-heading font-bold text-[#FEFEFE33]">
            <span className="word1">Smarter.</span>
            <span className="word2 pr-1">Faster.</span>
            <span className="word3 pr-1">Limitless</span>
            <span className="tm">™</span>
          </h1>

          {/* Hero Subtext */}
          <p className="hero-text flex flex-col justify-center items-center gap-y-[4px] text-[18px] font-[DM Sans] opacity-0">
            <span>
              Empowering Enterprises with AI-driven robotics that learn, adapt,
            </span>
            <span>and excel at every task.</span>
          </p>
        </div>

        {/* Circular Gradient */}
        <div className="hero-gradient absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[450px] opacity-0 rounded-full pointer-events-none"></div>
      </section>

     
    </>);
}