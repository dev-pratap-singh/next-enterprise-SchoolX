import Layout from "components/layout";
import Head from 'next/head';
import Image from "next/image";

const Franchise: React.FC = () => {
  return (
    <>
      <Head>
        {/* Include the Caveat Brush font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        {/* Background Section */}
        <section
          className="bg-cover bg-center h-[650px] flex items-center justify-end"
          style={{
            backgroundImage: "url('/image 13.png')",
            fontFamily: "'Caveat Brush', cursive",
          }}
        >
          {/* Registration Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] mt-10 mr-10"> {/* Increased mr to mr-10 for more right margin */}
            <h2
              className="text-[#e84946] text-2xl mb-4 flex items-center gap-2"
              style={{ fontFamily: "'Caveat Brush', cursive" }}
            >
              Register Now
            </h2>
            <form action="#">
              <input
                type="text"
                placeholder="Student Name"
                required
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Parent Name"
                required
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Area you're Located"
                required
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone No."
                required
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email Id"
                required
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <select
                required
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              >
                <option value="" disabled selected>
                  Select Program
                </option>
                <option value="program1">Program 1</option>
                <option value="program2">Program 2</option>
              </select>
              <button
                type="submit"
                className="bg-[#f4a5a1] text-white p-2 w-full rounded flex justify-center items-center hover:bg-[#e84946]"
              >
                Enquire Now
              </button>
            </form>
          </div>
        </section>

        {/* Franchise Section */}
        <section
          className="text-center py-10 px-5"
          style={{
            background: "linear-gradient(to bottom, #f8ecd4, #b7b6b9, #6c6f98)",
            fontFamily: "'Caveat Brush', cursive",
          }}
        >
          <h2 className="text-4xl mb-6">Why you should Partner with us!?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Join a growing network of educational institutions committed to excellence. By franchising with Lil Pals, you will be part of a brand that is recognized for its innovative approach to education, strong community fit, and proven success in student outcomes.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            Here's why over 130+ franchisees across the country covering over 100 cities would vouch for the immense opportunities partnering with Lil Pals can bring your way.
          </p>
          <h3 className="text-2xl mb-6">How to start a Lil Pals Preschool franchise</h3>

          {/* Steps Flow */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Step 1 */}
            <div className="relative p-5 border border-gray-300 m-2 w-full md:w-1/5 rounded-lg shadow-lg bg-white">
              <h4 className="text-2xl mb-4">Step 1</h4>
              <Image
                src="/multicolored smartphone notifications.png"
                alt="Preliminary Meeting & Sign Agreement"
                className="w-20 h-20 mb-4 mx-auto"
                width={100}
                height={100}
              />
              <p className="text-lg">Preliminary Meeting & Sign Agreement</p>
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 md:translate-x-10">
                
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-5 border border-gray-300 m-2 w-full md:w-1/5 rounded-lg shadow-lg bg-white">
              <h4 className="text-2xl mb-4">Step 2</h4>
              <Image
                src="/Searching the web on tablet.png"
                alt="Building Infrastructure"
                className="w-20 h-20 mb-4 mx-auto"
                width={100}
                height={100}
              />
              <p className="text-lg">Building Infrastructure</p>
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 md:translate-x-10">
   
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-5 border border-gray-300 m-2 w-full md:w-1/5 rounded-lg shadow-lg bg-white">
              <h4 className="text-2xl mb-4">Step 3</h4>
              <Image
                src="/Loudspeaker and social media marketing.png"
                alt="Training & Marketing"
                className="w-20 h-20 mb-4 mx-auto"
                width={100}
                height={100}
              />
              <p className="text-lg">Training & Marketing</p>
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 md:translate-x-10">
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative p-5 border border-gray-300 m-2 w-full md:w-1/5 rounded-lg shadow-lg bg-white">
              <h4 className="text-2xl mb-4">Step 4</h4>
              <Image
                src="/Three-quarter view of a blue round check mark icon.png"
                alt="Ready to Start"
                className="w-20 h-20 mb-4 mx-auto"
                width={100}
                height={100}
              />
              <p className="text-lg">Ready to Start</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            className="mt-10 bg-[#aa6261] max-w-4xl mx-auto p-6 rounded-lg"
            style={{ fontFamily: "'Caveat Brush', cursive" }}
          >
            <h2 className="text-3xl mb-6">FAQs</h2>
            <div className="text-left">
              <details className="mb-4">
                <summary className="font-bold text-xl cursor-pointer">
                  Are you involved in the recruitment of teachers?
                </summary>
                <p className="mt-2 pl-4 text-base">
                  Yes, we provide assistance in recruiting qualified educators.
                </p>
              </details>
              <details className="mb-4">
                <summary className="font-bold text-xl cursor-pointer">
                  Is there ongoing support after the franchise is launched?
                </summary>
                <p className="mt-2 pl-4 text-base">
                  Absolutely! We offer continuous support for marketing, curriculum, and operations.
                </p>
              </details>
              {/* Add more FAQs similarly */}
              <details className="mb-4">
                <summary className="font-bold text-xl cursor-pointer">
                  How much time does it take to set up a Lil Pals?
                </summary>
                <p className="mt-2 pl-4 text-base">
                  Setting up usually takes about 6-8 months from signing to opening.
                </p>
              </details>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Franchise;
