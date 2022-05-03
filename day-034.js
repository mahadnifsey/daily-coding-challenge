// Beginner Series #1 School Paperwork
// our classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
function paperwork(n, m) {
    if (n < 0 || m < 0) return 0;
    return n * m;
  }

  // Alternative Method
  paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m