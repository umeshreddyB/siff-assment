

const mockCourses = [
  {
    id: 1,
    title: 'Foundation Course Batch (25-26)',
    description: 'Comprehensive foundation course for SSLC preparation',
    subject: 'All Subjects',
   
    videoUrl:'https://www.youtube.com/embed/HxKMK6P9aIA'
  },
  {
    id: 2,
    title: 'Career Guidance Batch (25-26)',
    description: 'Expert guidance for career planning and exam preparation',
    subject: 'Career Counseling',
  
    videoUrl: 'https://www.youtube.com/embed/ADUzlPbQY60',
  },
  {
    id: 3,
    title: 'Headstart Batch (25-26)',
    description: 'Get ahead with early preparation and advanced concepts',
    subject: 'All Subjects',
   
    videoUrl: 'https://www.youtube.com/embed/dKgwFx05Cwc',
  },
  {
    id: 4,
    title: 'Social Science Foundation Course',
    description: 'Master Social Science with topper tricks and strategies',
    subject: 'Social Science',
   
    videoUrl: 'https://www.youtube.com/embed/WgruaZhQ63Q',
  },
  {
    id: 5,
    title: 'Kannada Grammar Masterclass',
    description: 'Unlock Kannada Grammar: ವ್ಯಾಕರಣ – ಪದ ರಚನೆ',
    subject: 'Kannada',
  
    videoUrl: 'https://www.youtube.com/embed/8Yiey1FvdX4',
  },
  {
    id: 6,
    title: 'English Grammar Foundation',
    description: 'Master Articles, Prepositions & Tags',
    subject: 'English',
   
    videoUrl: 'https://www.youtube.com/embed/wsQFX5KyUbM',
  },
  {
    id: 7,
    title: 'Mathematics Foundation',
    description: 'Class 10 Math Foundation with expert guidance',
    subject: 'Mathematics',
    
    videoUrl: 'https://www.youtube.com/embed/uWy665MxeOI',
  },
  {
    id: 8,
    title: 'Science Chemistry Essentials',
    description: 'Class 10 Science: Chemistry Essentials',
    subject: 'Chemistry',
   
    videoUrl: 'https://www.youtube.com/embed/2vGD5QU72tU',
  },
]


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))


export const courseAPI = {
  
  getAllCourses: async () => {
    try {
      await delay(500) 
      
      return {
        data: mockCourses,
        status: 200,
      }
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Failed to fetch courses',
        status: error.response?.status || 500,
      }
    }
  },
}


export const contactAPI = {
  submitContact: async (formData) => {
    try {
      await delay(500)
      
      console.log('Contact form submitted:', formData)
      return {
        data: { message: 'Thank you for contacting us! We will get back to you soon.' },
        status: 200,
      }
    } catch (error) {
      throw {
        message: error.response?.data?.message || 'Failed to submit contact form',
        status: error.response?.status || 500,
      }
    }
  },
}


