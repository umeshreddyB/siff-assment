import "./courseCard.css"

const CourseCard = ({ course, onClick }) => {
  return (
    <div className="course-card" onClick={onClick}>
      <div className="course-image">
       <iframe
                    src={course.videoUrl}
                    title={course.title}
                    allowFullScreen
                    />
      </div>
      <div className="course-content">
        <h3>{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <div className="course-meta">
          <span className="course-subject">{course.subject}</span>
          <span className="course-duration">{course.duration}</span>
        </div>
        <div className="course-footer">
          <span className="course-price">{course.price}</span>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
