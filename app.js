// ============================================
// Rajib Gandhi Academy WEBSITE - MAIN APP.JS
// All Data & Functions in One File
// ============================================

// ============================================
// DATA SECTION - All Static Data
// ============================================

const SCHOOL_DATA = {
  // Students Data
  students: [
    { roll_no: 101, name: "Amit Kumar", class: "9", section: "A" },
    { roll_no: 102, name: "Neha Sharma", class: "10", section: "B" },
    { roll_no: 103, name: "Rahul Verma", class: "9", section: "A" },
    { roll_no: 104, name: "Priya Singh", class: "11", section: "A" },
    { roll_no: 105, name: "Vijay Patel", class: "12", section: "B" },
    { roll_no: 106, name: "Anjali Gupta", class: "10", section: "A" },
    { roll_no: 107, name: "Rohan Das", class: "9", section: "B" },
    { roll_no: 108, name: "Kavita Reddy", class: "11", section: "B" },
    { roll_no: 109, name: "Suresh Kumar", class: "12", section: "A" },
    { roll_no: 110, name: "Meera Joshi", class: "10", section: "B" },
    { roll_no: 111, name: "Arjun Mehta", class: "11", section: "A" },
    { roll_no: 112, name: "Sonia Kapoor", class: "12", section: "B" }
  ],

  // Notes Data
  notes: [
    { id: 1, title: "Mathematics - Algebra Basics", subject: "Mathematics", class: "9", uploaded_by: "Mr. Sharma", date: "2024-10-15" },
    { id: 2, title: "Science - Physics Motion", subject: "Science", class: "9", uploaded_by: "Ms. Verma", date: "2024-10-18" },
    { id: 3, title: "English - Grammar Rules", subject: "English", class: "10", uploaded_by: "Mrs. Gupta", date: "2024-10-20" },
    { id: 4, title: "Mathematics - Trigonometry", subject: "Mathematics", class: "10", uploaded_by: "Mr. Sharma", date: "2024-10-22" },
    { id: 5, title: "Chemistry - Periodic Table", subject: "Chemistry", class: "11", uploaded_by: "Dr. Patel", date: "2024-10-25" },
    { id: 6, title: "Physics - Mechanics", subject: "Physics", class: "11", uploaded_by: "Mr. Singh", date: "2024-10-28" },
    { id: 7, title: "Biology - Cell Structure", subject: "Biology", class: "11", uploaded_by: "Ms. Das", date: "2024-10-30" },
    { id: 8, title: "Mathematics - Calculus", subject: "Mathematics", class: "12", uploaded_by: "Mr. Sharma", date: "2024-11-01" },
    { id: 9, title: "Accounts - Balance Sheet", subject: "Accounts", class: "12", uploaded_by: "Mrs. Reddy", date: "2024-10-27" },
    { id: 10, title: "History - World War II", subject: "History", class: "10", uploaded_by: "Mr. Joshi", date: "2024-10-19" }
  ],

  // Classes Data
  classes: [
    {
      class: "9",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi", "Computer Science"],
      teachers: ["Mr. Sharma", "Ms. Verma", "Mrs. Gupta", "Mr. Joshi", "Ms. Kumari", "Mr. Roy"],
      sample_papers: ["Sample Paper 1", "Sample Paper 2"]
    },
    {
      class: "10",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi", "Computer Science"],
      teachers: ["Mr. Sharma", "Ms. Verma", "Mrs. Gupta", "Mr. Joshi", "Ms. Kumari", "Mr. Roy"],
      sample_papers: ["Sample Paper 1", "Sample Paper 2", "Sample Paper 3"]
    },
    {
      class: "11",
      stream: "Science",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Computer Science"],
      teachers: ["Mr. Singh", "Dr. Patel", "Ms. Das", "Mr. Sharma", "Mrs. Gupta", "Mr. Roy"],
      sample_papers: ["Sample Paper 1", "Sample Paper 2"]
    },
    {
      class: "11",
      stream: "Commerce",
      subjects: ["Accounts", "Business Studies", "Economics", "Mathematics", "English"],
      teachers: ["Mrs. Reddy", "Mr. Kapoor", "Ms. Bansal", "Mr. Sharma", "Mrs. Gupta"],
      sample_papers: ["Sample Paper 1", "Sample Paper 2"]
    },
    {
      class: "11",
      stream: "Arts",
      subjects: ["History", "Geography", "Political Science", "English", "Hindi Literature"],
      teachers: ["Mr. Joshi", "Ms. Nair", "Mr. Khan", "Mrs. Gupta", "Ms. Kumari"],
      sample_papers: ["Sample Paper 1", "Sample Paper 2"]
    },
    {
      class: "12",
      stream: "Science",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English"],
      teachers: ["Mr. Singh", "Dr. Patel", "Ms. Das", "Mr. Sharma", "Mrs. Gupta"],
      sample_papers: ["Sample Paper 1", "Sample Paper 2", "Sample Paper 3"]
    },
    {
      class: "12",
      stream: "Commerce",
      subjects: ["Accounts", "Business Studies", "Economics", "Mathematics", "English"],
      teachers: ["Mrs. Reddy", "Mr. Kapoor", "Ms. Bansal", "Mr. Sharma", "Mrs. Gupta"],
      sample_papers: ["Sample Paper 1", "Sample Paper 2", "Sample Paper 3"]
    },
    {
      class: "12",
      stream: "Arts",
      subjects: ["History", "Geography", "Political Science", "English", "Hindi Literature"],
      teachers: ["Mr. Joshi", "Ms. Nair", "Mr. Khan", "Mrs. Gupta", "Ms. Kumari"],
      sample_papers: ["Sample Paper 1", "Sample Paper 2", "Sample Paper 3"]
    }
  ],

  // Events Data
  events: [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "2024-11-15",
      type: "upcoming",
      short_desc: "Join us for our annual sports day featuring various athletic competitions.",
      full_desc: "Our Annual Sports Day will feature track and field events, relay races, football, basketball, and many more exciting competitions. All students are encouraged to participate. Parents and guardians are invited to attend and cheer for their children."
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "2024-11-22",
      type: "upcoming",
      short_desc: "Students will showcase innovative science projects and experiments.",
      full_desc: "The Science Exhibition will display creative projects from students of all classes. Topics include physics demonstrations, chemistry experiments, biology models, and environmental science projects. Special judges from local universities will evaluate the projects."
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "2024-12-05",
      type: "upcoming",
      short_desc: "Celebrate diversity with music, dance, and drama performances.",
      full_desc: "Our Cultural Festival is a vibrant celebration of arts and culture. Students will perform traditional dances, modern music, theatrical plays, and showcase art exhibitions. It's a wonderful opportunity to appreciate the diverse talents of our students."
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: "2024-10-28",
      type: "past",
      short_desc: "Discussion of student progress and academic performance.",
      full_desc: "The Parent-Teacher Meeting was held successfully with high attendance. Teachers discussed individual student progress, areas of improvement, and strategies for better academic performance. Parents provided valuable feedback."
    },
    {
      id: 5,
      title: "Independence Day Celebration",
      date: "2024-08-15",
      type: "past",
      short_desc: "Celebrated India's Independence Day with patriotic fervor.",
      full_desc: "The Independence Day celebration began with flag hoisting by our Principal, followed by patriotic songs, speeches, and cultural programs. Students performed skits depicting India's freedom struggle."
    },
    {
      id: 6,
      title: "Annual Prize Distribution",
      date: "2024-12-20",
      type: "upcoming",
      short_desc: "Recognition of outstanding academic and extracurricular achievements.",
      full_desc: "The Annual Prize Distribution ceremony will honor students who have excelled in academics, sports, arts, and other extracurricular activities. Chief Guest will be a distinguished alumnus of our school."
    }
  ]
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format Date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Debounce Function
function debounce(func, delay = 300) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Show Alert Message
function showAlert(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} active`;
  alertDiv.textContent = message;
  
  const container = document.querySelector('.container');
  if (container) {
    container.insertBefore(alertDiv, container.firstChild);
    setTimeout(() => {
      alertDiv.classList.remove('active');
      setTimeout(() => alertDiv.remove(), 300);
    }, 5000);
  }
}

// ============================================
// NAVIGATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Set active nav link
  setActiveNavLink();

  // Initialize page-specific content
  const currentPage = getCurrentPage();
  
  if (currentPage === 'index.html' || currentPage === '') {
    initHomePage();
  } else if (currentPage === 'classes.html') {
    initClassesPage();
  } else if (currentPage === 'notes.html') {
    initNotesPage();
  } else if (currentPage === 'students.html') {
    initStudentsPage();
  } else if (currentPage === 'events.html') {
    initEventsPage();
  } else if (currentPage === 'admissions.html') {
    initAdmissionsPage();
  } else if (currentPage === 'contact.html') {
    initContactPage();
  }
});

function getCurrentPage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

function setActiveNavLink() {
  const currentPage = getCurrentPage();
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ============================================
// HOME PAGE
// ============================================

function initHomePage() {
  loadLatestEvents();
}

function loadLatestEvents() {
  const noticeBoard = document.getElementById('noticeBoard');
  if (!noticeBoard) return;

  const upcomingEvents = SCHOOL_DATA.events
    .filter(event => event.type === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  if (upcomingEvents.length === 0) {
    noticeBoard.innerHTML = '<p style="color: var(--light-text);">No upcoming events at the moment.</p>';
    return;
  }

  noticeBoard.innerHTML = upcomingEvents.map(event => `
    <div class="notice-item">
      <h4>${event.title}</h4>
      <p class="notice-date">📅 ${formatDate(event.date)}</p>
      <p>${event.short_desc}</p>
      <a href="events.html" class="btn btn-primary" style="margin-top: 0.5rem; padding: 0.5rem 1rem; font-size: 0.9rem;">View All Events →</a>
    </div>
  `).join('');
}

// ============================================
// CLASSES PAGE
// ============================================

function initClassesPage() {
  displayClasses(SCHOOL_DATA.classes);
  setupClassFilters();
}

function displayClasses(classes) {
  const container = document.getElementById('classesContainer');
  if (!container) return;

  if (classes.length === 0) {
    container.innerHTML = '<p style="color: var(--light-text); text-align: center;">No classes found.</p>';
    return;
  }

  const class9_10 = classes.filter(c => c.class === '9' || c.class === '10');
  const class11_12 = classes.filter(c => c.class === '11' || c.class === '12');

  let html = '';

  if (class9_10.length > 0) {
    html += '<h2 class="section-title">Classes 9-10</h2><div class="cards-grid">';
    class9_10.forEach(classData => html += createClassCard(classData));
    html += '</div>';
  }

  if (class11_12.length > 0) {
    html += '<h2 class="section-title" style="margin-top: 3rem;">Classes 11-12</h2>';
    const streams = {};
    class11_12.forEach(c => {
      const stream = c.stream || 'General';
      if (!streams[stream]) streams[stream] = [];
      streams[stream].push(c);
    });

    Object.keys(streams).forEach(stream => {
      html += `<h3 style="color: var(--primary-color); margin: 2rem 0 1rem;">${stream} Stream</h3><div class="cards-grid">`;
      streams[stream].forEach(classData => html += createClassCard(classData));
      html += '</div>';
    });
  }

  container.innerHTML = html;
}

function createClassCard(classData) {
  const streamBadge = classData.stream ? `<span class="badge badge-primary">${classData.stream}</span>` : '';
  
  return `
    <div class="card" data-class="${classData.class}" data-stream="${classData.stream || 'none'}">
      <div class="card-header">
        <h3>Class ${classData.class}</h3>
        ${streamBadge}
      </div>
      
      <div style="margin-bottom: 1rem;">
        <h4 style="color: var(--primary-color); font-size: 1rem; margin-bottom: 0.5rem;">📚 Subjects</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${classData.subjects.map(subject => `<span class="badge badge-success">${subject}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <h4 style="color: var(--primary-color); font-size: 1rem; margin-bottom: 0.5rem;">👨‍🏫 Teachers</h4>
        <p style="color: var(--light-text); font-size: 0.9rem;">${classData.teachers.join(', ')}</p>
      </div>

      <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
        <a href="#" class="btn btn-primary" style="flex: 1; text-align: center; padding: 0.6rem;">Download Syllabus</a>
        <a href="notes.html" class="btn btn-secondary" style="flex: 1; text-align: center; padding: 0.6rem;">View Notes</a>
      </div>
    </div>
  `;
}

function setupClassFilters() {
  const classFilter = document.getElementById('classFilter');
  const streamFilter = document.getElementById('streamFilter');

  if (classFilter) classFilter.addEventListener('change', applyClassFilters);
  if (streamFilter) streamFilter.addEventListener('change', applyClassFilters);
}

function applyClassFilters() {
  const classFilter = document.getElementById('classFilter').value;
  const streamFilter = document.getElementById('streamFilter').value;

  let filtered = SCHOOL_DATA.classes;

  if (classFilter !== 'all') {
    filtered = filtered.filter(c => c.class === classFilter);
  }

  if (streamFilter !== 'all') {
    filtered = filtered.filter(c => c.stream === streamFilter);
  }

  displayClasses(filtered);
}

// ============================================
// NOTES PAGE
// ============================================

function initNotesPage() {
  populateSubjectFilter();
  displayNotes(SCHOOL_DATA.notes);
  setupNoteFilters();
}

function populateSubjectFilter() {
  const subjectFilter = document.getElementById('subjectFilter');
  if (!subjectFilter) return;

  const subjects = [...new Set(SCHOOL_DATA.notes.map(note => note.subject))].sort();
  subjects.forEach(subject => {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    subjectFilter.appendChild(option);
  });
}

function displayNotes(notes) {
  const container = document.getElementById('notesContainer');
  if (!container) return;

  if (notes.length === 0) {
    container.innerHTML = '<p style="color: var(--light-text); text-align: center;">No notes found.</p>';
    return;
  }

  container.innerHTML = `<div class="cards-grid">${notes.map(note => createNoteCard(note)).join('')}</div>`;
}

function createNoteCard(note) {
  return `
    <div class="card">
      <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
        <div style="font-size: 2.5rem;">📄</div>
        <div style="flex: 1;">
          <h3 style="margin-bottom: 0.3rem;">${note.title}</h3>
          <span class="badge badge-primary">Class ${note.class}</span>
          <span class="badge badge-success">${note.subject}</span>
        </div>
      </div>
      
      <div style="margin-bottom: 1rem; padding: 1rem; background-color: var(--light-bg); border-radius: 6px;">
        <p style="margin-bottom: 0.5rem; color: var(--light-text); font-size: 0.9rem;">
          <strong>Uploaded by:</strong> ${note.uploaded_by}
        </p>
        <p style="color: var(--light-text); font-size: 0.9rem;">
          <strong>Date:</strong> ${formatDate(note.date)}
        </p>
      </div>

      <a href="#" class="btn btn-primary" style="width: 100%; text-align: center; display: block;">📥 Download PDF</a>
    </div>
  `;
}

function setupNoteFilters() {
  const classFilter = document.getElementById('classFilterNotes');
  const subjectFilter = document.getElementById('subjectFilter');
  const searchInput = document.getElementById('searchNotes');

  if (classFilter) classFilter.addEventListener('change', applyNoteFilters);
  if (subjectFilter) subjectFilter.addEventListener('change', applyNoteFilters);
  if (searchInput) searchInput.addEventListener('input', debounce(applyNoteFilters, 300));
}

function applyNoteFilters() {
  const classFilter = document.getElementById('classFilterNotes').value;
  const subjectFilter = document.getElementById('subjectFilter').value;
  const searchTerm = document.getElementById('searchNotes').value.toLowerCase();

  let filtered = SCHOOL_DATA.notes;

  if (classFilter !== 'all') filtered = filtered.filter(note => note.class === classFilter);
  if (subjectFilter !== 'all') filtered = filtered.filter(note => note.subject === subjectFilter);
  if (searchTerm) {
    filtered = filtered.filter(note => 
      note.title.toLowerCase().includes(searchTerm) ||
      note.subject.toLowerCase().includes(searchTerm) ||
      note.uploaded_by.toLowerCase().includes(searchTerm)
    );
  }

  displayNotes(filtered);
}

// ============================================
// STUDENTS PAGE
// ============================================

function initStudentsPage() {
  displayStudents(SCHOOL_DATA.students);
  setupStudentFilters();
}

function displayStudents(students) {
  const container = document.getElementById('studentsContainer');
  const countElement = document.getElementById('studentCount');
  
  if (!container) return;

  if (students.length === 0) {
    container.innerHTML = '<p style="color: var(--light-text); text-align: center;">No students found.</p>';
    if (countElement) countElement.textContent = 'No students found';
    return;
  }

  if (countElement) countElement.textContent = `Showing ${students.length} student${students.length !== 1 ? 's' : ''}`;
  container.innerHTML = `<div class="cards-grid">${students.map(student => createStudentCard(student)).join('')}</div>`;
}

function createStudentCard(student) {
  return `
    <div class="card">
      <div style="display: flex; gap: 1rem; align-items: center;">
        <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #89f7fe, #66a6ff); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; flex-shrink: 0;">
          👤
        </div>
        <div style="flex: 1;">
          <h3 style="margin-bottom: 0.3rem; color: var(--primary-color);">${student.name}</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
            <span class="badge badge-primary">Roll No: ${student.roll_no}</span>
            <span class="badge badge-success">Class ${student.class}${student.section}</span>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid var(--light-bg);">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
          <div>
            <p style="color: var(--light-text); font-size: 0.85rem; margin-bottom: 0.2rem;">Class</p>
            <p style="color: var(--dark-text); font-weight: 600;">${student.class}</p>
          </div>
          <div>
            <p style="color: var(--light-text); font-size: 0.85rem; margin-bottom: 0.2rem;">Section</p>
            <p style="color: var(--dark-text); font-weight: 600;">${student.section}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupStudentFilters() {
  const classFilter = document.getElementById('classFilterStudents');
  const sectionFilter = document.getElementById('sectionFilter');
  const searchInput = document.getElementById('searchStudents');

  if (classFilter) classFilter.addEventListener('change', applyStudentFilters);
  if (sectionFilter) sectionFilter.addEventListener('change', applyStudentFilters);
  if (searchInput) searchInput.addEventListener('input', debounce(applyStudentFilters, 300));
}

function applyStudentFilters() {
  const classFilter = document.getElementById('classFilterStudents').value;
  const sectionFilter = document.getElementById('sectionFilter').value;
  const searchTerm = document.getElementById('searchStudents').value.toLowerCase();

  let filtered = SCHOOL_DATA.students;

  if (classFilter !== 'all') filtered = filtered.filter(s => s.class === classFilter);
  if (sectionFilter !== 'all') filtered = filtered.filter(s => s.section === sectionFilter);
  if (searchTerm) {
    filtered = filtered.filter(s => 
      s.name.toLowerCase().includes(searchTerm) ||
      s.roll_no.toString().includes(searchTerm)
    );
  }

  displayStudents(filtered);
}

// ============================================
// EVENTS PAGE
// ============================================

function initEventsPage() {
  displayEvents(SCHOOL_DATA.events);
  setupEventFilters();
  setupEventModal();
}

function displayEvents(events) {
  const container = document.getElementById('eventsContainer');
  if (!container) return;

  if (events.length === 0) {
    container.innerHTML = '<p style="color: var(--light-text); text-align: center;">No events found.</p>';
    return;
  }

  const upcomingEvents = events.filter(e => e.type === 'upcoming').sort((a, b) => new Date(a.date) - new Date(b.date));
  const pastEvents = events.filter(e => e.type === 'past').sort((a, b) => new Date(b.date) - new Date(a.date));

  let html = '';

  if (upcomingEvents.length > 0) {
    html += '<h2 class="section-title">Upcoming Events</h2><div class="cards-grid">';
    upcomingEvents.forEach(event => html += createEventCard(event));
    html += '</div>';
  }

  if (pastEvents.length > 0) {
    html += '<h2 class="section-title" style="margin-top: 3rem;">Past Events</h2><div class="cards-grid">';
    pastEvents.forEach(event => html += createEventCard(event));
    html += '</div>';
  }

  container.innerHTML = html;
  attachEventHandlers();
}

function createEventCard(event) {
  const isUpcoming = event.type === 'upcoming';
  const statusBadge = isUpcoming ? '<span class="badge badge-success">Upcoming</span>' : '<span class="badge badge-warning">Past</span>';

  return `
    <div class="card">
      <div style="width: 100%; height: 200px; background: linear-gradient(135deg, #fbc2eb, #a6c1ee); border-radius: var(--border-radius); display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem; margin-bottom: 1rem;">
        ${isUpcoming ? '📅' : '✅'}
      </div>
      
      <div class="card-header">
        <h3>${event.title}</h3>
        ${statusBadge}
      </div>

      <p style="color: var(--light-text); margin-bottom: 1rem;">📅 ${formatDate(event.date)}</p>
      <p style="color: var(--dark-text); line-height: 1.6; margin-bottom: 1rem;">${event.short_desc}</p>
      <button class="btn btn-primary event-details-btn" data-event-id="${event.id}" style="width: 100%;">Read More →</button>
    </div>
  `;
}

function attachEventHandlers() {
  const detailButtons = document.querySelectorAll('.event-details-btn');
  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const eventId = parseInt(this.getAttribute('data-event-id'));
      showEventModal(eventId);
    });
  });
}

function showEventModal(eventId) {
  const event = SCHOOL_DATA.events.find(e => e.id === eventId);
  if (!event) return;

  const modal = document.getElementById('eventModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (!modal || !modalTitle || !modalBody) return;

  modalTitle.textContent = event.title;
  
  const isUpcoming = event.type === 'upcoming';
  const statusBadge = isUpcoming ? '<span class="badge badge-success">Upcoming</span>' : '<span class="badge badge-warning">Past</span>';

  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 100%; max-width: 400px; height: 250px; margin: 0 auto; background: linear-gradient(135deg, #89f7fe, #66a6ff); border-radius: var(--border-radius); display: flex; align-items: center; justify-content: center; color: white; font-size: 5rem;">
        ${isUpcoming ? '📅' : '✅'}
      </div>
    </div>

    <div style="margin-bottom: 1rem;">
      ${statusBadge}
      <span style="margin-left: 0.5rem; color: var(--light-text);">
        <strong>Date:</strong> ${formatDate(event.date)}
      </span>
    </div>

    <div style="background-color: var(--light-bg); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1rem;">
      <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Event Description</h4>
      <p style="line-height: 1.8; color: var(--dark-text);">${event.full_desc}</p>
    </div>

    ${isUpcoming ? `
      <div style="background-color: #d4edda; padding: 1rem; border-radius: var(--border-radius); border: 1px solid #c3e6cb;">
        <p style="color: #155724; margin: 0;"><strong>📢 Mark your calendar!</strong> Don't miss this upcoming event.</p>
      </div>
    ` : ''}
  `;

  modal.classList.add('active');
}

function setupEventModal() {
  const modal = document.getElementById('eventModal');
  const closeBtn = document.getElementById('closeModal');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

function setupEventFilters() {
  const typeFilter = document.getElementById('eventTypeFilter');
  const searchInput = document.getElementById('searchEvents');

  if (typeFilter) typeFilter.addEventListener('change', applyEventFilters);
  if (searchInput) searchInput.addEventListener('input', debounce(applyEventFilters, 300));
}

function applyEventFilters() {
  const typeFilter = document.getElementById('eventTypeFilter').value;
  const searchTerm = document.getElementById('searchEvents').value.toLowerCase();

  let filtered = SCHOOL_DATA.events;

  if (typeFilter !== 'all') filtered = filtered.filter(e => e.type === typeFilter);
  if (searchTerm) {
    filtered = filtered.filter(e => 
      e.title.toLowerCase().includes(searchTerm) ||
      e.short_desc.toLowerCase().includes(searchTerm) ||
      e.full_desc.toLowerCase().includes(searchTerm)
    );
  }

  displayEvents(filtered);
}

// ============================================
// ADMISSIONS PAGE
// ============================================

function initAdmissionsPage() {
  setupAdmissionForm();
  setupSuccessModal();
}

function setupAdmissionForm() {
  const form = document.getElementById('admissionForm');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateAdmissionForm()) submitApplication();
  });
}

