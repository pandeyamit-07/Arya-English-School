import "../styles/Activities.css";

const activitiesData = [
  {
    id: 1,
    title: "PRACTICALS",
    description: "Hands-on practical learning with modern laboratory equipment and experienced instructors. Students gain real-world experience in science, computer labs, and technical skills. Our state-of-the-art facilities ensure every student gets quality hands-on training in physics, chemistry, and biology.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=1000&fit=crop",
    imagePosition: "left"
  },
  {
    id: 2,
    title: "SPORTS",
    description: "Physical and mental development through various sports activities. We encourage participation in indoor and outdoor games to build teamwork and leadership skills. Our trained coaches help students excel in cricket, badminton, basketball, volleyball, and athletics.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=1000&fit=crop",
    imagePosition: "right"
  },
  {
    id: 3,
    title: "EDUCATIONAL TRIPS",
    description: "Learning beyond classrooms through educational excursions to historical sites, museums, and nature reserves. These trips enhance knowledge practically and create lasting memories. Students explore biodiversity, historical monuments, and cultural heritage while building social connections.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&h=1000&fit=crop",
    imagePosition: "left"
  },
  {
    id: 4,
    title: "ANNUAL FUNCTION",
    description: "Cultural and creative events celebrating student talent across all grades. Our annual function is a grand platform where students showcase their creativity through drama, music, dance, and art performances. It celebrates achievements and provides opportunities for self-expression.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1000&fit=crop",
    imagePosition: "right"
  }
];

function Activities() {
  return (
    <section className="activities-section">
      <h2 className="section-title">Our Activities</h2>

      <div className="activities-flow">
        {activitiesData.map((activity, index) => (
          <div key={activity.id} className="activity-step">
            <div
              className={`activity-content ${
                activity.imagePosition === "left" ? "image-left" : "image-right"
              }`}
            >
              {activity.imagePosition === "left" && (
                <div className="activity-image-wrapper">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="activity-image"
                  />
                </div>
              )}

              <div className="activity-text-wrapper">
                <h3 className="activity-title">{activity.title}</h3>
                <p className="activity-description">{activity.description}</p>
              </div>

              {activity.imagePosition === "right" && (
                <div className="activity-image-wrapper">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="activity-image"
                  />
                </div>
              )}
            </div>

            {index < activitiesData.length - 1 && (
              <div className="activity-connector"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
