import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Release.css";

function Release({ currentUser }) {
  const navigate = useNavigate();

  const [petImage, setPetImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      alert("Please log in to release a pet.");

      navigate("/login", {
        replace: true,
        state: { from: "/release" }
      });
    }
  }, [currentUser, navigate]);

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5MB.");
      e.target.value = "";
      return;
    }

    setPetImage(file);
  }

  useEffect(() => {
    if (!petImage) {
      setPreview("");
      return;
    }

    const url = URL.createObjectURL(petImage);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [petImage]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!petImage) {
      alert("Please upload a pet photo.");
      return;
    }

    // Front-end demo only: no backend submission.
    setSubmitted(true);
  }

  if (!currentUser) {
    return null;
  }

  if (submitted) {
    return (
      <main className="release-page">
        <div className="release-success">
          <div className="success-icon">✓</div>
          <h2>Request Submitted Successfully!</h2>
          <p>
            Thank you for contacting Pet Heaven.
            Your release request has been completed
            in this demo.
          </p>

          <button onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="release-page">

      {/* Release Banner */}
      <section className="release-banner">
        <div className="release-banner-content">
          <span>PET RELEASE</span>

          <h1>Release a Pet</h1>

          <p>
            We understand that circumstances can change.
            Let us help you find a safe and caring place for your pet.
          </p>
        </div>
      </section>

      <form
        className="release-form"
        onSubmit={handleSubmit}
      >

        {/* LEFT: Pet Information */}
        <section className="release-card">
          <h2>Pet Information</h2>
          <p className="release-card-description">
            Tell us a little about your pet.
          </p>

          {/* Image Upload */}
          <div className="release-upload">
            {preview ? (
              <img
                src={preview}
                alt="Pet preview"
              />
            ) : (
              <div className="upload-placeholder">
                <span>🐾</span>
                <p>No image uploaded</p>
              </div>
            )}
          </div>

          <label
            htmlFor="pet-photo"
            className="upload-button"
          >
            Upload Pet Photo
          </label>

          <input
            id="pet-photo"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input"
          />

          <div className="release-fields">

            <div className="release-field">
              <label htmlFor="pet-name">
                Pet Name *
              </label>
              <input
                id="pet-name"
                type="text"
                name="petName"
                placeholder="Enter pet name"
                required
              />
            </div>

            <div className="release-field">
              <label htmlFor="pet-type">
                Pet Type *
              </label>
              <select
                id="pet-type"
                name="petType"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select pet type
                </option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>

            <div className="release-field">
              <label htmlFor="pet-breed">
                Pet Breed *
              </label>
              <input
                id="pet-breed"
                type="text"
                name="petBreed"
                placeholder="Enter pet breed"
                required
              />
            </div>

            <div className="release-field">
              <label htmlFor="pet-age">
                Pet Age (Years) *
              </label>
              <input
                id="pet-age"
                type="number"
                name="petAge"
                min="0"
                max="40"
                step="0.1"
                placeholder="Enter pet age"
                required
              />
            </div>

          </div>
        </section>

        {/* RIGHT: Appointment Details */}
        <section className="release-card">
          <h2>Release Appointment Details</h2>
          <p className="release-card-description">
            Provide your contact and appointment details.
          </p>

          <div className="release-fields">

            <div className="release-field">
              <label htmlFor="owner-name">
                Owner Name *
              </label>
              <input
                id="owner-name"
                type="text"
                name="ownerName"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="release-field">
              <label htmlFor="owner-email">
                Email Address *
              </label>
              <input
                id="owner-email"
                type="email"
                name="ownerEmail"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="release-field">
              <label htmlFor="owner-phone">
                Contact Number *
              </label>
              <input
                id="owner-phone"
                type="tel"
                name="ownerPhone"
                placeholder="Enter contact number"
                required
              />
            </div>

            <div className="release-date-time">

              <div className="release-field">
                <label htmlFor="meeting-date">
                  Meeting Date *
                </label>
                <input
                  id="meeting-date"
                  type="date"
                  name="meetingDate"
                  min={new Date().toLocaleDateString("en-CA")}
                  required
                />
              </div>

              <div className="release-field">
                <label htmlFor="meeting-time">
                  Meeting Time *
                </label>
                <select
                  id="meeting-time"
                  name="meetingTime"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>

            </div>

            <div className="release-field">
              <label htmlFor="release-reason">
                Reason for Releasing Pet *
              </label>
              <textarea
                id="release-reason"
                name="releaseReason"
                rows="6"
                placeholder="Please tell us why you need to release your pet..."
                required
              />
            </div>

            <button
              type="submit"
              className="release-submit"
            >
              Submit Release Request
            </button>

          </div>
        </section>

      </form>
    </main>
  );
}

export default Release;