import "./about.css"

const About = () => {
  return (
    <div className="about">
      <section className="about-teacher">
        <div className="container">
          <h1>About Parikshe</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Parikshe is a student-first e-learning platform built to support SSLC, PUC, and KCET exam preparation across Karnataka. Born out of years of grassroots experience by the educators at SIFF Scholars, Parikshe brings the power of expert teaching, curated resources, and consistent support to students via the Parikshe App.
            </p>
          </div>

          <div className="about-section">
            <h2>What Makes Us Different</h2>
            <p>
              Parikshe brings the quality and results of expert coaching to students anywhere, anytime, without the high costs of tuition. It combines academic rigor with empathy, offering localized, relatable, and result-oriented learning.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Reach</h2>
            <p>
              Parikshe has a presence in 33 districts and 27 cities across Karnataka, reaching thousands of students through digital learning and field outreach. We are trusted by over 1 lakh+ subscribers who are revolutionizing their exam prep process.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
