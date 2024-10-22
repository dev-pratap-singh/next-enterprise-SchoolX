"use client"; // Add this line to mark the component as a Client Component

import Layout from "components/layout";
import Head from 'next/head';
import Image from "next/image";
import { useState } from "react"; // Import useState

const Admission: React.FC = () => {
  // State for form fields
  const [studentName, setStudentName] = useState("");
  const [parentName, setParentName] = useState("");
  const [area, setArea] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      studentName,
      parentName,
      area,
      phone,
      email,
      program,
    });
  };

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
          className="bg-cover bg-center h-[650px] flex items-center justify-end text-white"
          style={{
            backgroundImage: "url('/image 12.png')",
            fontFamily: "'Caveat Brush', cursive",
          }}
        >
          {/* Registration Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] mt-10 mr-4"> {/* Added margin-right here */}
            <h2
              className="text-[#e84946] text-2xl mb-4 flex items-center gap-2"
              style={{ fontFamily: "'Caveat Brush', cursive" }}
            >
              Register Now
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Student Name"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)} // Update state on change
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Parent Name"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)} // Update state on change
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Area you're Located"
                required
                value={area}
                onChange={(e) => setArea(e.target.value)} // Update state on change
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone No."
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)} // Update state on change
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email Id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <select
                required
                value={program}
                onChange={(e) => setProgram(e.target.value)} // Update state on change
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              >
                <option value="" disabled>
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

        {/* Admission Process Section */}
        <section
          className="bg-gradient-to-b from-[#ff91b7] to-[#ff1379] text-white text-center p-10"
          style={{ fontFamily: "'Caveat Brush', cursive" }}
        >
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Admission Process</h1>
            <Image
              src="/done mark.png"
              alt="Checkmark Icon"
              className="w-12"
              height={250}
              width={250}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-around mb-10">
            {/* Step 1 */}
            <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
              <Image
                src="/Group 15.png"
                alt="Step 1"
                className="w-36 mx-auto mb-4 shadow-lg"
                height={250}
                width={250}
              />
              <div className="px-4">
                <h2 className="text-2xl mb-2 uppercase">Identifying the Right Program</h2>
                <p className="text-base mb-2">
                  Fill out our online inquiry form to express your interest.
                </p>
                <p className="text-base">
                  Come visit our campus and meet with our admissions team.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="w-full md:w-1/2 text-center">
              <Image
                src="/Group 16.png"
                alt="Step 2"
                className="w-36 mx-auto mb-4 shadow-lg"
                height={250}
                width={250}
              />
              <div className="px-4">
                <h2 className="text-2xl mb-2 uppercase">Submit an Application</h2>
                <p className="text-base mb-2">
                  Complete our online application form and provide the necessary documents.
                </p>
                <p className="text-base mb-2">
                  Meet with our admissions team for an interview.
                </p>
                <p className="text-base mb-2">
                  We will notify you of our decision within weeks of your application.
                </p>
                <p className="text-base">
                  Once accepted, complete the enrollment process to secure your spot.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10">
            <p className="text-base mb-4">
              For more information or to schedule a visit, please contact our admissions office at 080 46221344 or EMAIL.
            </p>
            <p className="text-base mb-4">
              We look forward to welcoming you to our community!
            </p>
            <div className="flex justify-center items-center gap-4">
              <Image
                src="/purple scribble.png"
                alt="Purple Scribble"
                className="w-40 h-auto"
                height={250}
                width={250}
              />
              <Image
                src="/pink candy.png"
                alt="Pink Candy"
                className="w-40 h-auto"
                height={250}
                width={250}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Admission;
