import React from "react";
import "./ProjectMeditationApp.scss";
import FadeInSection from "../components/FadeInSection";
import { useNavigate, useLocation } from "react-router-dom";

import ProjectImg01 from "/src/assets/images/project-05-01.jpg";
import ProjectImg02 from "/src/assets/images/project-05-02.jpg";
import ProjectImg03 from "/src/assets/images/project-05-03.jpg";
import ProjectImg04 from "/src/assets/images/project-05-04.jpg";
import ProjectImg05 from "/src/assets/images/project-05-05.jpg";
import ProjectImg06 from "/src/assets/images/project-05-06.jpg";
import ProjectImg07 from "/src/assets/images/project-05-07.jpg";
import ProjectImg08 from "/src/assets/images/project-05-08.jpg";
import ProjectImg09 from "/src/assets/images/project-05-09.jpg";
import ProjectImg10 from "/src/assets/images/project-05-10.jpg";
import ProjectImg11 from "/src/assets/images/project-05-11.jpg";
import ProjectImg12 from "/src/assets/images/project-05-12.jpg";
import ProjectImg13 from "/src/assets/images/project-05-13.jpg";
import ProjectImg14 from "/src/assets/images/project-05-14.jpg";
import ProjectImg15 from "/src/assets/images/project-05-15.jpg";

const UXUIDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname === "/") {
      // If already on the homepage, scroll to the section
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the homepage and then scroll
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Delay to ensure the homepage has rendered
    }
  };

  return (
    <>
      <header className="header-project">
        <FadeInSection>
          <div className="container">
            <div className="content">
              <h1 className="type-sz-md type-bold type-center margin-top-md">
                Meditation App <span className="project-tag">Case Study</span>
              </h1>
            </div>
          </div>
        </FadeInSection>
      </header>
      <div className="container padding-bottom-lg">
        <FadeInSection>
          <h2 className="type-sz-xsm type-center type-uppercase type-bold margin-top-sm margin-bottom-sm">
            Summary
          </h2>
        </FadeInSection>

        <div className="content">
          <p className="type-bold">Design Prompt:</p>
          <p className="">
            Design a main visual concept of a guided meditation app for
            Shamanicca brand.
          </p>
          <p className="type-bold">Main App's user benefits:</p>
          <p className="">
            Help users get a positive materialization of desired goals by
            manipulating quantum reality trough antediluvian meditation
            techniques and reprogramming users' subconscious.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img className="margin-top-sm" src={ProjectImg01} />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-bold margin-top-md">Context</p>
          <p>
            The app's success heavily depends on the outcomes of Shamanicca's
            Phase 1 and Phase 2 projects, which are expected to drive user
            traffic to the app. The Phase 1 project involves the development,
            distribution, and marketing of the book "Digital Shamanic Activism".
            In the text, the author, Mauricio B., explains how he launched a
            digital talisman to break down the vaccine passport in the pandemic.
            The book also makes mentions of Shamanicca's YouTube channel with
            the aim of guiding traffic towards it, potentially increasing the
            number of channel subscribers.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img className="margin-top-sm" src={ProjectImg02} />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="margin-top-md">
            Phase 2 of the project is connected to Shamanicca's YouTube Channel.
            Currently, the channel is releasing subliminal audio content
            designed to aid in reprogramming users' subconscious minds. In the
            near future, is planned to introduce meditation videos featuring
            Agesta sacred codes to facilitate positive transformations by
            adopting the meditation habits. As users witness the benefits
            through the results on the YouTube channel, they may choose to
            subscribe for free to Shamanicca's app. This app offers an improved
            user experience and is designed to assist users in their meditation
            journey.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img className="margin-top-sm" src={ProjectImg03} />
          </div>
        </FadeInSection>

        <div className="content">
          <p>
            <a
              href="https://youtube.com/@shamanicca"
              target="_blank"
              className="type-sz-caption"
            >
              Shamanicca's YouTube Channel
            </a>
          </p>
          <h3 className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            Description
          </h3>
          <p>
            The meditation App project is a third Phase project for Shamanicca
            brand. Once accomplished Phase 1 & 2, energies will be oriented on
            delivering a digital tool to facilitate the meditation activity
            focused on bringing to users quantum materialization of positive
            outcomes in many areas of live; by diffusing to users Sacred Codes
            guided meditation techniques (as principal App Value Proposition),
            positive subliminal affirmations audios, guided positive
            visualizations, guided breathing exercises, guided pelvic floor
            exercises and articles about mysticism (Blogging). Sacred Codes are
            canalized information by mediums (Agesta, Grabovoi, Henn), as a
            technological spiritual tool that was used before Atlantis' dawn.
          </p>
          <h3 className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            My Role
          </h3>
          <p>
            Project owner, Project Manager, Content Creator, Copywriter, UX/UI
            Designer.
          </p>
          <h3 className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            Status
          </h3>
          <p>
            App project is in a pause, until running successfully Shamanicca's
            Phase 2 project.
          </p>
        </div>

        <div className="content">
          <h3 className="type-sz-xsm type-bold type-uppercase margin-top-md margin-bottom-sm">
            Challenge
          </h3>
          <p>
            As a UX/UI designer, the project presented an opportunity to enhance
            research skills related to meditation apps, focusing on both user
            and business requirements for Shamanicca's app. The goal was to
            analyze the research findings and initially apply them as design
            solutions to improve the user experience and brand identity. This
            involved creating wireframes to outline the key user interactions
            and proposing a final UI concept that could be extended to the
            entire mobile app. Additionally, the challenge was to devise a
            design solution for presenting the app's tools to users and
            incorporating a motivational component to encourage daily
            interaction with the app. The search for a suitable UI Kit aimed to
            expedite the design process.
          </p>
        </div>

        <div className="content">
          <h3 className="type-sz-xsm type-bold type-uppercase margin-top-md margin-bottom-sm">
            Solution
          </h3>
          <p>
            To streamline the design process, it was determined that the
            fundamental Home page structure of leading apps such as Calm App and
            Spotify would be replicated on the Shamanicca's homepage too. The
            layout of the primary pages was modelled after Spotify's design,
            drawing inspiration from its minimalist user interface to bring
            simplicity to the interface design process. The Disy UI kit served
            as the foundation for creating all the app screens and various
            components, significantly expediting the design of key elements and
            outcomes. Displayed prominently on the homepage, the content is
            organized in a way that aligns with users' interests, with a clear
            hierarchy of information. The topmost item is 'Restor me Quick,'
            prioritizing urgent cases like anxiety attacks. The second tier
            focuses on user tool trends, and the third tier offers suggestions
            for sacred codes meditations highlighted, a core feature of the app.
            Below are some examples of high-fidelity design screens that were
            developed.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img className="margin-top-sm" src={ProjectImg04} />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-caption margin-top-sm">
            Screens: Home and User Library
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img className="margin-top-sm" src={ProjectImg05} />
          </div>
        </FadeInSection>

        <div className="content">
          <div className="content">
            <p className="type-sz-caption margin-top-sm">
              Screens: Subliminal Playlist And Subliminal Audio Track
            </p>
          </div>
        </div>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md">Design Features</p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img className="margin-top-sm" src={ProjectImg06} />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-caption margin-top-sm">
            Screens: Set subliminal audio challenge, follow challenge and
            challenge Completed
          </p>
        </div>

        <div className="content">
          <h3 className="type-sz-xsm type-bold type-uppercase margin-top-md margin-bottom-sm">
            Process
          </h3>

          <p className="margin-top-md margin-bottom-sm">
            User research analysis & Key findings.
          </p>

          <ul>
            <li>
              <p>
                User goals: They use meditation apps to improve sleep and to
                reduce stress levels, followed by reducing depression or anxiety
                and improving overall health.
              </p>
            </li>
            <li>
              <p>
                Gender Differences: Historically, women report higher use of
                meditation when compared with men. 100% women vs 50% men.
              </p>
            </li>
            <li>
              <p>
                Tools for Engagement: Tracking and reminders were the most
                common in-app tools used to support engagement, and using the
                app at bedtime appeared to be the most effective adherence
                strategy to maintain engagement with the app over time. Research
                on the efficacy of mobile apps in impacting behaviour shows that
                tracking behaviour and feedback are among the most successful
                strategies for behaviour change.
              </p>
            </li>
            <li>
              <p>
                Changes in Health, Stress, and Sleep: Through social media,
                individuals using Sacred Codes meditations and subliminal audios
                give testimonies of positive changes in their lives.
              </p>
            </li>
            <li>
              <p>
                Sacred Codes Meditations and Pelvic floor exercises are not
                present on meditations Apps.
              </p>
            </li>
          </ul>
        </div>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            User Personas
          </p>
          <p>
            In the short term, the App aims to cater to students, young
            professionals, and busy parents. This initial focus on these
            specific groups will enable the app to offer financial support and
            lay the groundwork for future versions designed for children and
            senior citizens.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img
              className="margin-top-sm margin-bottom-md"
              src={ProjectImg07}
            />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            User Stories
          </p>
          <p>
            User stories are various scenarios or situations that users
            encounter, highlighting their main issues in navigating their
            everyday challenges. So It gives the challenges that app's users
            could solve with the app and the moment that it could be required.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img
              className="margin-top-sm margin-bottom-md"
              src={ProjectImg08}
            />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            Preliminary Business needs
          </p>
          <ul>
            <li>
              <p>
                Complete successfully Phase 1 and 2, to afford directing traffic
                to the app.
              </p>
            </li>
            <li>
              <p>
                The goal is to develop a Habit Forming App, to engage users for
                some years, while helping users to solve their issues in
                personal life.
              </p>
            </li>
            <li>
              <p>
                Highlight meditation with sacred codes. Sacred codes meditation
                techniques are the differential element from other apps.
              </p>
            </li>
            <li>
              <p>Create solids elements for brand's app.</p>
            </li>
            <li>
              <p>
                Find a visual system that could be maintained and adaptable by
                evolving the product.
              </p>
            </li>
          </ul>
        </div>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            Preliminary Customer needs.
          </p>

          <ul>
            <li>
              <p>Tools to deal successfully with stress crisis.</p>
            </li>
            <li>
              <p>Tools to deal successfully with anxiety.</p>
            </li>
            <li>
              <p>Tools to deal successfully with insomnia.</p>
            </li>
            <li>
              <p>
                Tools to manifest successfully better outcomes in life in
                different subjects (as wealth, health, relationships, etc)
              </p>
            </li>
            <li>
              <p>Tools to assist with breathing exercises.</p>
            </li>
            <li>
              <p>Tools to assist with pelvic floor exercises.</p>
            </li>
            <li>
              <p>Tools to track habits, progress, and challenges.</p>
            </li>
            <li>
              <p>
                The User library displays user's playlist and suggested app's
                playlists.
              </p>
            </li>
          </ul>
        </div>

        <div className="content">
          <h3 className="type-sz-xsm type-bold type-uppercase margin-top-md margin-bottom-sm">
            Visuals
          </h3>
        </div>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            Site Map
          </p>
          <p>
            The fundamental framework of the Shamanicca App was derived from the
            theme of the Calmo Meditation App Theme. Within the site map, you'll
            find various screens dedicated to components like login, settings,
            users, home, playlists, meditations, and more. The screens
            highlighted in purple are intended for high-fidelity prototypes,
            chosen based on their significance in capturing the majority of user
            interactions.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img
              className="margin-top-sm margin-bottom-md"
              src={ProjectImg09}
            />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            Sketching Exercises.
          </p>
          <p>
            Spotify was used as a model to demonstrate how homepage content
            blocks are arranged to enhance the content library by catering to
            user needs, trending recommendations, and desires. The majority of
            the work's target screens were initially sketched to aid in
            envisioning user interactions and users' flows.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img
              className="margin-top-sm margin-bottom-md"
              src={ProjectImg10}
            />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            High-level users' flow.
          </p>
          <p>
            Transferring the sketch-based navigation exercise to the computer,
            you'll notice that the majority of the user flow centres around the
            homepage, playlists, meditation tracks, and muscle exercises
            (specifically Diaphragm and pelvic floor). This marks the beginning
            of identifying the key screens for design, which will serve as
            reference points for the entire project moving forward.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img
              className="margin-top-sm margin-bottom-md"
              src={ProjectImg15}
            />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            UI Kit
          </p>
          <p>
            Using the Disy UI Kit greatly expedited the design process. We
            incorporated various elements from the UI kit, such as typography,
            type sizes, spacing, colour schemes, and icons, into our app screen
            designs. Some components were customized to meet our specific needs.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img
              className="margin-top-sm margin-bottom-md"
              src={ProjectImg11}
            />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            Breathing guided Exercise
          </p>
          <p>
            Custom components as meditation players and exercises screens are
            visually appealing due to the use of AI-generated illustrations for
            the theme's backdrop.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img
              className="margin-top-sm margin-bottom-md"
              src={ProjectImg12}
            />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            Search Screen And Search Results
          </p>
          <p>
            Both the search screen and search results components closely
            resemble Spotify's search features. However, they consistently
            provide alternative options for searching, enriching the overall
            perspective of the content accessible within the application.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img
              className="margin-top-sm margin-bottom-md"
              src={ProjectImg13}
            />
          </div>
        </FadeInSection>

        <div className="content">
          <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
            Variations of colour pallet
          </p>
          <p>
            The use of a black and white user interface provides the flexibility
            to experiment with different colour combinations for upcoming A/B
            tests. While purple is a hue that aligns with the app's brand
            identity, it doesn't evoke a sense of alertness before bedtime. On
            the other hand, the orange colour palette is reminiscent of the warm
            hues of a sunset, making it a potentially more soothing choice for
            nighttime use. We'll rely on test results to determine which version
            is better suited for our users.
          </p>
        </div>

        <FadeInSection>
          <div className="content-img">
            <img
              className="margin-top-sm margin-bottom-md"
              src={ProjectImg14}
            />
          </div>
        </FadeInSection>

        <div className="content">
          <h3 className="type-sz-xsm type-bold type-uppercase margin-top-md margin-bottom-sm">
            Impact
          </h3>

          <div className="content">
            <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
              What went well
            </p>
            <ul>
              <li>
                <p>
                  The information found about meditations App and the business
                  side as well as the UX/UI field as UI resources shortened the
                  research process by 4 days.
                </p>
              </li>
              <li>
                <p>
                  Using Disy UI Kit to help out build the main elements of the
                  app's interface, who helped out to short the time by 7 days.
                </p>
              </li>
              <li>
                <p>
                  Copying Spotify's basic structure to build up App design
                  helped to solve how to organize blocks.
                </p>
              </li>
              <li>
                <p>
                  AI Illustrations from Shamanicca's YouTube Channel helps to
                  differentiate the UI from other Apps, and they are
                  eye-catching too.
                </p>
              </li>
            </ul>
          </div>
          <div className="content">
            <p className="type-sz-xsm type-bold margin-top-md margin-bottom-sm">
              What we can improve
            </p>

            <ul>
              <li>
                <p>
                  Screens as the login process ones are still not designed.
                  Responsive views. Tablet, desktop, web versions will be needed
                  too.
                </p>
              </li>
              <li>
                <p>
                  Design System & Design Documentation. Initially will be done
                  on Figma; Eventually will move the documentation to Zero
                  height for the development phase.
                </p>
              </li>
              <li>
                <p>
                  Clickable Prototype. Have to check the main needs of the user
                  on the “synthesize insights & Requirements” item on this
                  document. To determine what users' challenges, we could test
                  with the prototype. To test the prototype, It's needed to do a
                  research to adopt a testing tool as UXtweak, and take the data
                  useful to improve the app interface.
                </p>
              </li>
              <li>
                <p>
                  User AB test and analyze the efficacy of solution. For Phase 5
                  one of the AB tests, we are deciding to launch the app with a
                  black background, purple gradient background and orange
                  background versions. to check what colour engages better
                  psychologically at day and night.
                </p>
              </li>
              <li>
                <p>
                  Collect feedback. Adjust and deliver. The App has to be
                  integrated to a User Behaviour Tracking tool. After launching
                  the app, this one tool will help to get data from the App.
                  Helping on knowing how to improve Shamanicca App.
                </p>
              </li>
            </ul>
          </div>

          <a
            className="btn btn_comp type-uppercase type-bold margin-top-lg center-block"
            onClick={() => handleNavigation("section_portfolio")}
          >
            <i className="fa-solid fa-arrow-left margin-right-xsm"></i> Go To
            Portfolio
          </a>
        </div>
      </div>
    </>
  );
};

export default UXUIDetails;
