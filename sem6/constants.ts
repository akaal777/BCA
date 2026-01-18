
import { StudyResources } from './types';

export const STUDY_RESOURCES: StudyResources = {
  playlists: [
    {
      title: "Apna College",
      desc: "Comprehensive Python placement course covering basics to advanced topics.",
      link: "https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&si=huNKbU8QwjcDwEnY",
      tag: "Placement"
    },
    {
      title: "Code With Harry",
      desc: "One of the most popular Python playlists in Hindi for absolute beginners.",
      link: "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=8S0nhUcJN9oheEWi",
      tag: "Best Seller"
    },
    {
      title: "Telusko",
      desc: "In-depth Python tutorials explaining core concepts clearly.",
      link: "https://youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&si=h6A6G_Q4R-dQDe-o",
      tag: "Deep Dive"
    },
    {
      title: "Gate Smashers",
      desc: "Academic approach to Python, excellent for university exam prep.",
      link: "https://youtube.com/playlist?list=PLxCzCOWd7aiEb4apyN1Y8mD-QuUTr3SPQ&si=lnvPiOnQHqDd55K_",
      tag: "Academic"
    },
    {
      title: "Learn Coding",
      desc: "Simple and straightforward Python tutorials for quick learning.",
      link: "https://youtube.com/playlist?list=PLqleLpAMfxGD-KFajIKzH24p6bgG5R_aN&si=3djVZnc58JpWimbJ",
      tag: "Beginner"
    },
    {
      title: "Coding Yug",
      desc: "Python programming tutorials focused on practical understanding.",
      link: "https://youtube.com/playlist?list=PLI4OVrCFuY543naNBsCaRLrLSxI7MUOzZ&si=KpIO2KIDAKGzP2Hb",
      tag: "Practical"
    }
  ],
  oneshots: [
    {
      title: "Apna College (Beginners)",
      desc: "A complete introduction for absolute beginners.",
      link: "https://youtu.be/vLqTf2b6GZw?si=dSXB6rTJJsz9LWFK",
      tag: "Basics"
    },
    {
      title: "Code With Harry",
      desc: "The legendary 15-hour full course in one video.",
      link: "https://youtu.be/UrsmFxEIp5k?si=fSg68Ioob3khsDIm",
      tag: "Mega Course"
    },
    {
      title: "Apna College (Updated)",
      desc: "Newer version including notes and practice questions.",
      link: "https://youtu.be/ERCMXc8x7mc?si=i0H1Gu6IkMBsZB_w",
      tag: "With Notes"
    },
    {
      title: "5 Minutes Engineering",
      desc: "Rapid revision and concept clearing for exams.",
      link: "https://youtu.be/4CtUyzSters?si=lyiSriUgG_WkmWdt",
      tag: "Exam Prep"
    },
    {
      title: "Sheryians AI School",
      desc: "Modern Python geared towards AI/ML foundations.",
      link: "https://youtu.be/_aWbUudZ5Yo?si=uFGpMUMniLJG1HqT",
      tag: "For AI"
    },
    {
      title: "College Wallah",
      desc: "Detailed one-shot covering core programming concepts.",
      link: "https://youtu.be/XnSasPR2KJI?si=L1MTp3BZX4GDxYP5",
      tag: "Academic"
    }
  ],
  resources: [
    {
      title: "Ultimate Cheatsheet",
      desc: "PDF containing all syntax, string methods, and list operations.",
      link: "#",
      type: "Cheatsheet"
    },
    {
      title: "Handwritten Notes",
      desc: "Chapter 1-5 notes covering loops and functions.",
      link: "#",
      type: "Notes"
    },
    {
      title: "Weather App Project",
      desc: "Source code for a weather app using API integration.",
      link: "#",
      type: "Project"
    },
    {
      title: "Automated Email Bot",
      desc: "Script to automate sending emails with attachments.",
      link: "#",
      type: "Project"
    }
  ],
  theory: [
    {
      title: "Memory Management",
      desc: "Understanding Stack vs Heap memory in Python.",
      link: "#",
      tag: "Internal"
    },
    {
      title: "GIL (Global Interpreter Lock)",
      desc: "Why Python threading is not truly parallel.",
      link: "#",
      tag: "Advanced"
    },
    {
      title: "Decorators & Generators",
      desc: "Deep explanation of syntactic sugar and lazy evaluation.",
      link: "#",
      tag: "Functional"
    }
  ],
  books: [
    {
      title: "Python Crash Course",
      desc: "A hands-on, project-based introduction to programming.",
      link: "#",
      author: "Eric Matthes"
    },
    {
      title: "Automate the Boring Stuff",
      desc: "Practical programming for total beginners.",
      link: "#",
      author: "Al Sweigart"
    },
    {
      title: "Fluent Python",
      desc: "Clear, concise, and effective programming.",
      link: "#",
      author: "Luciano Ramalho"
    }
  ]
};

export const NAV_ITEMS = [
  { label: 'Playlists', href: '#playlists' },
  { label: 'One Shots', href: '#oneshot' },
  { label: 'Notes & Projects', href: '#resources' },
  { label: 'Theory', href: '#theory' },
  { label: 'Books', href: '#books' },
];
