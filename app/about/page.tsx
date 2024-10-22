import Layout from "components/layout";
import Head from 'next/head';
import Image from "next/image";

const About: React.FC = () => {
  return (
    <>
      <Head>
        {/* Include both Caveat Brush and Poppins fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        {/* First Section */}
        <section className="bg-[#F5F5DC] flex flex-col md:flex-row items-center justify-between relative">
          <div className="w-full md:w-1/2 p-5">
            <h2
              className="text-[#F4A500] text-3xl font-bold mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Why Choose Lil Pals?
            </h2>
            <p
              className="text-left text-[22px] leading-relaxed text-[#667BC6] mb-4"
              style={{ fontFamily: "'Caveat Brush', cursive" }}
            >
              We are committed to equipping each child with a safe and engaging preschool environment to explore and thrive during these crucial years. Our preschool curriculum is designed to address the specific needs of each child given the substantial mental and cognitive growth at this stage. Little Elly’s well-structured Toddler, Pre-nursery, Nursery, and Kindergarten programs enhance children's emotional, intellectual, and aesthetic capabilities that cater to their specific needs.
            </p>
            <p
              className="text-left text-[20px] leading-relaxed text-[#667BC6]"
              style={{ fontFamily: "'Caveat Brush', cursive" }}
            >
              A whole new world created for your child. Lil Pals is not your ordinary preschool mascot. She is lovable, friendly, and embodies all the qualities we want our children to embrace; kindness, curiosity, and a warm heart. Our nurturing environment creates a happy home away from home for your child where they are not just taking their first step towards school but are becoming a part of our magical world.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-5 flex justify-center relative">
            <Image
              src="/Boy shaking hands with someone.png"
              alt="Boy shaking hands"
              className="max-w-full h-auto"
              width={400}
              height={400}
            />
            {/* Add background cloud elements */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <Image src="/cloud.png" alt="Cloud" width={64} height={64} />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="bg-[#F5F5DC] flex flex-col md:flex-row items-center justify-between relative">
          <div className="w-full md:w-1/2 p-5 flex justify-center relative">
            <Image
              src="/Group 3.png"
              alt="Children's group learning"
              className="max-w-full h-auto"
              width={400}
              height={400}
            />
            {/* Add fun icon next to the image */}
            <div className="absolute bottom-0 right-0 w-12 h-12">
           
            </div>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <h2
              className="text-[#F4A500] text-3xl font-bold mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Philosophy
            </h2>
            <p
              className="text-left text-[22px] leading-relaxed text-[#667BC6]"
              style={{ fontFamily: "'Caveat Brush', cursive" }}
            >
              At Lil Pals, we follow a child-centered approach that recognizes the individuality of each child. We believe that children learn best through play and hands-on experiences, which is why our curriculum is designed to be engaging, interactive, and fun.
              <br />
              <br />
              <span className="text-[#F4A500] font-bold">Play-Based Learning:</span> We understand that play is the natural way through which children explore the world around them. Our play-based curriculum allows children to learn through activities that are enjoyable, meaningful, and developmentally appropriate.
              <br />
              <br />
              <span className="text-[#F4A500] font-bold">Holistic Development:</span> We focus on the holistic development of children, ensuring that they grow not only intellectually but also emotionally, socially, and physically. Our programs are designed to build confidence, social skills, and a sense of independence.
              <br />
              <br />
              <span className="text-[#F4A500] font-bold">Inclusive Environment:</span> We celebrate diversity and welcome children from all backgrounds. Our inclusive approach ensures that every child feels respected and supported.
            </p>
          </div>
        </section>

        {/* Third Section */}
        <section className="flex flex-col md:flex-row items-center justify-between bg-[#F5F5DC] relative">
          <div className="w-full md:w-1/2 p-5">
            <Image
              src="/Vission And Mission.png"
              alt="Vision and Mission"
              className="w-full max-w-full h-auto"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full md:w-1/2 p-5">
            <h2
              className="text-[#F4A500] text-3xl font-bold mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Vision And Mission
            </h2>
            <p
              className="text-left text-[22px] leading-relaxed text-[#667BC6]"
              style={{ fontFamily: "'Caveat Brush', cursive" }}
            >
              Our vision is to create a joyful and inspiring environment where children are free to explore, discover, and develop their unique talents. We aim to lay a strong foundation that not only prepares them academically but also instills values of kindness, curiosity, and resilience.
              <br />
              <br />
              Our mission is to provide high-quality early childhood education that fosters the intellectual, social, emotional, and physical development of each child. We strive to create a safe, inclusive, and stimulating environment that encourages creativity, independence, and a love for learning.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;

