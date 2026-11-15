import { useState } from "react";
import { Link } from "react-router-dom";
import { pets } from "../data/pets";
import "./Adopt.css";

function Adopt() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredPets = pets.filter((pet) => {
    const matchType =
      typeFilter === "All" || pet.type === typeFilter;

    const matchStatus =
      statusFilter === "All" || pet.status === statusFilter;

    return matchType && matchStatus;
  });

  return (
    <main className="adopt-page">
      <section className="adopt-banner">
        <span>MEET OUR COMPANIONS</span>
        <h1>Find Your Perfect Match</h1>
        <p>
          Every pet has a unique personality and story.
          Discover the one who belongs in your family.
        </p>
      </section>

      <section className="adopt-list-section">
        <div className="adopt-filters">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="All">All Pets</option>
            <option value="Cat">Cats</option>
            <option value="Dog">Dogs</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Available">Available</option>
            <option value="In Foster">In Foster</option>
            <option value="Adopted">Adopted</option>
          </select>
        </div>

        <div className="adopt-pets-grid">    
          {filteredPets.map((pet) => (
            <article className="pet-card" key={pet.id}>

              <div className="pet-card-image">
                <img src={pet.image} alt={pet.name} />

                <span
                  className={`pet-status ${
                    pet.status.toLowerCase().replace(/\s+/g, "-")
                  }`}
                >
                  {pet.status}
                </span>
              </div>

              <div className="pet-card-content">

                <div className="pet-card-heading">
                  <h3>{pet.name}</h3>
                  <span className="pet-breed">
                    {pet.breed}
                  </span>
                </div>

                <p className="pet-description">
                  {pet.description}
                </p>

                <div className="pet-card-meta">
                  <span>{pet.age} years old</span>
                  <span>{pet.gender}</span>
                </div>

                <Link
                  to={`/pets/${pet.id}`}
                  className="pet-details-btn"
                >
                  View Details
                </Link>

              </div>
            </article>
          ))}

        </div>

        {filteredPets.length === 0 && (
          <p className="adopt-empty">
            No pets found for the selected filters.
          </p>
        )}
      </section>
    </main>
  );
}

export default Adopt;