function validateAdmissionForm() {
  const studentName = document.getElementById('studentName').value.trim();
  const dob = document.getElementById('dob').value;
  const classApplying = document.getElementById('classApplying').value;
  const parentName = document.getElementById('parentName').value.trim();
  const contactNumber = document.getElementById('contactNumber').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!studentName || !dob || !classApplying || !parentName || !contactNumber || !email || !address) {
    showAlert('Please fill in all required fields', 'error');
    return false;
  }

  if (studentName.length < 2) {
    showAlert('Student name must be at least 2 characters long', 'error');
    return false;
  }

  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  
  if (age < 12 || age > 20) {
    showAlert('Student age should be between 12 and 20 years', 'error');
    return false;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(contactNumber)) {
    showAlert('Please enter a valid 10-digit contact number', 'error');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showAlert('Please enter a valid email address', 'error');
    return false;
  }

  return true;
}

function submitApplication() {
  const studentName = document.getElementById('studentName').value.trim();
  const classApplying = document.getElementById('classApplying').value;
  const applicationId = generateApplicationId();
  const submissionDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  showSuccessModal(applicationId, studentName, classApplying, submissionDate);
  document.getElementById('admissionForm').reset();
}

function generateApplicationId() {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `MS${year}${randomNum}`;
}

function showSuccessModal(applicationId, studentName, classApplying, submissionDate) {
  const modal = document.getElementById('successModal');
  const modalBody = document.getElementById('successModalBody');

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <div style="font-size: 5rem; margin-bottom: 1rem;">🎉</div>
      
      <div style="background: linear-gradient(135deg, var(--success), #27ae60); color: white; padding: 2rem; border-radius: var(--border-radius); margin-bottom: 2rem;">
        <h2 style="margin-bottom: 1rem; font-size: 2rem;">Application ID</h2>
        <p style="font-size: 2.5rem; font-weight: bold; letter-spacing: 2px;">${applicationId}</p>
        <p style="margin-top: 1rem; font-size: 1rem; opacity: 0.9;">Please save this ID for future reference</p>
      </div>

      <div style="background-color: var(--light-bg); padding: 1.5rem; border-radius: var(--border-radius); text-align: left; margin-bottom: 1.5rem;">
        <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Application Summary</h4>
        <p style="margin-bottom: 0.5rem;"><strong>Student Name:</strong> ${studentName}</p>
        <p style="margin-bottom: 0.5rem;"><strong>Class Applied:</strong> ${classApplying}</p>
        <p style="margin-bottom: 0.5rem;"><strong>Submission Date:</strong> ${submissionDate}</p>
      </div>

      <div style="background-color: #d4edda; padding: 1rem; border-radius: var(--border-radius); border: 1px solid #c3e6cb; margin-bottom: 1.5rem;">
        <p style="color: #155724; margin: 0; line-height: 1.6;">
          <strong>📧 Next Steps:</strong><br>
          You will receive a confirmation email shortly with further instructions. 
          Our admission team will contact you within 3-5 business days.
        </p>
      </div>

      <button class="btn btn-secondary" onclick="closeSuccessModalFunc()">Close</button>
    </div>
  `;

  modal.classList.add('active');
}

function setupSuccessModal() {
  const modal = document.getElementById('successModal');
  const closeBtn = document.getElementById('closeSuccessModal');

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', closeSuccessModalFunc);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSuccessModalFunc();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeSuccessModalFunc();
    }
  });
}

function closeSuccessModalFunc() {
  const modal = document.getElementById('successModal');
  if (modal) modal.classList.remove('active');
}

// ============================================
// CONTACT PAGE
// ============================================

function initContactPage() {
  setupContactForm();
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateContactForm()) submitContactForm();
  });
}

function validateContactForm() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value.trim();

  if (!name || !email || !subject || !message) {
    showAlert('Please fill in all required fields', 'error');
    return false;
  }

  if (name.length < 2) {
    showAlert('Name must be at least 2 characters long', 'error');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showAlert('Please enter a valid email address', 'error');
    return false;
  }

  if (phone) {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      showAlert('Please enter a valid 10-digit phone number', 'error');
      return false;
    }
  }

  if (message.length < 10) {
    showAlert('Message must be at least 10 characters long', 'error');
    return false;
  }

  return true;
}

function submitContactForm() {
  const name = document.getElementById('contactName').value.trim();
  
  showSuccessMessage(name);
  document.getElementById('contactForm').reset();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSuccessMessage(name) {
  const container = document.querySelector('.container');
  if (!container) return;
  
  const successDiv = document.createElement('div');
  successDiv.className = 'alert alert-success active';
  successDiv.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1rem;">
      <div style="font-size: 2rem;">✅</div>
      <div>
        <h3 style="margin: 0 0 0.5rem 0; color: #155724;">Thank you, ${name}!</h3>
        <p style="margin: 0; line-height: 1.6;">
          Your message has been successfully sent. We will get back to you within 24-48 hours.
        </p>
      </div>
    </div>
  `;
  
  container.insertBefore(successDiv, container.firstChild);
  
  setTimeout(() => {
    successDiv.classList.remove('active');
    setTimeout(() => successDiv.remove(), 300);
  }, 10000);
}
