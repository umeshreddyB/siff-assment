import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { courseAPI } from '../../services/api'
import CourseCard from '../../components/CourseCard/courseCard'
import Loader from '../../components/Loader/loader'
import './sslc.css'

const SSLC = () => {
  const navigate = useNavigate()

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchAllCourses()
  }, [])

  const fetchAllCourses = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await courseAPI.getAllCourses()
      setCourses(response.data)
    } catch (err) {
      setError(err.message || 'Failed to load courses.')
    } finally {
      setLoading(false)
    }
  }

  const handleCourseClick = (courseId) => {
    navigate(`/sslc/${courseId}`)
  }

  if (loading) {
    return (
      <div className="sslc">
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className="sslc">
        <div className="container error-container">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={fetchAllCourses} className="btn-primary">
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="sslc">
      <section className="sslc-hero">
        <div className="container">
          <h1>SSLC Study</h1>
          <p className="hero-description">
            Continue your learning with our SSLC courses
          </p>
        </div>
      </section>

      <section className="sslc-content">
        <div className="container">
          <div className="courses-header">
            <h2>Available Courses</h2>
            <p>Choose a course to start learning</p>
          </div>

          {courses.length === 0 ? (
            <p>No courses available.</p>
          ) : (
            <div className="courses-grid">
              {courses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => handleCourseClick(course.id)}
                />
              ))}
            </div>
          )}

          <section className="teachers-section">
            <h2>Meet Your Teachers</h2>
            <div className="teachers-grid">
              <div className="teacher-card">
                
                 <img className="teacher-avatar" src="https://www.emojiall.com/images/240/microsoft/1f9d1-200d-1f3eb.png" alt="Vani Ma am" />
                <h3>Karthik Sir</h3>
                <p>Mathematics</p>
              </div>
              <div className="teacher-card">
                 <img className="teacher-avatar" src="https://www.emojiall.com/images/240/microsoft/1f9d1-200d-1f3eb.png" alt="Vani Ma am" />
                <h3>Harshitha Ma'am</h3>
                <p>Chemistry</p>
              </div>
              <div className="teacher-card">
               
                <img className="teacher-avatar" src="https://www.emojiall.com/images/240/microsoft/1f9d1-200d-1f3eb.png" alt="Vani Ma am" />
                <h3>Vani Ma'am</h3>
                <p>Kannada Grammar</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default SSLC
