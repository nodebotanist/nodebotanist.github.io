var bashme = new Bashme.Bashme({
  debugMode: true,
  welcomeMessage: 'Welcome to bashme, the first command line interface about you. Please type `help` to get started'
});
bashme.use(new Bashme.Json(
  {
      "name": "nodebotanist (Mx. Kassandra Perch)",
      "bio": "Developer Advocate Specialist (4 years), Developer (10+ years), IoT/Robotics tinkerer (5 years), EE Student (ASU), Non-Binary (30 years), Creative type (25+ years)",
      "education": [
          {
              "university": "St. Edward's University",
              "degree": "Bachelor's of Science",
              "fieldOfStudy": "Computer Science",
              "startYear": 2007,
              "endYear": 2011,
              "notes": "Founder and President (2010-2011)/Vice President (2009-2010) of the Loosely Organized Computer Organization."
          },
           {
             "university": "Arizona State University",
             "degree": "B.S.E.E.",
             "fieldOfStudy": "Electrical Engineering",
             "startYear": 2015,
             "endYear": "???",
             "notes": "Part-time student. I want to learn how to build my own circuit boards, and learn more about robotics. No plans to switch career paths at this time."
           }
      ],
      "work": [
          // {
              // "company": "Universidad ORT Uruguay",
              // "position": "Professor Assistant",
              // "startMonth": 7,
              // "startYear": 2016,
              // "endMonth": 12,
              // "endYear": 2016,
              // "description": "Lorem ipsum"
          // }
      ],
      "publications": [
          {
              "name": "Getting Started With Javascript Robotics",
              "description": "How to get started with Raspberry Pi and Johnny-Five",
              "publisher": "Packt",
              "releaseYear": 2018,
              "url": ""
          },
          {
            "name": "Learning Javascript Robotics",
            "description": "How to get started with Arduino and Johnny-Five",
            "publisher": "Packt",
            "releaseYear": 2016,
            "url": ""
          },
          {
            "name": "Make: Javascript Robotics",
            "description": "I wrote the chapter on RGB LED displays",
            "publisher": "Make",
            "releaseYear": 2015,
            "url": ""
          }
      ],
      "skills": [
          {
              "name": "TypeScript",
              "level": "beginner",
              "keywords": "typescript, javascript, programming"
          }
      ],
      "languages": [
          {
              "name": "English",
              "level": "Native/Fluent"
          }
      ]
  }
));
bashme.use(new Bashme.GitHub('nodebotanist'));
bashme.show(document.querySelector('#terminal'));
bashme.on('command', (cmd, args) => console.log(cmd, args));