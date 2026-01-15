import "./career.css"

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Growth Associate",
      location: "on-site",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Digital Marketing Associate",
      location: "on-site",
      type: "Full-time",
      
    }
  ]

  return (
    <div className="careers">
      <section className="careers-title">
        
          <h1>Join Us @ PARIKSHE & Make a Lasting Impact on Students’ Success!</h1>
          
    
      </section>

      <section className="careers-content">
        
        <div className="job-openings">
            <h2>Current Openings</h2>
            <div className="jobs-grid">
              {jobOpenings.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    
                  </div>
                  <div className="job-meta">
                    <span className="job-type">{job.type}</span>
                    <span className="job-location">{job.location}</span>
                  </div>
                 
                  <button className="apply-btn">Apply Now</button>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
