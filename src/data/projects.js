export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'flagship', label: 'Flagship' },
  { id: 'web', label: 'Full-Stack Web' },
  { id: 'python', label: 'Python & Flask' },
  { id: 'academic', label: 'Academic Systems' },
];

export const projects = [
  {
    id: 'timetable-generator',
    title: 'Automatic Timetable Generator',
    featured: true,
    tagline: 'Automated constraint-based academic scheduling and resource management engine.',
    categories: ['flagship', 'web', 'python', 'academic'],
    description:
      'A full-stack academic timetable management application designed to simplify timetable creation and management while considering teacher availability, subjects, workload, and scheduling constraints.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLite'],
    features: [
      'Authentication & session management',
      'Role-based access (Admin, Staff, Student)',
      'Comprehensive Admin dashboard',
      'Teacher & faculty management',
      'Subject & curriculum management',
      'Teacher-subject dynamic mapping',
      'Teacher availability constraint tracking',
      'Automated conflict-free timetable generation',
      'Collision and overlap prevention algorithms',
      'Manual timetable adjustment & grid editor',
      'Student timetable viewing portal',
      'Fully responsive & adaptive interface',
    ],
    image: null,
    imageAlt: 'Automatic Timetable Generator preview and interface matrix',
    github: 'https://github.com/ramdeveloper2007',
    liveDemo: null,
    details: {
      overview:
        'A comprehensive full-stack academic timetable management application designed to automate complex scheduling workflows, enforce teacher availability constraints, and deliver interactive schedule views for administrators, faculty, and students.',
      problem:
        'Manual timetable generation in academic departments is tedious, error-prone, and inefficient. Scheduling classes requires satisfying strict multi-variable constraints: preventing room collisions, respecting teacher availability, ensuring subject credit limits, balancing faculty workload, and avoiding consecutive lecture fatigue.',
      solution:
        'Built a complete web application powered by Python and Flask with an SQLite relational database. Developed a constraint-satisfaction scheduling engine that systematically maps teacher-subject competencies, parses availability matrices, generates collision-free timetables, and provides a manual override grid editor for administrative adjustments.',
      architecture:
        'Layered MVC Architecture: Frontend presentation built with responsive HTML5, CSS3, and modern JavaScript; backend routing and business logic implemented via Python & Flask; persistent relational storage handled via SQLite with foreign key integrity and constraint validations.',
      contribution:
        'Architected and implemented the entire project end-to-end: database schema modeling, backend constraint algorithms, authentication & role-based middleware, and the responsive frontend UI with interactive schedule matrices.',
      challenges:
        'Designing a deterministic scheduling algorithm that reliably avoids room and faculty conflicts across overlapping class years while maintaining acceptable execution speed and providing immediate visual feedback on constraint violations.',
      futureImprovements:
        'Export to PDF and Excel formats, batch email notifications for timetable updates, AI-assisted room allocation optimization, and real-time faculty substitution suggestions.',
      results:
        'Successfully delivered a full-stack academic application that streamlines scheduling, reduces timetable generation time from days to seconds, and eliminates manual scheduling overlaps.',
    },
  },
  {
    id: 'attendance-tracker',
    title: 'Academic Attendance Tracking System',
    featured: false,
    tagline: 'Role-based attendance monitoring and automated academic reporting tool.',
    categories: ['web', 'python', 'academic'],
    description:
      'A Flask-based web application for recording daily student attendance and presenting student and faculty dashboards with automated percentage reporting and attendance alerts.',
    technologies: ['Python', 'Flask', 'HTML5', 'CSS3', 'JavaScript', 'SQLite'],
    features: [
      'Faculty daily attendance logger',
      'Student individual attendance portal',
      'Automated aggregate percentage calculation',
      'Low attendance threshold alerts',
      'Class-wise and subject-wise filtering',
      'Clean tabular reporting interface',
    ],
    image: null,
    imageAlt: 'Attendance Tracker application preview',
    github: 'https://github.com/ramdeveloper2007',
    liveDemo: null,
    details: {
      overview:
        'A structured web-based attendance management system built to digitize classroom record-keeping and provide immediate transparency to students regarding their attendance status.',
      problem:
        'Paper-based attendance logs cause delay in generating monthly eligibility reports, lead to transcription errors, and prevent students from tracking their attendance shortage in time.',
      solution:
        'Developed a lightweight Flask portal enabling faculty to record lecture attendance in seconds, automatically computing percentages per course and alerting students falling below attendance requirements.',
      architecture:
        'Flask backend serving RESTful endpoints and Jinja views, backed by relational SQLite tables for courses, students, faculty, and daily attendance logs.',
      contribution:
        'Full-stack design and development including database schema, business logic for aggregate statistics, and responsive dashboard views.',
      challenges:
        'Optimizing bulk attendance submissions for large student batches while maintaining relational consistency.',
      futureImprovements:
        'QR-code based attendance verification, biometric sync, and automated SMS/email alerts for parents.',
      results:
        'Created a fast, reliable academic tool that eliminates paper logs and provides instantaneous attendance statistics.',
    },
  },
  {
    id: 'emocare',
    title: 'Emocare — Digital Therapy Assistant',
    featured: false,
    tagline: 'Supportive emotional wellbeing companion with mood journaling and insights.',
    categories: ['web', 'python'],
    description:
      'An empathetic digital therapy companion web application designed to monitor mood patterns, journal daily emotions, and provide supportive insights and gentle reminders to foster wellbeing.',
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'SQLite'],
    features: [
      'Daily mood tracking and logging',
      'Private emotional journal with tag indexing',
      'Supportive motivational insights and tips',
      'Gentle mindfulness reminder triggers',
      'Visual mood trend analysis',
      'Calming, distraction-free user interface',
    ],
    image: null,
    imageAlt: 'Emocare Therapy Assistant project preview',
    github: 'https://github.com/ramdeveloper2007',
    liveDemo: null,
    details: {
      overview:
        'A mindful personal wellbeing application that helps users cultivate self-awareness through daily emotion tracking, reflective journaling, and gentle encouraging insights.',
      problem:
        'People frequently experience emotional stress without a safe, structured, and private outlet to reflect on triggers and observe long-term mood patterns.',
      solution:
        'Constructed a calming web application where users can log daily sentiments, tag emotional states, view historical trend patterns, and receive curated supportive reflections.',
      architecture:
        'Client-side responsive UI with soothing color palettes, supported by a Flask backend handling secure user journal storage and mood aggregation queries.',
      contribution:
        'Conceptualized, designed UI/UX, and coded the full-stack application.',
      challenges:
        'Crafting an interface that feels empathetic, safe, and calming rather than clinical or overwhelming.',
      futureImprovements:
        'Sentiment analysis on journal entries, guided breathing exercises, and end-to-end encryption for journals.',
      results:
        'Delivered a polished personal wellness project demonstrating full-stack development combined with empathetic user-centric UI design.',
    },
  },
  {
    id: 'study-buddy',
    title: 'Interactive Study Planner & Assistant',
    featured: false,
    tagline: 'Collaborative learning companion for session scheduling and practice questions.',
    categories: ['web'],
    description:
      'A web-based learning productivity assistant that helps students organize study sessions, generate topic practice questions, and clarify challenging concepts to accelerate mastery.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage API', 'Responsive UI'],
    features: [
      'Pomodoro-inspired study session planner',
      'Topic breakdown and milestone checklists',
      'Interactive flashcards and practice quizzes',
      'Progress metrics and completion tracking',
      'Instant client-side offline persistence',
    ],
    image: null,
    imageAlt: 'Study Buddy learning assistant preview',
    github: 'https://github.com/ramdeveloper2007',
    liveDemo: null,
    details: {
      overview:
        'An interactive web tool designed to boost student retention and structured study through focused work sessions, checklist tracking, and interactive practice assessments.',
      problem:
        'Self-directed learners frequently struggle with study fragmentation, lack of structured revision milestones, and passive reading habits.',
      solution:
        'Built a fast, zero-friction client-side web application incorporating active recall flashcards, practice question generation, and structured session timers.',
      architecture:
        'Modular vanilla JavaScript application leveraging modern DOM manipulation, Web Storage API for persistence, and CSS custom property theming.',
      contribution:
        'Designed interface layout, implemented state management, timer logic, and interactive quiz rendering.',
      challenges:
        'Maintaining a snappy, fluid user experience with pure client-side state without external heavy dependencies.',
      futureImprovements:
        'Integration with backend REST APIs for multi-device sync and shared study groups.',
      results:
        'Created a fast, distraction-free study tool used for daily academic revision.',
    },
  },
];
