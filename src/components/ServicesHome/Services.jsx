import editImg from "./../../assets/edit.png";
import atomImg from "./../../assets/atom.png";
import monitorImg from "./../../assets/desktop-monitor.png";

export function Services() {
  return (
    <section className='bg-gray-100'>
    <div className='flex bg-gray-100'>
      <div className="flex-1 p-20">
        <img className='w-24 max-w-md inline-block m-0' src={editImg} alt="" />
        <h1 className="font-semibold text-2xl">UX Research</h1>
        <p className="text-center px-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque placeat asperiores consectetur ipsam reiciendis, nemo commodi temporibus repudiandae,
           excepturi quia rerum nisi libero consequatur officiis animi reprehenderit eos ipsum delectus.</p>
      </div>
      <div className="flex-1 p-20">
        <img className='w-24 max-w-md inline-block m-0' src={atomImg} alt="" />
        <h1 className="font-semibold text-2xl">Brand Identity</h1>
         <p className="text-center px-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque placeat asperiores consectetur ipsam reiciendis, nemo commodi temporibus repudiandae,
           excepturi quia rerum nisi libero consequatur officiis animi reprehenderit eos ipsum delectus.</p>
      </div>
      <div className="flex-1 p-20">
        <img className='w-24 max-w-md inline-block m-0' src={monitorImg} alt="" />
        <h1 className="font-semibold text-2xl">Web Development</h1>
         <p className="text-center px-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque placeat asperiores consectetur ipsam reiciendis, nemo commodi temporibus repudiandae,
           excepturi quia rerum nisi libero consequatur officiis animi reprehenderit eos ipsum delectus.</p>
      </div>
      
    </div>
    <div className='pb-10'>
      <a href="#" className='block m-auto max-w-sm bg-blue-900 text-white py-3 px-10 rounded-full hover:bg-blue-800 transition-all'>SEE MORE</a>
      
    </div>
    </section>
  )
}