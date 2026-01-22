import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Parikshe?",
      answer: "Parikshe is a student-first e-learning platform built to support SSLC, PUC, and KCET exam preparation across Karnataka. Born out of years of grassroots experience by the educators at SIFF Scholars, Parikshe brings the power of expert teaching, curated resources, and consistent support to students via the Parikshe App."
    },
    {
      id: 2,
      question: "Is there doubt-solving or mentorship support available?",
      answer: "Yes. We offer doubt-solving and mentorship. Our Premium plans include 10 am to 10 pm doubt-solving support."
    },
    {
      id: 3,
      question: "What makes Parikshe different from tuition or coaching centers?",
      answer: "Parikshe brings the quality and results of expert coaching to students anywhere, anytime, without the high costs of tuition. It combines academic rigor with empathy, offering localized, relatable, and result-oriented learning."
    },
    {
      id: 4,
      question: "Which districts and cities is Parikshe currently active in?",
      answer: "Parikshe has a presence in 33 districts and 27 cities across Karnataka, reaching thousands of students through digital learning and field outreach."
    },
    {
      id: 5,
      question: "Is Parikshe free for students?",
      answer: "Parikshe provides free access for students through YouTube; some advanced features are a part of premium plans via the Parikshe app and Parikshe Website."
    },
    {
      id: 6,
      question: "What subjects are covered in Parikshe?",
      answer: "Parikshe covers all major subjects for SSLC, PUC (Science & Commerce), and KCET, including Physics, Chemistry, Maths, Biology, English, Kannada, Hindi, Social Science, Accountancy, Business Studies, Economics, and Computer Science."
    }
  ]

  return (
    <div className="home">
  
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Karnataka's Largest Learning Destination For SSLC, PUC & KCET</h1>
            <p className="hero-subtitle">
              At Parikshe we make the examination journey seamless, impactful, and focused on results!
            </p>
            <div className="hero-buttons">
              <Link to="/sslc" className="btn btn-primary">Learn SSLC</Link>
              <Link to="/sslc" className="btn btn-secondary">Learn PUC Science</Link>
              <Link to="/sslc" className="btn btn-secondary">Learn PUC commerce</Link>
            </div>
            <div className="stats">
              <div className="stat-item">
                <h3>1 Lakh+</h3>
                <p>Students</p>
              </div>
              <div className="stat-item">
                <h3>50K+</h3>
                <p>App Downloads</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Lectures</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>School collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="trust-section">
        <div className="container">
          <p className="trust-text">
            Trusted by over <strong>1 lakh+ subscribers</strong>, PARIKSHE is revolutionizing the exam prep process for every student in Karnataka
          </p>
        </div>
      </section>

      
      <section className="why-parikshe">
        <div className="container">
          <h2 className="section-title">Why PARIKSHE?</h2>
          <p className="section-subtitle">Because you deserve the best tools to succeed</p>
          <div className="features-grid">
            <div className="feature-card">
             
              <h3>Topic wise video Lectures</h3>
              <p>by experienced knowledgeable teachers</p>
            </div>
            <div className="feature-card">
              
              <h3>Simple, Effective Notes</h3>
              <p>made for quick understanding and retention</p>
            </div>
            <div className="feature-card">
              
              <h3>All Content Explained</h3>
              <p>in your language, your comfort</p>
            </div>
            <div className="feature-card">
              
              <h3>Complete Previous Year Question (PYQ) Coverage</h3>
              <p>for better exam readiness</p>
            </div>
            <div className="feature-card">
              
              <h3>Instantly Solving Doubts</h3>
              <p>through the PARIKSHE app</p>
            </div>
            <div className="feature-card">
              
              <h3>Live Revision Classes</h3>
              <p>before exams to boost your confidence</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="app-section">
        <div className="container">
          <h2 className="section-title">Parikshe App</h2>
          <p className="section-subtitle">Your One-Stop Solution for Karnataka's SSLC, PUC and KCET Preparation</p>
        </div>
      </section>

      
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">Stories of Success</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Parikshe helped me score 95% in SSLC. The video lectures and notes were extremely helpful!"
              </p>
              <p className="testimonial-author">- Student from Bangalore</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "The doubt-solving feature is amazing. I got instant help whenever I needed it."
              </p>
              <p className="testimonial-author">- Student from Mysore</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Best platform for PUC preparation. The teachers are experienced and explain concepts clearly."
              </p>
              <p className="testimonial-author">- Student from Hubli</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">FAQ</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
