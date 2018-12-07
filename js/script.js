var bashme = new Bashme.Bashme({
  debugMode: true,
  welcomeMessage: 'Welcome to bashme, the first command line interface about you. Please type `help` to get started'
});
bashme.use(new Bashme.Json(
  {
      "name": "Agustín Rodríguez",
      "bio": "#coder #entrepreneur #optimist #dreamer #student",
      "education": [
          {
              "university": "Universidad ORT Uruguay",
              "degree": "System's Engineer",
              "fieldOfStudy": "Computer Science",
              "grade": 90,
              "startYear": 2014,
              "endYear": 2019,
              "notes": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
      ],
      "work": [
          {
              "company": "Universidad ORT Uruguay",
              "position": "Professor Assistant",
              "startMonth": 7,
              "startYear": 2016,
              "endMonth": 12,
              "endYear": 2016,
              "description": "Lorem ipsum"
          }
      ],
      "volunteer": [
          {
              "organization": "Science Church",
              "position": "Evangelist",
              "startMonth": 2,
              "startYear": 2015,
              "endMonth": 2,
              "endYear": 2015,
              "description": "Fake volunteer entry"
          }
      ],
      "awards": [
          {
              "title": "Latin-America First Prize on Innovation",
              "description": "N/A",
              "awarder": "http://www.cii.uy",
              "year": 2016
          }
      ],
      "publications": [
          {
              "name": "Use of singular names in weird open source code",
              "description": "Nothing to say",
              "publisher": "No1",
              "releaseYear": 2018,
              "url": "http://agurodriguez.net"
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
              "name": "Español",
              "level": "Native"
          },
          {
              "name": "English",
              "level": "Intermediate"
          }
      ]
  }
));
bashme.use(new Bashme.GitHub('agurodriguez'));
bashme.show(document.querySelector('#terminal'));
bashme.on('command', (cmd, args) => console.log(cmd, args));