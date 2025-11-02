# Modern School Website - Classes 9-12

A complete responsive school website built with HTML, CSS, and vanilla JavaScript. No frameworks, no backend - pure static website with dynamic data loading from JSON files.

## 🎯 Project Overview

This is a fully functional, mobile-friendly static website for a school serving classes 9-12. The website features multiple pages with dynamic content loading, form validation, filtering, search functionality, and more.

## 📁 Project Structure

```
scl/
├── index.html              # Home page
├── about.html              # About page
├── classes.html            # Classes page
├── notes.html              # Study notes page
├── students.html           # Students directory
├── events.html             # Events page
├── admissions.html         # Admission form
├── contact.html            # Contact page
├── css/
│   └── style.css          # Global stylesheet
├── js/
│   ├── main.js            # Common JavaScript functions
│   ├── home.js            # Home page scripts
│   ├── classes.js         # Classes page scripts
│   ├── notes.js           # Notes page scripts
│   ├── students.js        # Students page scripts
│   ├── events.js          # Events page scripts
│   ├── admissions.js      # Admissions page scripts
│   └── contact.js         # Contact page scripts
├── data/
│   ├── students.json      # Student data
│   ├── notes.json         # Study notes data
│   ├── classes.json       # Classes and syllabus data
│   ├── events.json        # Events data
│   └── teachers.json      # Teachers data
└── images/                 # Placeholder for images
```

## ✨ Features

### 1. Home Page (index.html)
- School branding with logo
- Responsive navigation bar with mobile menu
- Hero section with call-to-action buttons
- Latest 3 upcoming events/notices loaded from JSON
- Quick stats section showcasing school highlights
- Fully responsive footer

### 2. About Page (about.html)
- School history and introduction
- Principal's message with photo placeholder
- Vision and Mission statements
- Achievement statistics
- Location with map placeholder

### 3. Classes Page (classes.html)
- Dynamic loading of class information from JSON
- Separate sections for Classes 9-10 and 11-12
- Stream-wise categorization (Science, Commerce, Arts) for classes 11-12
- Subject lists and teacher information
- Downloadable syllabus and sample papers
- Filter by class and stream
- Responsive card layout

### 4. Notes Page (notes.html)
- List of study notes and PDF resources
- Filter by class and subject
- Real-time search functionality
- Shows note title, subject, uploader, and date
- Download buttons for each note
- Dynamic subject filter population

### 5. Students Page (students.html)
- Student directory with profile cards
- Search by name or roll number
- Filter by class and section
- Shows student count
- Student photos (placeholder)
- Responsive grid layout

### 6. Events Page (events.html)
- Upcoming and past events
- Event cards with images (placeholder)
- "Read More" functionality with modal popup
- Detailed event descriptions in modal
- Filter by event type (upcoming/past)
- Search events by title or description

### 7. Admissions Page (admissions.html)
- Complete admission form with validation
- Fields: Student info, parent info, contact details
- Client-side form validation
- Auto-generated Application ID
- Success modal with application summary
- Printable application receipt
- Age validation and format checks

### 8. Contact Page (contact.html)
- Contact form with validation
- School address and contact information
- Office hours
- Map placeholder
- FAQ section
- Success message after form submission

## 🎨 Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Mobile Menu**: Hamburger menu for small screens
- **Modern UI**: Clean and professional design
- **Color Scheme**: Professional blue and gray palette
- **Animations**: Smooth transitions and hover effects
- **Loading States**: Spinner animations while data loads
- **Modal Windows**: For event details and success messages
- **Form Validation**: Client-side validation with error messages
- **Search & Filter**: Real-time filtering and search functionality

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: ES6+ features, async/await
- **JSON**: Data storage
- **No Dependencies**: No external libraries or frameworks

## 🚀 Setup Instructions

1. **Extract/Clone** the project to your web server directory
   - For XAMPP: `c:\xampp\htdocs\scl`
   - For other servers: appropriate web root directory

2. **Start your web server**
   - XAMPP: Start Apache from XAMPP Control Panel
   - Live Server (VS Code): Right-click index.html → Open with Live Server
   - Python: `python -m http.server 8000`

3. **Access the website**
   - XAMPP: `http://localhost/scl`
   - Live Server: Automatic browser opening
   - Python: `http://localhost:8000`

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🔧 Customization Guide

### Changing Colors
Edit `css/style.css` and modify the CSS variables:
```css
:root {
  --primary-color: #2c3e50;    /* Main dark color */
  --secondary-color: #3498db;  /* Accent blue */
  --accent-color: #e74c3c;     /* Red for CTAs */
}
```

### Adding Data
1. **Students**: Edit `data/students.json`
2. **Notes**: Edit `data/notes.json`
3. **Events**: Edit `data/events.json`
4. **Classes**: Edit `data/classes.json`
5. **Teachers**: Edit `data/teachers.json`

### Adding Images
1. Place images in the `images/` folder
2. Update image references in JSON files or HTML
3. Recommended sizes:
   - Logo: 200x200px
   - Event images: 800x400px
   - Student photos: 300x300px

## 📊 Data Structure

### students.json
```json
{
  "roll_no": 101,
  "name": "Student Name",
  "class": "9",
  "section": "A",
  "photo": "images/placeholder.jpg"
}
```

### notes.json
```json
{
  "id": 1,
  "title": "Note Title",
  "subject": "Subject Name",
  "class": "9",
  "uploaded_by": "Teacher Name",
  "date": "2024-10-15",
  "pdf_url": "path/to/pdf"
}
```

### events.json
```json
{
  "id": 1,
  "title": "Event Title",
  "date": "2024-11-15",
  "type": "upcoming",
  "short_desc": "Brief description",
  "full_desc": "Full description",
  "image": "images/event.jpg"
}
```

## 🔒 Security Notes

- All form submissions are client-side only (no backend)
- Data is stored in JSON files (read-only)
- For production use, implement:
  - Server-side form processing
  - Database integration
  - User authentication
  - HTTPS encryption

## 📝 Features Implemented

✅ Responsive navigation with mobile menu
✅ Dynamic data loading from JSON files
✅ Client-side search and filtering
✅ Form validation (admissions and contact)
✅ Modal windows for event details
✅ Application ID generation
✅ Printable receipts
✅ Success messages and alerts
✅ Loading spinners
✅ Smooth animations
✅ Fully responsive design
✅ SEO-friendly HTML structure

## 🎓 Educational Use

This project is perfect for:
- Learning HTML, CSS, and JavaScript
- Understanding static site development
- Practicing responsive design
- Learning JSON data handling
- Form validation implementation
- DOM manipulation

## 📞 Support

For issues or questions about this project:
- Check the code comments
- Review the browser console for errors
- Ensure all files are in correct directories
- Verify web server is running

## 📄 License

This is a demonstration project. Feel free to use and modify for educational purposes.

## 🌟 Future Enhancements

Potential additions:
- Backend integration (PHP, Node.js, etc.)
- Database connection
- User login system
- Online fee payment
- Student dashboard
- Teacher portal
- Photo gallery
- Actual Google Maps integration
- Newsletter subscription
- Live chat support

---

**Created with ❤️ for Modern School**

*Last Updated: November 2024*
