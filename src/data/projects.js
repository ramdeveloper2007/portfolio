export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Development' },
  { id: 'python', label: 'Python' },
  { id: 'java', label: 'Java' },
  { id: 'academic', label: 'Academic' },
  { id: 'personal', label: 'Personal' },
];

export const projects = [
  {
    id: 'timetable-generator',
    title: 'Automatic Timetable Generator',
    featured: true,
    categories: ['web', 'python', 'academic'],
    description:
      'A Flask and SQLite web application for managing academic scheduling data and generating timetables from defined subject, teacher, availability, and workload requirements.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLite'],
    features: [
      'Admin dashboard',
      'Teacher/staff management',
      'Student dashboard',
      'Subject management',
      'Teacher availability',
      'Timetable generation',
      'Conflict prevention',
      'Manual timetable editing',
      'Responsive interface',
    ],
    image: null,
    imageAlt: 'Automatic Timetable Generator project preview',
    github: null,
    liveDemo: null,
    details: {
      overview:
        'A full-stack web application that supports academic timetable creation through a structured management workflow.',
      problem:
        'Creating academic timetables manually is time-consuming and prone to conflicts — overlapping classes, unavailable teachers, and uneven workload distribution.',
      solution:
        'Built a Flask-backed application with admin, teacher/staff, and student views. It collects scheduling information, generates timetables, helps prevent conflicts, and supports manual timetable editing.',
      contribution:
        'Designed and developed the full application — backend logic, database schema, admin/teacher/student interfaces, and timetable generation algorithm.',
      challenges:
        'Handling teacher availability, subject requirements, and workload distribution while preventing conflicts and keeping the interface usable for academic staff.',
      results:
        'Delivered a working academic project that brings timetable management and generation into one structured web application.',
    },
  },
  {
    id: 'attendance-tracker',
    title: 'Attendance Tracking App',
    featured: false,
    categories: ['web', 'python', 'academic'],
    description:
      'A Flask-based web application for recording attendance and presenting student and faculty views with reporting support.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Attendance recording',
      'Attendance reporting',
      'Student dashboard',
      'Faculty dashboard',
    ],
    image: null,
    imageAlt: 'Attendance Tracking App project preview',
    github: null,
    liveDemo: null,
    details: {
      overview: 'A web-based attendance management system for academic institutions.',
      problem: 'Manual attendance tracking is inefficient and difficult to report on.',
      solution: 'Built a Flask application with dashboards for students and faculty with automated reporting.',
      contribution: 'Full-stack development of the application.',
      challenges: 'Designing an intuitive interface for daily attendance entry across multiple classes.',
      results: '[Add project results when available]',
    },
  },
  {
    id: 'emocare',
    title: 'Emocare — Therapy Assistant',
    featured: false,
    categories: ['web', 'python', 'personal'],
    description:
      'An empathetic therapy assistant to monitor mood, journal emotions, and provide supportive insights and reminders to improve wellbeing.',
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS'],
    features: ['Mood monitoring', 'Emotion journaling', 'Supportive insights', 'Reminder system'],
    image: null,
    imageAlt: 'Emocare Therapy Assistant project preview',
    github: null,
    liveDemo: null,
    details: {
      overview: 'A personal wellness application focused on mood tracking and emotional journaling.',
      problem: 'People often lack structured tools to track and reflect on their emotional wellbeing.',
      solution: 'Created a Flask web app with mood logging, journaling, and gentle reminder features.',
      contribution: 'Designed and built the full application.',
      challenges: 'Creating a supportive UX that feels empathetic rather than clinical.',
      results: '[Add project results when available]',
    },
  },
  {
    id: 'study-buddy',
    title: 'AI-Collaborative Study Buddy',
    featured: false,
    categories: ['web', 'personal'],
    description:
      'An AI-powered study assistant that helps plan study sessions, generate practice questions, and provide explanations to boost learning.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    features: ['Study session planning', 'Practice question generation', 'Learning explanations'],
    image: null,
    imageAlt: 'AI Study Buddy project preview',
    github: null,
    liveDemo: null,
    details: {
      overview: 'A study assistant tool to help organize learning sessions and practice.',
      problem: 'Students need structured ways to plan study sessions and test their understanding.',
      solution: 'Built a web application with session planning and practice question features.',
      contribution: 'Frontend development and application logic.',
      challenges: 'Integrating AI features while keeping the interface simple and focused.',
      results: '[Add project results when available]',
    },
  },
];
