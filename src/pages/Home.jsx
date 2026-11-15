import { Link } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";


const heroSlides = [
  {
    id: 1,
    image: "/images/hero1.jpg",
    title: "Every Pet Deserves\na Loving Home",
    description:
      "Give abandoned cats and dogs a second chance at happiness",
    buttonText: "Learn More",
    buttonLink: "/aboutus",
  },
  {
    id: 2,
    image: "/images/hero2.jpg",
    title: "Find Your\nPerfect\nCompanion",
    description:
      "Meet our lovely cats and dogs waiting for\nsomeone special to give them a forever home",
    buttonText: "Meet Our Pets",
    buttonLink: "/adopt",
  },
];


function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        (prev + 1) % heroSlides.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  // Go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      (prev + 1) % heroSlides.length
    );
  };

  return (
    <main>
      
      <section
        className="home-hero-carousel"
        aria-label="Pet Heaven highlights"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(
                90deg,
                rgba(25, 20, 17, 0.65) 0%,
                rgba(25, 20, 17, 0.3) 55%,
                rgba(25, 20, 17, 0.05) 100%
              ), url("${slide.image}")`,
            }}
            aria-hidden={index !== currentSlide}
          >
            <div className="hero-slide-content">
              <span className="hero-slide-label">
                WELCOME TO PET HEAVEN
              </span>

              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              {index === currentSlide && (
                <Link
                  to={slide.buttonLink}
                  className="hero-slide-btn"
                >
                  {slide.buttonText}
                </Link>
              )}
            </div>
          </div>
        ))}

        {/* Previous button */}
        <button
          type="button"
          className="hero-arrow hero-arrow-left"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        {/* Next button */}
        <button
          type="button"
          className="hero-arrow hero-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>

        {/* Slide indicators */}
        <div className="hero-indicators">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : undefined}
            />
          ))}
        </div>
      </section>


      {/* Who We Are Section */}
      <section className="home-about">
        <div className="section-heading">
          <span className="section-label">OUR MISSIONS</span>

          <h2>Every Paw Deserves a Second Chance</h2>

          <p>
            Pet Heaven is a non-profit community dedicated to
            rescuing abandoned animals, finding loving homes,
            and providing a safe place for pets in need.
          </p>
        </div>

        <div className="about-grid">

          {/* Rescue */}
          <article className="about-card">
            <img
              src="/images/who1.jpg"
              alt="Volunteers caring for rescued animals"
            />

            <div className="about-card-content">
              <h3>Rescue & Care</h3>
              <p>
                With the help of dedicated volunteers,
                we rescue and care for abandoned cats
                and dogs, giving them the love and
                support they deserve.
              </p>
            </div>
          </article>

          {/* Adoption */}
          <article className="about-card">
            <img
              src="/images/who2.jpg"
              alt="A family adopting a pet"
            />

            <div className="about-card-content">
              <h3>Pet Adoption</h3>
              <p>
                We connect rescued pets with responsible
                and loving families, helping every animal
                find a safe and happy forever home.
              </p>
            </div>
          </article>

          {/* Shelter */}
          <article className="about-card">
            <img
              src="/images/who3.jpg"
              alt="A rescued pet resting in a safe shelter"
            />

            <div className="about-card-content">
              <h3>Pet Surrender & Shelter</h3>
              <p>
                For owners who can no longer care for
                their pets, we provide a safe and
                compassionate place while helping
                them find a new home.
              </p>
            </div>
          </article>

        </div>
      </section>



      {/* How It Works Section */}
      <section className="home-how">

        {/* Banner */}
        <div className="how-banner">
          <div className="how-banner-content">
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>How It Works</h2>
            <p>
              Whether you're adopting a new companion
              or finding a safe place for a pet,
              we're here to guide you.
            </p>
          </div>
        </div>

        {/* Process Cards */}
        <div className="how-process-grid">

          {/* Adoption Process */}
          <div className="how-process-card">
            <div className="how-process-heading">
              <span className="how-process-label">01 / ADOPTION</span>
              <h3>Adoption Process</h3>
              <p>
                Follow these simple steps to welcome
                a loving companion into your home.
              </p>
            </div>

            <div className="how-steps">
              <div className="how-step">
                <span className="how-step-number">1</span>
                <div>
                  <h4>Find Your Companion</h4>
                  <p>
                    Browse our available cats and dogs
                    and choose a pet that suits you.
                  </p>
                </div>
              </div>

              <div className="how-step">
                <span className="how-step-number">2</span>
                <div>
                  <h4>Submit an Application</h4>
                  <p>
                    Complete the adoption form with
                    your details and preferences.
                  </p>
                </div>
              </div>

              <div className="how-step">
                <span className="how-step-number">3</span>
                <div>
                  <h4>Review & Meet</h4>
                  <p>
                    Our team reviews your application
                    and arranges a meeting.
                  </p>
                </div>
              </div>

              <div className="how-step">
                <span className="how-step-number">4</span>
                <div>
                  <h4>Welcome Your Pet Home</h4>
                  <p>
                    Once approved, complete the adoption
                    and begin your journey together.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/adopt" className="how-process-btn">
              Adoption →
            </Link>
          </div>

          {/* Release Process */}
          <div className="how-process-card">
            <div className="how-process-heading">
              <span className="how-process-label">02 / RELEASE</span>
              <h3>Pet Release Process</h3>
              <p>
                We help owners find a safe and caring
                environment for pets in need.
              </p>
            </div>

            <div className="how-steps">
              <div className="how-step">
                <span className="how-step-number">1</span>
                <div>
                  <h4>Contact Our Team</h4>
                  <p>
                    Reach out to discuss your situation
                    and the needs of your pet.
                  </p>
                </div>
              </div>

              <div className="how-step">
                <span className="how-step-number">2</span>
                <div>
                  <h4>Submit Pet Information</h4>
                  <p>
                    Fill out the release form with
                    your pet's health and behavior details.
                  </p>
                </div>
              </div>

              <div className="how-step">
                <span className="how-step-number">3</span>
                <div>
                  <h4>Pet Assessment</h4>
                  <p>
                    Our team evaluates the pet's needs
                    and discusses the next steps.
                  </p>
                </div>
              </div>

              <div className="how-step">
                <span className="how-step-number">4</span>
                <div>
                  <h4>Safe Handover</h4>
                  <p>
                    Arrange a suitable handover so your
                    pet can receive continued care.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/release" className="how-process-btn">
              Release →
            </Link>
          </div>

        </div>
      </section>



    </main>
  );
}

export default Home;