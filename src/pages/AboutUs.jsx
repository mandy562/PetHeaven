
import "./AboutUs.css";

function AboutUs() {
  return (
    <main className="about-page">

      {/* About Us Banner */}
      <section className="about-banner">
        <div className="about-banner-content">
          <span>GET TO KNOW US</span>

          <h1>About Us</h1>

          <p>
            Discover our story, our people, and the love behind every rescue.
          </p>
        </div>
      </section>

      {/* Section 1: Our Story */}
      <section className="about-section">
        <div className="about-section-container">

          <div className="about-text">
            <span className="about-label">OUR STORY</span>

            <h1>How Pet Heaven Started</h1>

            <p>
              Pet Heaven began with a simple belief:
              every cat and dog deserves a second
              chance at happiness.
            </p>

            <p>
              What started as a small group of animal
              lovers coming together to help abandoned
              and vulnerable pets gradually grew into
              a community dedicated to making a difference.
              With the support of compassionate volunteers,
              we began providing rescued animals with the
              care, comfort, and attention they needed.
            </p>

            <p>
              Today, Pet Heaven continues to bring people
              and pets together. From rescuing animals in
              need to helping them find loving families,
              every step of our journey is driven by
              kindness, compassion, and a shared love
              for animals.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/images/about1.jpg"
              alt="Rescued cats and dogs at Pet Heaven"
            />
          </div>

        </div>
      </section>

      {/* Section 2: Our Team */}
      <section className="about-section about-section-alt">
        <div className="about-section-container">

          <div className="about-image">
            <img
              src="/images/about2.jpg"
              alt="Volunteers caring for rescued pets"
            />
          </div>

          <div className="about-text">
            <span className="about-label">OUR TEAM</span>

            <h2>The People Behind Pet Heaven</h2>

            <p>
              Behind every rescued pet is a team of
              people who truly care.
            </p>

            <p>
              Our dedicated volunteers and animal care
              team work together to create a safe and
              welcoming environment for cats and dogs
              in need. From feeding and grooming to
              providing companionship and emotional
              support, every small act of kindness
              helps our animals feel loved and secure.
            </p>

            <p>
              At Pet Heaven, we believe that making a
              difference starts with people who are
              willing to give their time, care, and
              compassion. Together, we help every pet
              take one step closer to a happier future.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default AboutUs;