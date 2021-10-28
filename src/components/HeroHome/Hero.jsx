import heroImg from './../../assets/hero.jpg'; // Tell Webpack this JS file uses this image
import { BoxHeroHome } from './BoxHero';
export function HeroHome() {
  return (
    <div className='w-full relative'>
      <BoxHeroHome></BoxHeroHome>
      <img src={heroImg} className='object-cover max-h-screen w-full' alt="" />
    </div>
  )
}