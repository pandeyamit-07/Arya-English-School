import "../styles/WhyChooseUs.css";

const reasons = [
	{
		icon: "👨‍🏫",
		title: "Experienced Faculty",
		description:
			"Our team comprises highly qualified educators with 15+ years of experience in their respective fields.",
	},
	{
		icon: "📊",
		title: "Excellent Academic Results",
		description:
			"Consistent high pass rates and top rankings in board exams with 95%+ success rate.",
	},
	{
		icon: "⭐",
		title: "Strong Discipline & Values",
		description:
			"We instill discipline, integrity, and ethical values through structured programs and mentorship.",
	},
	{
		icon: "🏗️",
		title: "Modern Infrastructure",
		description:
			"State-of-the-art laboratories, computer labs, library, and sports facilities for holistic development.",
	},
];

function WhyChooseUs() {
	return (
		<section className="why-choose-section">
			<div className="why-choose-header">
				<h2>Why Choose Us?</h2>
				<p className="why-choose-subtitle">
					Excellence in Education & Character Building
				</p>
			</div>

			<div className="why-choose-grid">
				{reasons.map((reason, i) => (
					<div key={i} className="why-card">
						<div className="why-icon">{reason.icon}</div>
						<h3>{reason.title}</h3>
						<p>{reason.description}</p>
						<div className="why-card-accent"></div>
					</div>
				))}
			</div>

			<div className="why-choose-highlight">
				<p>
					At Arya English High School & Junior College, we are committed to
					providing a world-class education that combines academic excellence
					with character development. Our holistic approach ensures every student
					reaches their full potential.
				</p>
			</div>
		</section>
	);
}
export default WhyChooseUs;
