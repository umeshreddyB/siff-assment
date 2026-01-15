import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { courseAPI } from '../../services/api'
import CourseCard from '../../components/CourseCard/courseCard'
import Loader from '../../components/Loader/loader'
import "./sslc.css"

const SSLC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (id) {
      fetchCourseById(id)
    } else {
      fetchAllCourses()
    }
  }, [id])

  const fetchAllCourses = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await courseAPI.getAllCourses()
      setCourses(response.data)
    } catch (err) {
      setError(err.message || 'Failed to load courses. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const fetchCourseById = async (courseId) => {
    setLoading(true)
    setError('')
    try {
      const response = await courseAPI.getCourseById(courseId)
      setCourse(response.data)
    } catch (err) {
      setError(err.message || 'Course not found.')
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
        <div className="container">
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <button onClick={() => navigate('/sslc')} className="btn-primary">
              Back to Courses
            </button>
          </div>
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
            Continue Your Learning Journey with our comprehensive SSLC courses
          </p>
        </div>
      </section>

      <section className="sslc-content">
        <div className="container">
          <div className="courses-header">
            <h2>Available Courses</h2>
            <p>Choose from our wide range of SSLC preparation courses</p>
          </div>

          {courses.length === 0 ? (
            <div className="no-courses">
              <p>No courses available at the moment. Please check back later.</p>
            </div>
          ) : (
            <div className="courses-grid">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onClick={() => handleCourseClick(course.id)}
                />
              ))}
            </div>
          )}

          <section className="teachers-section">
            <h2>Meet your SSLC Teachers</h2>
            <p className="section-subtitle">Learn from experienced and knowledgeable teachers</p>
            <div className="teachers-grid">
              <div className="teacher-card">
                <div className="teacher-avatar">👨‍🏫</div>
                <h3>Karthik Sir</h3>
                <p>Mathematics Expert</p>
              </div>
              <div className="teacher-card">
                <div className="teacher-avatar">👩‍🏫</div>
                <h3>Harshitha Ma'am</h3>
                <p>Chemistry Expert</p>
              </div>
              <div className="teacher-card">
                <div className="teacher-avatar">👩‍🏫</div>
                <h3>Vani Ma'am</h3>
                <p>Kannada Grammar Expert</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default SSLC
