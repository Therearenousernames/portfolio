import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


function before( e ) {
    let data = document.getElementsByClassName("card_");
    let body = document.body;

    if ( e.target.srcset == "/sun.png" ) {
      changecards( data , "white");
      changeback( body , "white" , "#111");
      e.target.srcset = "/moon.png" ;
    } else {
      changecards( data , "#111") ;
      changeback( body , "#111" , "white") ;
      e.target.srcset = "/sun.png" ;
    }
  }

  function changeback( ele , c1 , c2 ){
    ele.style.backgroundColor = c1 ;
    ele.style.color = c2 ;
  }

  function changecards( data , color  ){
    for ( let i = 0 ; i < data.length ; i++ ){
      data[i].style.backgroundColor = color ;
    }
  }

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.bodyContainer}>
        <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
        <nav>
          <div className={styles.navHeader}>
            <ul className="nav-list">
              <li id="link">
            <a href="#about-me">About me</a>
            </li>
            <li id="link">
            <a href="#skills">Skills</a>
            </li>
            <li id="link">
            <a href="#contact-info">Contact</a>
            </li>
          </ul>
          <Image id="myImage" src="/moon.png" width={25} height={25} onClick={before}/>
          </div>
        </nav>
        <div className={styles.info}>
          <section id="welcome-section" className={styles.Heading}>
          <h1 className={styles.title}>Hey,<br/>I'm Khethelo</h1>
          <p className={styles.description}><i>An aspiring software engineer & environmentalist</i></p>
        </section>
        <div className={styles.imageContainer}>
          <Image src="/IMG-20220624-WA0001.jpg" height={300} width={300} id="image-of-me"/>
        </div>
        </div>
        
        <section id="about-me" className={styles.aboutme}>
        <div  className={styles.aboutme}>
        <h2>About me</h2>
        <p>I'm Khethelo Njomo, a final year software engineering student at WeThinkCode_. I would describe myself as a hardworking coder who loves solving complex problems and learning about new technologies.  I take an interactive stance to always be improving myself in all capacities. I have a passion for all things technology and design, from software engineering to UI/UX.</p>
        <p>In addition to my love of technology and design, I'm also interested in art, architecture, math and statistics.</p>
        <br></br>
        <h2>SovTech Motivation</h2>
        <p>I consider myself an adaptable person welcomes challenges as a means to improvement. I want to be a part of SovTech graduate program because it fully emcompasses what I am about which is begin bold, having strong opinions and doing something about it as well to learn from industry experts as well as my peers. I want to expand my skills and experties, but above everything, I'm applying for this program to grow my skills and gain invaluable experience.</p>
        <p>&darr; <a href="Resume-Khethelo-Njomo.pdf" target="_blank"> resume</a></p>
        </div>
        </section>
        <br></br>

        <section id="skills" className={styles.skillContainer}>
          <div id="skills"  className={styles.skills}>
        <h2 className={styles.skillHeader}>My growing skill set includes:</h2>
            <div className={styles.back}>
              <div  className={styles.card +" "+"card_"}>
                <div className="div-img">
                  <Image src="/backend.png" height={50} width={50}></Image>
                </div>
                <div className="div-title">
                <h2>Backend Developer</h2>
                </div>
                <br/>
                <p>I like building scalable and maintainable applications using modern technology stacks.</p>
                <br/>
                <p className='title-paragraph'>Languages I speak:</p>
                <br/>
                <div className='div-languages'>
                  <Image src="/python.png" width={30} height={30}></Image>
                  <Image src="/java.png" width={30} height={30}></Image>
                  <Image src="/sql-server.png" width={30} height={30}></Image>
                  <Image src="/visual-basic.png" width={30} height={30}></Image>
                </div>
                <br></br>
                <p>
                &rarr; Unit testing<br/>
                &rarr; Implementing OAuth using the Google OAuth API<br/>
                &rarr; Establishing the programming fundamentals including but not limited to, exception handling, packaging and using external libraries.<br/>
                &rarr; Wrting code that intergrates with an HTTP Rest API including JSON<br/>
                &rarr; Writing multithreaded code that fascilates for mulit-users interaction<br/>
                &rarr; Implemented maze solving algorithms such as Breadth First Search to solve mazes <br/>
                &rarr; Understands different architectural patterns as well as how to change an application into an application that uses microservices architecture <br/>
                &rarr; Using SQLlite to set up a relational database, use and retrieve information from said database.
                </p>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.card +" "+"card_"}>
                <div className="div-img">
                  <Image src="/ui-design.png" width={50} height={50}></Image>
                </div>
                <br/>
                <div className='div-title'>
                <h2>Frontend Developer</h2>
                </div>
                <br/>
                <p>I like building solutions that keep the end user in mind and bringing ideas to life.</p>
                <br/>
                <p className='title-paragraph'>Languages I speak:</p>
                <div className="div-languages">
                  <Image src="/html-5.png" width={30} height={30}></Image>
                  <Image src="/css3.png" width={30} height={30}></Image>
                  <Image src="/javascript.png" width={30} height={30}></Image>
                </div> 
                <br/>
                <p>
                  &rarr; Currently trying to get my certification in Responsive Web Design from FreeCodeCamp.<br/>
                </p>
              </div>
            </div>
            <div className={styles.back}>
              <div className={styles.card +" "+"card_"}>
                <div>
                <h2>Other Dev Tools</h2>
                </div>
                <br/>
              <div className='div-tools'>
                <Image src="/github.png" width={30} height={30}/>
                <Image src="/visual-studio-code.png" width={30} height={30}/>
                <Image src="/gitlab.png" width={30} height={30}/>
                <Image src="/intellij-idea.png" width={30} height={30}/>
                <Image src="/react-native.png" width={30} height={30}/>
                <Image src="/nextjs.png" width={30} height={30}/>
              </div>
              <br/>
              </div>
            </div>
            </div>
        </section>
        <div id="contact-info">
          <div>
            <h2>Let's Work Together...</h2>
            <p><i>How do you take your coffee?</i></p>
          </div>
          <div className="contact-links">
            <a id="profile-link" href="http://github.com/therearenousernames" target="_blank">
              <Image src="/github.png" height={30} width={30} ></Image>
            </a>
            <a href="njomokhethelo@gmail.com">
              <Image src="/gmail.png" height={30} width={30}></Image>
            </a>
            <a href="https://www.linkedin.com/in/khethelo-njomo">
              <Image src="/linkedin.png" height={30} width={30}></Image>
            </a>
          </div>
        </div>
        <br/>
      </main>
      <footer className={styles.footer}>
        <p id ="footer-text" styles="text-align: center"><b><em>Built and designed by Khethelo Njomo</em></b></p>
      </footer>
      </div>
      
    </div>
  )
}
