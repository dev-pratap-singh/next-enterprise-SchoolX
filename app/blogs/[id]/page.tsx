// app/blogs/[id]/page.tsx
"use client"; // Marking this component as a Client Component

import Layout from "components/layout";
import Head from "next/head";
import { useParams } from "next/navigation";
import Image from "next/image";

const BlogPost: React.FC = () => {
  const { id } = useParams();

  // Example blog content; replace this with your actual blog content based on the ID
  const blogContent = {
    '1': {
      title: 'Balancing Work and Parenting',
      introduction: 'Finding the right balance between work and parenting can be a challenging journey. Here are practical tips to help you manage both effectively.',
      sections: [
        {
          heading: "Understanding the Challenges",
          content: `Balancing work and parenting is not just a task; it's a journey filled with challenges. Parents often find themselves juggling deadlines, meetings, and family responsibilities. Here are some common challenges that parents face:
          <ul>
            <li><strong>Time Management:</strong> Finding time for both work and family can be overwhelming.</li>
            <li><strong>Guilt:</strong> Many parents experience guilt when they cannot give enough time to their children or their job.</li>
            <li><strong>Fatigue:</strong> Balancing both roles can lead to exhaustion, affecting mental and physical health.</li>
          </ul>
          Recognizing these challenges is the first step toward effective management. It’s essential to realize that both roles are demanding and require time and energy.`
        },
        {
          heading: "Tips for Effective Time Management",
          content: `<p>Here are some actionable tips to help you manage your time effectively:</p>
          <ul>
            <li><strong>Prioritize Tasks:</strong> Make a list of your daily tasks and prioritize them based on urgency and importance. Use tools like calendars and to-do lists to keep track.</li>
            <li><strong>Set Boundaries:</strong> Create clear boundaries between work hours and family time. Communicate your schedule with your employer and family to minimize distractions.</li>
            <li><strong>Schedule Family Activities:</strong> Just like work meetings, schedule quality time with your family. Whether it’s game night or a weekend outing, treat family time as non-negotiable.</li>
            <li><strong>Use Technology Wisely:</strong> Leverage apps and tools to help you organize your tasks. Use reminders and digital calendars to keep everything in check.</li>
            <li><strong>Learn to Say No:</strong> It’s okay to decline additional work or social invitations if they interfere with your family time. Be selective about your commitments.</li>
          </ul>`
        },
        {
          heading: "Self-Care is Essential",
          content: `<p>As a parent and a professional, it's easy to put your needs last. However, taking care of yourself is crucial for maintaining balance. Here are some self-care strategies:</p>
          <ul>
            <li><strong>Exercise Regularly:</strong> Physical activity helps relieve stress and boosts energy. Aim for at least 30 minutes a day.</li>
            <li><strong>Practice Mindfulness:</strong> Engage in mindfulness practices like meditation or yoga to calm your mind.</li>
            <li><strong>Set Aside Personal Time:</strong> Dedicate time each week for hobbies or relaxation. Whether it’s reading, cooking, or simply taking a bath, it’s vital to recharge.</li>
            <li><strong>Connect with Supportive Friends:</strong> Maintain relationships with friends who understand your situation. Share experiences and seek advice when needed.</li>
            <li><strong>Get Enough Sleep:</strong> Prioritize sleep by establishing a bedtime routine. A well-rested parent is more effective in both roles.</li>
          </ul>`
        },
        {
          heading: "Creating a Supportive Environment",
          content: `<p>Support from your partner, family, and colleagues can make a significant difference. Here are ways to foster a supportive environment:</p>
          <ul>
            <li><strong>Open Communication:</strong> Discuss your challenges and seek understanding from your partner and family. Be open about your needs.</li>
            <li><strong>Delegate Tasks:</strong> Share household responsibilities with your partner. Don't hesitate to ask for help from family or friends when necessary.</li>
            <li><strong>Engage in Parenting Groups:</strong> Join local or online parenting groups. Sharing experiences with other parents can provide valuable insights.</li>
            <li><strong>Seek Professional Help:</strong> If feeling overwhelmed, consider speaking to a counselor or therapist for support.</li>
          </ul>`
        },
        {
          heading: "Conclusion",
          content: `Balancing work and parenting is not easy, but with the right strategies, it can be achieved. Implementing these tips can help create a harmonious environment for your family and improve your work-life balance. Remember, every family is unique; find what works best for you and your loved ones.`
        }
      ],
      image: '/image.png',
      alt: 'Balancing Work and Parenting',
    },
    '2': {
      title: 'Stay Cool and Entertained: Fun Indoor Activities',
      introduction: 'Indoor activities can be a great way to bond with your family while keeping everyone entertained. Here are some ideas to get you started.',
      sections: [
        {
          heading: "The Importance of Indoor Activities",
          content: `Indoor activities are not only entertaining but also educational. They can help develop your child's skills in various areas while providing a safe space for creativity and exploration. Here are some reasons why indoor activities are essential:
          <ul>
            <li><strong>Promotes Creativity:</strong> Indoor activities encourage imaginative play and creativity, helping children express themselves.</li>
            <li><strong>Enhances Skills:</strong> Activities like puzzles, crafts, and games develop problem-solving skills and critical thinking.</li>
            <li><strong>Family Bonding:</strong> Spending time together in indoor activities strengthens family ties and creates lasting memories.</li>
          </ul>`
        },
        {
          heading: "Creative Ideas for Indoor Fun",
          content: `<p>Here are some engaging indoor activities for the whole family:</p>
          <ul>
            <li><strong>Arts and Crafts:</strong> Gather supplies like paper, crayons, and glue to let your child express their creativity. Consider themes for each session, like nature or family.</li>
            <li><strong>Cooking Together:</strong> Get the kids involved in meal prep by letting them help with simple recipes. It’s a fun way to teach them about healthy eating!</li>
            <li><strong>Interactive Story Time:</strong> Choose books that encourage participation. Ask questions and let your child predict what happens next.</li>
            <li><strong>Indoor Treasure Hunt:</strong> Create clues for a treasure hunt around the house, keeping kids active and engaged. This can be themed for special occasions or holidays.</li>
            <li><strong>Board Games and Puzzles:</strong> Perfect for family bonding; choose games that are age-appropriate and encourage teamwork. This can include classics like Monopoly or modern strategy games.</li>
            <li><strong>Science Experiments:</strong> Simple science experiments using household items can be both fun and educational. For example, creating a volcano with baking soda and vinegar!</li>
            <li><strong>Dance Party:</strong> Turn on some music and have a family dance party! It’s a great way to get everyone moving and laughing together.</li>
          </ul>`
        },
        {
          heading: "Tips for Making Indoor Activities Engaging",
          content: `<p>Here are some tips to keep indoor activities engaging and fun:</p>
          <ul>
            <li><strong>Rotate Activities:</strong> Keep things fresh by rotating activities regularly to maintain interest and excitement.</li>
            <li><strong>Encourage Participation:</strong> Involve everyone in the planning process. Ask your children what they’d like to do and let them take the lead in some activities.</li>
            <li><strong>Make it Themed:</strong> Consider creating themed days or weeks, like “Science Week” or “Arts Week,” to focus on specific types of activities.</li>
            <li><strong>Document the Fun:</strong> Take photos or videos of your activities. This not only captures the fun but can also be a wonderful memory to look back on.</li>
            <li><strong>Keep It Lighthearted:</strong> Remember to keep activities fun and pressure-free. The goal is to enjoy quality time together!</li>
          </ul>`
        },
        {
          heading: "Conclusion",
          content: `These activities not only entertain but also strengthen family bonds. By engaging in fun indoor activities, you create lasting memories and teach valuable skills. Whether it's a rainy day or a day when you simply prefer to stay inside, these activities can fill your home with laughter and joy.`
        }
      ],
      image: '/image (1).png',
      alt: 'Fun Indoor Activities',
    },
    '3': {
      title: "Wonder in Every Drop: Experiencing Life's First Rain with Your Child",
      introduction: 'Experiencing your child’s first rain can be a memorable occasion. Here’s how to make the most of this special moment.',
      sections: [
        {
          heading: "The Magic of First Experiences",
          content: `Every child's first experience with something new is magical. Their reactions to these moments create cherished memories. Rain, with its unique sights and sounds, can be particularly enchanting. Here’s how to make the first rain special:
          <ul>
            <li><strong>Exploration:</strong> Allow your child to explore the rain. Let them feel the drops, see the puddles, and observe the changes in the environment.</li>
            <li><strong>Engagement:</strong> Engage your child by asking questions about what they see and feel. Encourage them to express their thoughts about the rain.</li>
            <li><strong>Safety First:</strong> Always prioritize safety. Ensure your child is dressed appropriately for the weather and avoid letting them stay out too long if it’s cold or stormy.</li>
          </ul>`
        },
        {
          heading: "Activities to Enjoy in the Rain",
          content: `<p>Here are some fun activities you can enjoy with your child during their first rain experience:</p>
          <ul>
            <li><strong>Jumping in Puddles:</strong> Encourage your child to jump in puddles. It’s a classic rainy day activity that brings joy and laughter.</li>
            <li><strong>Rain Art:</strong> Use the rain to create art! Put a piece of paper outside and let the rain make its own patterns. You can also use washable paint for a fun outdoor art project.</li>
            <li><strong>Listen to the Sounds:</strong> Sit outside and listen to the sounds of the rain. Discuss the different sounds you hear, like raindrops on leaves or the rhythm of a downpour.</li>
            <li><strong>Collect Raindrops:</strong> Use small containers to collect rainwater and observe it together. Discuss the importance of water and the water cycle.</li>
            <li><strong>Rainy Day Picnic:</strong> Set up a picnic under a covered area where you can enjoy snacks while still being close to the rain. It makes for a unique dining experience!</li>
          </ul>`
        },
        {
          heading: "Documenting the Moment",
          content: `<p>Capturing your child's first rain experience is essential. Here’s how:</p>
          <ul>
            <li><strong>Photography:</strong> Take photos of your child enjoying the rain. Capture their expressions and interactions with the environment.</li>
            <li><strong>Journaling:</strong> Consider creating a scrapbook or journal entry about this special day. Write down your thoughts and your child's reactions.</li>
            <li><strong>Video Memories:</strong> Record videos of your child's playful moments in the rain. Watching them grow up will be a cherished memory in the future.</li>
          </ul>`
        },
        {
          heading: "Conclusion",
          content: `Experiencing your child’s first rain is a beautiful journey filled with wonder and joy. By engaging in various activities, you can create a memorable experience for both of you. Cherish these moments as they become the foundation of your child's understanding of the world.`
        }
      ],
      image: '/image (2).png',
      alt: 'Experiencing First Rain with Child',
    },
  };

  const currentBlog = blogContent[id];

  return (
    <>
      <Head>
        <title>{currentBlog ? currentBlog.title : 'Blog Post'}</title>
        <meta name="description" content={currentBlog ? currentBlog.introduction : 'No description available.'} />
      </Head>
      <Layout>
        <section className="blog-post">
          <h1>{currentBlog ? currentBlog.title : 'Blog Title'}</h1>
          <div className="blog-image">
            <Image
              src={currentBlog ? currentBlog.image : '/fallback-image.png'}
              alt={currentBlog ? currentBlog.alt : 'Image not found'}
              width={600}
              height={400}
            />
          </div>
          <p className="blog-intro">{currentBlog ? currentBlog.introduction : 'No introduction available.'}</p>
          {currentBlog && currentBlog.sections.map((section, index) => (
            <div key={index} className="blog-section">
              <h2>{section.heading}</h2>
              <p dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}
          <div className="cta">
            <p>Enjoyed this post? Share with others!</p>
          </div>
          <div className="social-share">
            <button className="social-button">Share on Facebook</button>
            <button className="social-button">Share on Twitter</button>
            <button className="social-button">Share on LinkedIn</button>
          </div>
        </section>
        <style jsx>{`
          .blog-post {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          h1 {
            font-size: 2.5rem;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
          }

          .blog-image {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }

          .blog-intro {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #555;
            margin-bottom: 20px;
            text-align: justify;
          }

          .blog-section {
            margin-bottom: 20px;
          }

          h2 {
            font-size: 1.8rem;
            color: #0070f3;
            margin-bottom: 10px;
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
            color: #444;
            text-align: justify;
          }

          ul {
            margin: 10px 0;
            padding-left: 20px;
            color: #444;
          }

          li {
            margin: 5px 0;
          }

          .cta {
            text-align: center;
            margin: 30px 0;
            font-weight: bold;
          }

          .social-share {
            display: flex;
            justify-content: center;
            gap: 10px;
          }

          .social-button {
            padding: 10px 15px;
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .social-button:hover {
            background-color: #005bb5;
          }
            .blog-post {
  max-width: 800px; /* Adjust as necessary */
  margin: 0 auto; /* Center the content */
  padding: 20px; /* Add some padding */
  line-height: 1.6; /* Improve readability */
}

.blog-image {
  margin: 20px 0; /* Space around the image */
  text-align: center; /* Center the image */
}

.blog-post h1 {
  font-size: 2.5em; /* Adjust heading size */
  margin-bottom: 15px; /* Space below the heading */
}

.blog-post h2 {
  font-size: 2em; /* Heading for sections */
  margin-top: 30px; /* Space above the section headings */
}

.blog-post p, 
.blog-post ul {
  margin-bottom: 20px; /* Space below paragraphs and lists */
}

.blog-post ul {
  padding-left: 20px; /* Indent list items */
}

.blog-post strong {
  font-weight: bold; /* Make strong text bold */
}

  .blog-post {
    max-width: 1000px; /* Increased max-width for better page fit */
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 90%; /* Added width for better responsiveness */
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  .blog-image {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .blog-intro {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 20px;
    text-align: justify;
  }

  .blog-section {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.8rem;
    color: #0070f3;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #444;
    text-align: justify;
  }

  ul {
    margin: 10px 0;
    padding-left: 20px;
    color: #444;
  }

  li {
    margin: 5px 0;
  }

  .cta {
    text-align: center;
    margin: 30px 0;
    font-weight: bold;
  }

  .social-share {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .social-button {
    padding: 10px 15px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .social-button:hover {
    background-color: #005bb5;
  }

        `}</style>
      </Layout>
    </>
  );
};

export default BlogPost;
