import { useState } from "react";
import "../styles/Gallery.css";
import Header from "./Header";
import Footer from "./Footer";

const galleryData = {
  practical: {
    title: "PRACTICALS",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
        description: "Students conducting chemistry experiments in our modern laboratory with advanced equipment."
      },
      {
        url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
        description: "Physics practical session where students learn through hands-on experimentation and observation."
      },
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        description: "Computer lab sessions where students develop coding skills and technical expertise."
      },
      {
        url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
        description: "Biology practical classes featuring microscopes and specimen analysis for better understanding."
      }
    ]
  },
  trips: {
    title: "EDUCATIONAL TRIPS",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=600&fit=crop",
        description: "Students exploring historical monuments and learning about our rich cultural heritage."
      },
      {
        url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        description: "Educational visit to science museum where students engage with interactive exhibits and demonstrations."
      },
      {
        url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop",
        description: "Nature reserve trips where students study biodiversity and environmental conservation firsthand."
      },
      {
        url: "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?w=800&h=600&fit=crop",
        description: "Industrial visits providing real-world insights into modern technology and manufacturing processes."
      }
    ]
  },
  sports: {
    title: "SPORTS",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
        description: "Cricket matches showcasing teamwork, strategy, and sportsmanship among our students."
      },
      {
        url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop",
        description: "Basketball tournaments promoting physical fitness and competitive spirit in our school."
      },
      {
        url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
        description: "Athletics competitions encouraging students to excel in track and field events."
      },
      {
        url: "https://images.unsplash.com/photo-1600494603989-9650cf6cf3eb?w=800&h=600&fit=crop",
        description: "Football matches building leadership skills and fostering a sense of camaraderie among players."
      }
    ]
  },
  annual: {
    title: "ANNUAL FUNCTION",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        description: "Grand annual day celebration featuring spectacular dance performances by talented students."
      },
      {
        url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
        description: "Musical performances showcasing vocal and instrumental talents of our students on stage."
      },
      {
        url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
        description: "Drama and theatrical performances highlighting creativity and dramatic expression skills."
      },
      {
        url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
        description: "Award ceremony recognizing academic achievements and outstanding contributions of students."
      }
    ]
  }
};

function Gallery() {
  const [activeSection, setActiveSection] = useState("practical");

  const sections = [
    { id: "practical", label: "Practical" },
    { id: "trips", label: "Trips" },
    { id: "sports", label: "Sports" },
    { id: "annual", label: "Annual" }
  ];

  const currentData = galleryData[activeSection];

  return (
    <div className="gallery-page">
      <Header />
      <section className="gallery-section">
        <h1 className="gallery-title">School Gallery</h1>
        
        <div className="gallery-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`gallery-nav-btn ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="gallery-content">
          <h2 className="section-title">{currentData.title}</h2>
          <div className="gallery-grid">
            {currentData.images.map((item, index) => (
              <div key={index} className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img
                    src={item.url}
                    alt={currentData.title}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-card-content">
                  <p className="gallery-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Gallery;

