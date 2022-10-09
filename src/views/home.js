import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import Copyright from '../components/copyright'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rifki Nugraha | Knowledge Seeker</title>
        <meta
          name="description"
          content="I am a Business Consultant. A Business Advisor. An Entrepreneur. An Entrepreneur and Consultant. Success Coach. Life Coach. Mentor. Consultant."
        />
        <meta property="og:title" content="Rifki Nugraha | Knowledge Seeker" />
        <meta
          property="og:description"
          content="I am a Business Consultant. A Business Advisor. An Entrepreneur. An Entrepreneur and Consultant. Success Coach. Life Coach. Mentor. Consultant."
        />
      </Helmet>
      <div className="home-navbar-container">
        <header data-role="Header" className="navigation-container">
          <Link to="/">
            <img
              alt="logo"
              src="b1a21676-fb31-45ec-b5ea-9c727a067ae0"
              className="home-image"
            />
          </Link>
          <div className="home-nav">
            <nav className="home-nav1">
              <a href="#about" className="home-link navbar-link">
                About Me
              </a>
              <a href="#work" className="home-link1 navbar-link">
                My Work
              </a>
              <a href="#connect" className="home-link2 navbar-link">
                Let&apos;s Connect
              </a>
            </nav>
          </div>
          <div data-type="BurgerMenu" className="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="navigation-mobile-menu">
            <div className="home-nav2">
              <div className="home-container1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-image1"
                />
                <div data-type="CloseMobileMenu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-links-root-class-name9"></NavigationLinks>
              <button className="home-primary-btn button-primary button">
                Get started
              </button>
            </div>
            <div className="home-social-media">
              <span className="home-text">Follow us</span>
              <div className="home-container2">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                  <path d="M64 384h192v576h-192v-576z"></path>
                  <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                  <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                  <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
                </svg>
              </div>
            </div>
          </div>
          <a
            href="mailto:hi@rifikinugraha.com?subject="
            className="home-primary-btn1 button-primary button"
          >
            Email Me
          </a>
        </header>
      </div>
      <main className="home-main">
        <div className="section-container">
          <div className="home-max-width01 max-content-container">
            <div className="home-content-container">
              <h1 className="home-text01 heading1">
                <span>Hola!</span>
                <br></br>
                <span className="home-text04">I&apos;m Rifki Nugraha</span>
                <span>
                  ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>superdad</span>
                <span className="home-text07">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>and knowledge seeker</span>
                <br></br>
                <br></br>
              </h1>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/test3-600w.png"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div id="about" className="home-section-one section-container">
          <div className="home-max-width02 max-content-container">
            <h2 className="home-text11">I&apos;m Specialist Generalist</h2>
            <span className="home-text12">
              I am a generalist, not a specialist. I have a wide range of skills
              and knowledge, and I am not limited to any one area. I am a
              jack-of-all-trades, and I can adapt to any situation. I am not an
              expert in any one thing, but I am proficient in many things. I am
              a versatile and resourceful person, and I can always find a way to
              get the job done.
            </span>
            <div className="home-cards-container">
              <FeatureCard
                text="I love trying new things in life. It's one of the things that keeps me feeling alive and excited about life. I love the feeling of stepping out of my comfort zone and into the unknown."
                image_src="/playground_assets/idea-unscreen-200h.gif"
              ></FeatureCard>
              <FeatureCard
                text="I am a business consultant. I work with businesses to help them improve their operations and bottom line.  I use this knowledge to help my clients overcome challenges and achieve their goals."
                heading="Business consultant"
                image_src="/playground_assets/line-chart-unscreen-200h.gif"
              ></FeatureCard>
              <FeatureCard
                text="Helping companies to automate their business processes is my experience. I have experience with various software applications and tools. I am also experienced in project management."
                text1="Learn more &gt;"
                heading="Read your emails"
                image_src="/playground_assets/cloud-network-unscreen-200h.gif"
              ></FeatureCard>
              <FeatureCard
                text="As a trainer, i helps individuals and organizations develop the skills and capabilities they need to succeed. I work with clients to identify their goals."
                text1="Learn more &gt;"
                heading="Learning &amp; Development"
                image_src="/playground_assets/target-unscreen-200h.gif"
              ></FeatureCard>
            </div>
          </div>
        </div>
        <div id="work" className="section-container">
          <div className="home-max-width03 max-content-container">
            <div className="home-image-container1">
              <img
                alt="image"
                src="/playground_assets/33220464-6363287990bc424e1aed161b1c71157b1-1200w.png"
                className="home-image3"
              />
            </div>
            <div className="home-content-container1">
              <h1 className="home-text13 heading2">
                <span>
                  Jawsika Program Creation and Business Branding Kit. 
                </span>
                <span className="home-text15">Complete Package.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width04 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text16 heading2">
                <span>
                  The best strategy, Discussed with you.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text18">In the morning.</span>
              </h1>
              <span className="home-text19">
                <span>
                  The best business plans are those that are clear, concise, and
                  to the point. They should lay out the goals of the business
                  and the steps needed to reach those goals. The best business
                  plans also take into account the resources and constraints of
                  the business. They should be realistic and achievable.
                </span>
                <br className="content-Light"></br>
                <br className="content-Light"></br>
              </span>
            </div>
            <div className="home-image-container2">
              <img
                alt="image"
                src="/playground_assets/screenshot_35-1200w.png"
                className="home-image4"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width05 max-content-container">
            <div className="home-image-container3">
              <img
                alt="image"
                src="/playground_assets/2022-10-09%2021-43-24-1200w.gif"
                className="home-image5"
              />
              <img
                alt="image"
                src="/playground_assets/screenshot_371-1200w.png"
                className="home-image6"
              />
            </div>
            <div className="home-content-container3">
              <h1 className="home-text23 heading2">
                <span>
                  I&apos;m all about automating processes to make my life
                  easier!
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text25">Always.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width06 max-content-container">
            <div className="home-content-container4">
              <h1 className="home-text26 heading2">
                <span>
                  Learning and Development.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text28"></br>
                <span className="home-text29">For world.</span>
              </h1>
              <span className="home-text30">
                <span>
                  As a learning and development trainer, I am responsible for
                  delivering training courses and workshops to employees in
                  order to help them improve their skills and knowledge.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  My job is to create an engaging and effective learning
                  experience for my participants, I am passionate about helping
                  others learn and grow, and I firmly believe that everyone has
                  the potential to reach their goals with the right support.
                </span>
              </span>
            </div>
            <div className="home-image-container4">
              <img
                alt="image"
                src="/playground_assets/learning%20and%20development-1200w.gif"
                className="home-image7"
              />
            </div>
          </div>
        </div>
        <div className="home-section-five section-container">
          <div className="home-max-width07 max-content-container">
            <h2 className="home-text35">
              <span className="home-text36">
                Everyone has unique experiences that shape who they are. 
              </span>
              <span className="home-text37">So do you.</span>
            </h2>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name2"></Slide>
            <Slide
              Role="DESIGN DIRECTOR"
              Author="Bill Smith"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              Testimonial='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
              Testimonial2="Super highly recommended!”"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              Role="FREELANCE WRITER"
              Author="Julia Xang"
              image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              Testimonial="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
              rootClassName="slide-root-class-name1"
            ></Slide>
          </div>
        </div>
        <div className="section-container">
          <div id="connect" className="home-max-width08 max-content-container">
            <div className="home-heading-container">
              <h2 className="home-text38 heading2">
                <span>Let&apos;s have some good conversation </span>
                <span className="home-text40">Lets Talk.</span>
              </h2>
              <span>
                <span>We are all connected, let us become connection.</span>
                <br></br>
              </span>
            </div>
            <div className="home-contact-me">
              <a
                href="mailto:hi@rifkinugraha.com?subject="
                className="home-link3 button"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="home-footer section-container">
        <div className="home-max-width09 max-content-container">
          <div className="home-container3">
            <a
              href="https://twitter.com/f5kid"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <div className="home-container4">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
                </svg>
                <span>Twitter</span>
              </div>
            </a>
            <a
              href="https://www.instagram.com/rifkinugraha/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5"
            >
              <div className="home-container5">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                  <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                  <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                </svg>
                <span>Instagram</span>
              </div>
            </a>
            <div className="home-container6">
              <svg viewBox="0 0 1024 1024" className="home-icon22">
                <path d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"></path>
              </svg>
              <span>YouTube</span>
            </div>
            <a
              href="https://www.linkedin.com/in/rifkinugraha/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link6"
            >
              <div className="home-container7">
                <div className="home-container8">
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                    <path d="M64 384h192v576h-192v-576z"></path>
                    <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                  </svg>
                </div>
                <span>Linkedin</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default Home
