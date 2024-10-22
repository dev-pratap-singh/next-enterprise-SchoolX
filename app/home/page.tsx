import Image from "next/image";
import Link from "next/link";
import Layout from "components/layout"; 
import Button from "components/Button/Button"; 
import Testimonials from "components/testimonials/test"; // This is the correct Testimonials component

const Home: React.FC = () => {
  const line1 = 'A Pre-school and Daycare';
  const line2 = 'for Free Thinkers';

  // Function to render each character with a different color
  const renderColoredText = (text: string, startIndex: number) => {
    let colorIndex = startIndex; // Starting index for colors
    return text.split('').map((char, idx) => {
      if (char === ' ') {
        return <span key={idx} style={{ marginRight: '0.5em' }}>&nbsp;</span>; // Non-breaking space for spacing
      }
      
      const colorClass = `text-color-${colorIndex}`; // Assuming text-color-1, text-color-2, etc., are defined in your CSS
      colorIndex += 1; // Increment color index for the next character
      
      return (
        <span key={idx} className={colorClass}>
          {char}
        </span>
      );
    });
  };
    
  return (
    <Layout>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[500px] flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/image 1.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-caveat-brush flex flex-wrap justify-center" style={{ display: 'flex', gap: '0.5em' }}>
          {renderColoredText(line1, 1)} 
        </h1>
        <h1 className="text-5xl md:text-6xl font-caveat-brush flex flex-wrap justify-center mt-4" style={{ display: 'flex', gap: '0.5em' }}>
          {renderColoredText(line2, line1.length + 1)}
        </h1>
        <nav className="absolute bottom-10">
          <ul className="flex justify-center">
            <li>
            <Button 
                href="/admission" 
                className="bg-[#a865d7cd] text-black font-caveat-brush text-2xl py-2 px-6 rounded-full shadow-lg hover:text-[#F4A500] transition-colors">
                ADMISSION
            </Button>

            </li>
          </ul>
        </nav>
      </section>

      {/* The next section */}
      <section className="bg-[#FACFCF] h-auto md:h-[500px] flex flex-col md:flex-row items-center justify-between px-[5%] py-10">
        <Image
          src="/slide.png"
          alt="Slide"
          width={700}
          height={300}
          className="w-auto h-auto mb-4 md:mb-0"
        />
        <h1 className="text-[#B54242] text-center mx-4 mb-4 md:mb-0 text-5xl md:text-6xl font-bold leading-tight">
          “This is a place where our child feels loved, valued, and excited to learn”
        </h1>

        <Image
          src="/kids' drawings.png"
          alt="Kids' drawings"
          width={300}
          height={300}
          className="w-auto h-auto"
        />
      </section>

      {/* Overview Section */}
      <section className="bg-white py-10 text-center">
        <h1 className="text-4xl font-bold text-[#F28C8C] mb-8">Our Overview</h1>

        <div className="relative flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 z-10">
            {/* First Card */}
            <div className="bg-[#FDD7D4] p-6 rounded-lg shadow-lg relative">
              <h2 className="text-2xl font-bold text-[#E94343]">Centres 130+</h2>
              <div className="absolute -bottom-2 -left-2 bg-[#D63F3F] rounded-lg w-full h-full transform scale-95 -z-10"></div>
            </div>
            
            {/* Second Card */}
            <div className="bg-[#70E4F9] p-6 rounded-lg shadow-lg relative">
              <h2 className="text-2xl font-bold text-[#1C95B4]">Children 130+</h2>
              <div className="absolute -bottom-2 -left-2 bg-[#3790A8] rounded-lg w-full h-full transform scale-95 -z-10"></div>
            </div>
            
            {/* Third Card */}
            <div className="bg-[#F7C6FB] p-6 rounded-lg shadow-lg relative">
              <h2 className="text-2xl font-bold text-[#D763D7]">Faculty 600+</h2>
              <div className="absolute -bottom-2 -left-2 bg-[#A83FA8] rounded-lg w-full h-full transform scale-95 -z-10"></div>
            </div>

            {/* Fourth Card */}
            <div className="bg-[#C7DBFF] p-6 rounded-lg shadow-lg relative">
              <h2 className="text-2xl font-bold text-[#6C8ED9]">Decades 1</h2>
              <div className="absolute -bottom-2 -left-2 bg-[#4D61A8] rounded-lg w-full h-full transform scale-95 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Use imported Testimonials component */}
      <Testimonials />

      {/* Admissions Section */}
      <section className="bg-yellow-50 p-10 text-center rounded-md shadow-md">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center">
            <div className="text-white py-2 px-4 rounded-lg inline-flex items-center">
              <Image src="/Group 1.png" alt="Lil Pals Logo" width={60} height={60} />
              <h2 className="ml-2 font-bold text-xl"></h2>
            </div>
            <h2 className="text-3xl font-bold mt-6">
              Admissions open for <span className="text-red-500">2024-25!!</span>
            </h2>
            <button className="mt-4 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition">
              Apply Now
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/girl and boy sitting on floor and watching tablet.png"
              alt="Kids playing"
              width={350}
              height={250}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
