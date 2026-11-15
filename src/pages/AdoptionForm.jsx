import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { pets } from "../data/pets";
import "./AdoptionForm.css";

function AdoptionForm({ currentUser }) {
  const { petId } = useParams();
  const navigate = useNavigate();

  const pet = pets.find(
    (item) => String(item.id) === petId
  );

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: "",
    experience: "",
    date: "",
    time: "",
    reason: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!currentUser || !pet || pet.status !== "Available") {
      return;
    }

    // Frontend demo: save application locally
    const application = {
      id: Date.now(),
      petId: pet.id,
      petName: pet.name,
      applicantEmail: currentUser.email,
      ...formData,
      status: "Pending"
    };

    const applications = JSON.parse(
      localStorage.getItem("petHeavenApplications") || "[]"
    );

    applications.push(application);

    localStorage.setItem(
      "petHeavenApplications",
      JSON.stringify(applications)
    );

    setSubmitted(true);
  }

  // Pet not found
  if (!pet) {
    return (
      <main className="adoption-message">
        <h2>Pet Not Found</h2>
        <Link to="/adopt">Back to Adoption</Link>
      </main>
    );
  }

  // Require login
  if (!currentUser) {
    return (
      <main className="adoption-message">
        <h2>Login Required</h2>
        <p>Please login before applying to adopt a pet.</p>

        <button
          onClick={() =>
            navigate("/login", {
              state: { from: `/adopt/${pet.id}` }
            })
          }
        >
          Go to Login
        </button>
      </main>
    );
  }

  // Unavailable pet
  if (pet.status !== "Available") {
    return (
      <main className="adoption-message">
        <h2>Adoption Unavailable</h2>
        <p>
          {pet.name} is currently not available for adoption.
        </p>
        <Link to="/adopt">View Other Pets</Link>
      </main>
    );
  }

  // Success message
  if (submitted) {
    return (
      <main className="adoption-success">
        <div className="adoption-success-card">
          <div className="success-icon">✓</div>

          <h1>Application Submitted!</h1>

          <p>
            Thank you for your interest in adopting
            <strong> {pet.name}</strong>!
          </p>

          <p>
            Your adoption application has been
            successfully submitted. Our team will
            review your request and contact you
            regarding the next steps.
          </p>

          <Link to="/adopt" className="adoption-back-btn">
            Back to Adoption
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="adoption-form-page">

      <div className="adoption-form-heading">
        <span>PET ADOPTION</span>
        <h1>Adoption Application</h1>
        <p>
          You're one step closer to welcoming
          a new companion into your home.
        </p>
      </div>

      <div className="adoption-form-layout">

        {/* Left: Pet Details */}
        <section className="adoption-pet-card">
          <h2>Pet Details</h2>
          <p>Meet your future companion.</p>

          <img
            src={pet.image}
            alt={pet.name}
            className="adoption-pet-image"
          />

          <h3>{pet.name}</h3>

          <div className="adoption-pet-info">
            <div>
              <span>Type</span>
              <strong>{pet.type}</strong>
            </div>

            <div>
              <span>Breed</span>
              <strong>{pet.breed}</strong>
            </div>

            <div>
              <span>Age</span>
              <strong>{pet.age} years old</strong>
            </div>

            <div>
              <span>Gender</span>
              <strong>{pet.gender}</strong>
            </div>
          </div>

          <div className="adoption-pet-status">
            Available for Adoption
          </div>
        </section>

        {/* Right: Adoption Form */}
        <section className="adoption-application-card">
          <h2>Adoption Appointment Details</h2>
          <p>
            Please provide your information
            to arrange an adoption appointment.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="adoption-field">
              <label htmlFor="adopt-name">
                Full Name *
              </label>
              <input
                id="adopt-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="adoption-field">
              <label htmlFor="adopt-email">
                Email Address *
              </label>
              <input
                id="adopt-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="adoption-field">
              <label htmlFor="adopt-phone">
                Contact Number *
              </label>
              <input
                id="adopt-phone"
                type="tel"
                name="phone"
                placeholder="Enter your contact number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="adoption-field">
              <label htmlFor="adopt-experience">
                Prior Experience with Pets
              </label>
              <select
                id="adopt-experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes, I have owned pets</option>
                <option value="No">No, this is my first pet</option>
              </select>
            </div>

            <div className="adoption-date-row">
              <div className="adoption-field">
                <label htmlFor="adopt-date">
                  Appointment Date *
                </label>
                <input
                  id="adopt-date"
                  type="date"
                  name="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="adoption-field">
                <label htmlFor="adopt-time">
                  Appointment Time *
                </label>
                <select
                  id="adopt-time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            </div>

            <div className="adoption-field">
              <label htmlFor="adopt-reason">
                Reason for Adoption *
              </label>
              <textarea
                id="adopt-reason"
                name="reason"
                rows="5"
                placeholder="Tell us why you would like to adopt this pet..."
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="adoption-submit-btn"
            >
              Submit Adoption Application
            </button>

          </form>
        </section>

      </div>
    </main>
  );
}

export default AdoptionForm;