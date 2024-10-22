import Layout from "components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Blogs: React.FC = () => {
  const blogs = [
    {
      id: '1',
      title: 'Balancing Work and Parenting: Tips for Busy Moms and Dads',
      image: '/image.png',
      alt: 'Image 1',
    },
    {
      id: '2',
      title: 'Stay Cool and Entertained: Fun Indoor Activities',
      image: '/image (1).png',
      alt: 'Image 2',
    },
    {
      id: '3',
      title: "Wonder in Every Drop: Experiencing Life's First Rain with Your Child",
      image: '/image (2).png',
      alt: 'Image 3',
    },
    {
      id: '4',
      title: 'The Importance of Early Childhood Education',
      description: 'Learn why early childhood education is the foundation of lifelong learning and development.',
    },
    {
      id: '5',
      title: 'How to Encourage Creativity in Children',
      description: 'Explore fun, engaging ways to foster creativity and imagination in young minds.',
    },
    {
      id: '6',
      title: 'Tips for Smooth Pre-School Transitions',
      description: 'Helpful tips for parents to make the transition to pre-school easier for their children.',
    },
  ];

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
        {/* Header Section */}
        <section
          className="flex items-center justify-center h-[500px] text-white"
          style={{
            fontFamily: "'Caveat Brush', cursive",
          }}
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              <span className="text-red-500">L</span>
              <span style={{ color: 'rgb(34, 22, 95)' }}>e</span>
              <span style={{ color: 'rgb(34, 22, 95)' }}>a</span>
              <span style={{ color: 'rgb(34, 22, 95)' }}>r</span>
              <span style={{ color: 'rgb(34, 22, 95)' }}>n</span>
              <span className="text-indigo-500"> </span>
              <span className="text-violet-500">T</span>
              <span className="text-pink-500">h</span>
              <span className="text-gray-300">e</span>
              <span className="text-gray-500"> </span>
              <span className="text-cyan-500">B</span>
              <span className="text-fuchsia-500">a</span>
              <span className="text-teal-500">s</span>
              <span className="text-[#4b0082]">i</span>
              <span className="text-[#8b0000]">c</span>
              <span className="text-[#483d8b]">s</span>
              <span className="text-navy-500"> </span>
              <span className="text-yellow-500">O</span>
              <span className="text-yellow-500">f</span>
            </h1>
            <h1 className="text-5xl font-bold">
              <span className="text-[#2f4f4f] inline">P</span>
              <span className="text-[#8b3a3a] inline">a</span>
              <span className="text-[#e9967a] inline">r</span>
              <span className="text-red-600 inline">e</span>
              <span className="text-purple-500 inline">n</span>
              <span className="text-amber-700 inline">t</span>
              <span className="text-purple-300 inline">i</span>
              <span className="text-teal-400 inline">n</span>
              <span className="text-[#F4A500] inline">g</span>
            </h1>
          </div>
        </section>

        {/* Blog Post Section */}
        <section className="flex flex-wrap justify-around items-center my-10 px-5">
          {blogs.map((blog) => (
            <div key={blog.id} className="text-center w-full md:w-1/3 px-2 mb-6">
              <Link href={`/blogs/${blog.id}`}>
                <Image
                  src={blog.image || '/fallback-image.png'}
                  alt={blog.alt || 'Fallback Image'}
                  className="w-full h-auto max-w-xs mx-auto rounded-lg"
                  width={250}
                  height={250}
                />
                <p className="mt-4 text-lg" style={{ fontFamily: "'Caveat Brush', cursive" }}>
                  {blog.title}
                </p>
                {blog.description && <p className="mt-2 text-sm">{blog.description}</p>}
              </Link>
            </div>
          ))}
        </section>
      </Layout>
    </>
  );
};

export default Blogs;

