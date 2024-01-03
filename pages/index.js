import styles from '../styles/Home.module.css';
import BackgroundImage from '../components/BackgroundImage';
import jsonData from '../data.json';
import About from '../components/About';
import Instructor from '../components/Instructor';
import Reviews from '../components/Reviews';

import Navbar from '../components/Navbar';

export default function Home() {

  const currencySymbols = {
    "INR": "₹",  // Indian Rupee
    // Add more currency symbols as needed
  };

  function formatInstructorName(name) {
    return name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }
  
  // Get the instructor's name from the JSON data
  const instructorName = jsonData?.instructor?.name;
  
  // Format the instructor's name
  const formattedInstructorName = formatInstructorName(instructorName);
  

  return (
    <div className={styles.container}>
      <BackgroundImage imageUrl="/images/nityanand.svg">
        <div>
          <p>{jsonData?.instructor?.name}</p>
          <h1>{jsonData?.course?.title}</h1>
        </div>
      </BackgroundImage>

      <Navbar />

        <div>
            <div id="about" style={{ width: '60%', position: 'relative' }}>
              <About />
            </div>
        
               <span className={styles.card}>
              
                  <h3>Course fees</h3>
                  <h2>{currencySymbols[jsonData?.course?.fee?.currency]}{jsonData?.course?.fee?.amount}</h2>

                  <h3>What's included:</h3>
                  <span style={{display:'flex', alignItems:'center'}}>
                      <img src="/images/live-stream.png" alt="" width="20" height="20" style={{ marginRight: '5px' }} />
                      
                  <div>{jsonData?.course?.inclusions?.on_demand_videos} on-demand videos</div>
                  </span>

                  <span style={{display:'flex', alignItems:'center'}}>
                      <img src="/images/live-stream.png" alt="" width="20" height="20" style={{ marginRight: '5px' }} />
                      
                  <p>2 livestream sessions</p>
                  </span>
                  {jsonData?.course?.inclusions?.live_qa_sessions ? <span style={{display:'flex', alignItems:'center'}}>
                      <img src="/images/chat-icon.png" alt="" width="20" height="20" style={{ marginRight: '5px' }} />
                      <div>Live Q&A Sessions with {formattedInstructorName}</div>
                    </span>
                  : <></>}
                  {jsonData?.course?.inclusions?.whatsapp_community ? <span style={{display:'flex', alignItems:'center'}}>
                      <img src="/images/chat-icon.png" alt="" width="20" height="20" style={{ marginRight: '5px' }} />
                      <p>An active Whatsapp community</p>
                    </span>
                  : <></>}
                   <button className={styles.registerButton}>Register Now</button>
              </span>
        </div>

      <div id="instructor">
        <Instructor />
      </div>

      <div id="reviews">
        <Reviews />
      </div>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
