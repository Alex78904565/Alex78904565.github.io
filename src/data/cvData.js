import magicSquarePaper from '../assets/magic_squares_in_finite_fields.pdf';

export const cvData = {
  personal: {
    name: "Alex Lehmkuhl", // [cite: 1]
    titles: ["Teaching Assistant", "PhD Student", "Meta Researcher"], // [cite: 2]
    email: "alehmkuhl@wisc.edu", // [cite: 10]
    phone: "262-239-5116", // [cite: 11]
    //location: "Madison, WI", // [cite: 12]
    linkedin: "www.linkedin.com/in/alex-lehmkuhl", // [cite: 13]
    summary: "A passionate, self-driven learner with a love of teaching as evidenced by an almost entirely autodidactic education prior to college, the creation of numerous personal projects, excellent academic performance, and several years of teaching experience." // [cite: 3]
  },
  experience: [
    {
      id: 1,
      role: "Algorithms Teaching Assistant", // [cite: 28]
      company: "UW-Madison", // [cite: 29]
      location: "Madison, WI", // [cite: 29]
      date: "September 2022 - Present", // [cite: 29]
      bullets: [
        "Developed program that automatically collates grading information from axillary grading software used by the class and enters this information into the primary grading system.", // [cite: 30]
        "Leads weekly lectures on the topic of algorithms with groups of approximately 40 students at a time, and presents final review session in front of groups as large as 300 students simultaneously." // [cite: 31]
      ]
    },
    {
      id: 2,
      role: "Machine Learning Engineer Intern", // [cite: 34]
      company: "Meta", // [cite: 35]
      location: "Sunnyvale, CA", // [cite: 35]
      date: "May 2025 - August 2025, May 2026 - August 2026", // [cite: 35]
      bullets: [
        "Worked with the Ranking & Foundational AI: Ecosystem team to analyze internal ads models and apply state-of-the-art optimization methods based on these results to improve performance.", // [cite: 36]
        "Worked with the Ranking & Foundational AI: Ecosystem team to experimentally apply transfer learning techniques and create a pipeline to apply these results to current models."
      ]
    },
    {
      id: 3,
      role: "ACT & K-12 Tutor", // [cite: 34]
      company: "Huntinton Learning Center", // [cite: 35]
      location: "Middleton, WI", // [cite: 35]
      date: "July 2023 - July 2024", // [cite: 35]
      bullets: [
        "Held in-person tutoring sessions for students looking to improve their ACT score or K-12 students looking to improve their understanding of their current curriculum material."
      ]
    },
    {
      id: 4,
      role: "Software Development Engineer",
      company: "Amazon",
      location: "Seattle, WA",
      date: "June 2022 — September 2022",
      bullets: [
        "Created plan to split backend service into two separate services to improve website performance and scalability.",
        "Created document outlining background information, implementation details, tools required, and references for said plan.",
        "Presented this document to the team for review, and worked with them to refine, test, and incrementally implement plan, first on beta, and then on live servers."
        ]
    },
    {
      id: 5,
      role: "Computer Programming & Software Trainer",
      company: "UW-Madison - Software Training For Students",
      location: "Madison, WI",
      date: "July 2018 — May 2022",
      bullets: [
        "Improved students’ software and programming skills through developing curricula, tutoring one-on-one sessions, and conducting classes regarding topics such as Python, Javascript, CSS, & HTML.",
        "Created the first intermediate-level Python manual used in the current Python curriculum.",
        "Maintained excellent reviews from students."
      ]
    },
    {
      id: 6,
      role: "Associate Embedded Software Engineer",
      company: "Extreme Engineering Solutions",
      location: "Verona, WI",
      date: "May 2020 — December 2020, May 2021 — August 2021",
      bullets: [
        "Developed and updated C-based drivers, manuals, and software releases for VxWorks, an RTOS used in both civilian and military applications.",
        "Uncovered and resolved widespread bug in released kernel images.",
        "Enhanced Python-based automated software testing and release-generating scripts.",
        "Collaborated with a team on large projects utilizing Git & SVN for version control as well as Redmine for project management & administration.",
        "Developed scalable iPXE boot infrastructure supporting multiple boards with multiple operating systems and boot options per board.",
        "Migrated Security Supervisor chip from Electronic Code Book to Cipher Block Chaining encryption."
      ]
    },
    {
      id: 7,
      role: "Physics Facilitator",
      company: "UW-Madison - Peer Learning Association",
      location: "Madison, WI",
      date: "September 2018 — December 2018",
      bullets: [
        "Volunteered to host Physics review sessions for students and attended weekly meetings meant to enhance teaching techniques."
      ]
    },
    {
      id: 8,
      role: "Volunteer Teaching Assistant",
      company: "Shorewood High School",
      location: "Shorewood, WI",
      date: "February 2016 — May 2016",
      bullets: [
        "Ensured students’ comprehension of HTML, CSS, and JavaScript by resolving technical issues and answering questions regarding the subject."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "One-Way Function Computational Complexity",
      date: "December 2025 — January 2026",
      bullets: [
        "Started personal project investigating the hardness of functions considered to be one-way such as the discrete exponential and its corresponding logarithm.",
        "Surveyed current literature and tested hypotheses both by hand and through software on the discrete logarithm problem as a baseline.",
        "Related this problem to the complexity of inverting permutations within the symmetric groups and attempted various algebraic approaches to determine the difficulty of computing inverse permutations."
      ]
    },
    {
      id: 2,
      title: "Magic Square of Squares",
      date: "June 2021 — May 2025",
      bullets: [
        "Started as a personal project, and ultimately completed Ph.D. qualifying process through research on the “Magic Square of Squares” problem with guidance from Eric Bach.",
        "Examined current literature, investigated the problem’s mathematical properties both by hand and through software, and took classes covering related concepts while implementing optimized computational strategies in order to explore hypotheses.",
        "Designed algorithms and models intended to help analyze the structure of subproblems and used the results of this analysis to find necessary and sufficient conditions for a final solution."
      ]
    },
    {
      id: 3,
      title: "Coarse Labelling in Machine Learning",
      date: "August 2021 — May 2022",
      bullets: [
        "Worked with Professor Christos Tzamos to develop a Senior Honors Research thesis on the topic of machine learning in the presence of instance-dependent label noise.",
        "Investigated and implemented strategies intended to reduce the negative impacts of these kinds of noise on learning.",
        "Aimed to improve the state of the art methods by testing and verifying methods described in modern literature in an effort to discover flaws and/or areas of improvement.",
        "Used PyTorch to implement, test, and modify current techniques on MNIST, CIFAR-10, CIFAR-100, and Clothing-1M datasets."
      ]
    },
    {
      id: 4,
      title: "Multipaste (Co-developer)",
      date: "May 2020 — August 2020",
      bullets: [
        "Worked with partner to develop an application that allows the user to maintain and manage a history of items copied to the Windows clipboard.",
        "Accomplishes this by storing clipboard data in a compressed, disk-based TreeList to minimize footprint.",
        "All user operations run in O(n log n) time or better. Written using C++, C#, and C++/CLI."
      ]
    },
    {
      id: 5,
      title: "Crypter/Packer/Loader",
      date: "August 2017 — December 2017",
      bullets: [
        "Developed a Windows-based C++ program which is able to obfuscate an executable file by storing its encrypted contents as a resource inside of a small “stub” executable.",
        "When run, the stub executable is able to decrypt the stored executable and then properly load and execute it."
      ]
    },
    {
      id: 6,
      title: "Man In The Middle",
      date: "January 2017 — March 2017",
      bullets: [
        "Developed a proof-of-concept Linux tool which allows the user to intercept and modify network traffic of chosen users on a network.",
        "This is done by performing ARP spoofing to “get in the middle” and using the libpcap library with C++ to modify and forward packets to and from the target device."
      ]
    }
  ],
  research: [
    {
      id: 2,
      title: "Differentially Private Linear Programming",
      advisor: "Gavin Brown",
      date: "April 2026 — Present",
      bullets: [
        "Analyzed and optimized differentially private linear programming algorithms."
      ],
    },
    {
      id: 2,
      title: "Magic Square of Squares",
      advisor: "Eric Bach",
      date: "September 2024 — May 2025",
      bullets: [
        "Studied the magic square of squares problem through the lens of finite fields."
      ],
      paper: magicSquarePaper
    }
  ],
};