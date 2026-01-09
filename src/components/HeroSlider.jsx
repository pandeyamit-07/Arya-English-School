import { useEffect, useState } from "react";
import "../styles/HeroSlider.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&h=600&fit=crop",
    title: "School Campus",
    alt: "Beautiful school campus with modern architecture"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=600&fit=crop",
    title: "Modern Classrooms",
    alt: "Well-equipped modern classrooms with smart boards"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    title: "Student Activities",
    alt: "Students participating in various activities"
  }
];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      <div className="hero-slides-container">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide ${i === index ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="hero-slide-image"
            />
            <div className="hero-slide-overlay"></div>
            <div className="hero-slide-content">
              <h1>{slide.title}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`hero-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
