import { Link, useParams, useNavigate } from "react-router-dom";
import { pets } from "../data/pets";
import "./PetDetails.css";

function PetDetails({ currentUser }) {
  const { petId } = useParams();
  const navigate = useNavigate();

  // 根据 URL 的 id 查找对应宠物
  const pet = pets.find(
    (item) => String(item.id) === petId
  );

  // 找不到宠物时
  if (!pet) {
    return (
      <main className="pet-not-found">
        <h2>Pet Not Found</h2>
        <p>Sorry, we couldn't find this pet.</p>
        <Link to="/adopt">Back to Adoption</Link>
      </main>
    );
  }

  // 点击 Adopt Now
  function handleAdopt() {
    if (!currentUser) {
      alert("Please login before applying for adoption.");

      navigate("/login", {
        state: {
          from: `/adopt/${pet.id}`
        }
      });

      return;
    }

    navigate(`/adopt/${pet.id}`);
  }

  const canAdopt = pet.status === "Available";

  return (
    <main className="pet-detail-page">

      {/* 顶部导航 */}
      <div className="pet-detail-top">
        <Link to="/adopt" className="pet-back-link">
          ← Back to Adoption
        </Link>

        <span className="pet-detail-label">
          MEET OUR LOVELY COMPANIONS
        </span>
      </div>

      <div className="pet-detail-layout">

        {/* 左边：宠物照片与基本信息 */}
        <div className="pet-detail-left">

          <div className="pet-detail-photo">
            <img src={pet.image} alt={pet.name} />

            <span
              className={`detail-status ${
                pet.status.toLowerCase().replace(/\s+/g, "-")
              }`}
            >
              {pet.status}
            </span>
          </div>

          <div className="pet-detail-info">
            <h2>{pet.name}</h2>

            <div className="pet-info-grid">
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
          </div>

        </div>

        {/* 右边：详细介绍 */}
        <div className="pet-detail-right">

          <span className="pet-detail-tag">
            GET TO KNOW ME
          </span>

          <h1>Meet {pet.name}</h1>

          <p className="pet-detail-intro">
            {pet.description}
          </p>

          <div className="pet-story-section">
            <h3>My Story</h3>
            <p>{pet.story}</p>
          </div>

          <div className="pet-personality-section">
            <h3>My Personality</h3>
            <p>{pet.personality}</p>
          </div>

          <div className="pet-adoption-section">
            <h3>Ready to Give {pet.name} a Home?</h3>

            <p>
              Every pet deserves a loving family.
              Take the first step towards welcoming
              a new companion into your life.
            </p>

            <button
              type="button"
              className="pet-adopt-btn"
              onClick={handleAdopt}
              disabled={!canAdopt}
            >
              {pet.status === "Adopted"
                ? "Already Adopted"
                : pet.status === "In Foster"
                ? "Currently In Foster"
                : `Adopt ${pet.name}`}
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}

export default PetDetails;