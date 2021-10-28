import caretImg from "./../../assets/caret.png";

export function BoxHeroHome() {
  return (
    <div className='w-full absolute flex justify-center items-center top-50'>
      <div className='w-1/4 h-80 bg-yellow-300 '>
        <section className='mt-10'>
          <h1 className='text-white font-semibold text-5xl'>CREATIVE</h1>
          <h2 className='font-semibold text-5xl'>DESIGN</h2>
          <h3 className='font-semibold text-5xl'>AGENCY</h3>
          <hr className='border-4 border-white m-5'/>
          <span className="mt-2 mb-3">SCROLL FOR MOTE INFO</span>
          <img src={caretImg} className='w-6 mt-6 block m-auto cursor-pointer animate-bounce' alt="caret" />
        </section>
      </div>
    </div>
  )
}