
import Image from "next/image";


const Hero = () => (
    /*<section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Hero+Image+of+Ladies+Fashion+Showcase')" }}>*/

<section
   className="relatve h-screen">
    <Image
    src="/images/banner-1.jpg"
    alt="H"
    width={1700}
    
    height={200}  />
    
    
      <div className="container mx-auto h-full flex items-center justify-center">
      <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Zakia Boutique</h1>
          <p className="text-xl mb-8">Discover the latest trends in ladies' fashion</p>
          <a href="#gallery" className="bg-pink-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600">Shop Now</a>
        </div>
      </div>
    </section>
  );
  
  export default Hero;



