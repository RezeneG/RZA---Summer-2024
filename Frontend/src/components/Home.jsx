export default function Home() {
  const safariHero =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80";

  const wildlife =
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80";

  const hotel =
    "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=900&q=80";

  return (
    <div className="home">
      
      {/* Hero Section */}
      <div className="hero">
        <img src={safariHero} alt="Safari Adventure" className="hero-img" />
        <div className="hero-text">
          <h2>Experience the Wild at Riget Zoo Adventures</h2>
          <p>Safari tours • Luxury Hotel • Educational Visits</p>
        </div>
      </div>

      {/* Wildlife Section */}
      <div className="section">
        <img src={wildlife} alt="Wildlife Safari" className="section-img" />
        <div className="section-text">
          <h3>Safari Wildlife Experience</h3>
          <p>
            Get up close with incredible animals in our safari-style zoo.
            Perfect for families, schools, and wildlife lovers.
          </p>
        </div>
      </div>

      {/* Hotel Section */}
      <div className="section reverse">
        <img src={hotel} alt="Safari Lodge Hotel" className="section-img" />
        <div className="section-text">
          <h3>Stay at Our Safari Lodge</h3>
          <p>
            Enjoy luxury accommodation right next to the wildlife adventure.
            Book your stay and extend your experience.
          </p>
        </div>
      </div>
    </div>
  );
}