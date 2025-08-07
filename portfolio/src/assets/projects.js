import blogImg from "../assets/blog.png";
import spotifyImg from "../assets/spotify.png";
import moneyImg from "../assets/money.png";
import weatherImg from "../assets/weather.png";
import quizImg from "../assets/quiz.png";

export const projects = [
  
  {
    id: 1,
    title: "Spotify_Clone Music Website",
    description:
      "A responsive music streaming web app with features like album browsing and an interactive music player. It offers a smooth, user-friendly interface and helped me improve my skills in UI design and front-end development.",
    image: spotifyImg,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
    ],
    demoLink: "https://new-spotify-clone-eight.vercel.app/",
    codeLink: "https://github.com/chanuka1012/New_Spotify_Clone.git",
  },
  {
    id: 2,
    title: "💰 Money Manager Application",
    description:
      "  A user-friendly app that helps individuals track their daily income and expenses. Key features include adding income and expenses, viewing detailed financial reports, deleting entries, and secure user login with personalized data. This project enhanced my skills in full-stack development and real-world project handling. ",
    image: moneyImg,
    technologies: [
      "React.js",
      "JavaScript",
      "Spring Boot",
      "Java",
      "MongoDB"
    ],
    //demoLink: "https://netflix-clone-frontend-hiup.vercel.app/",
    //codeLink: "https://github.com/chamithsandeepa/Netflix_Clone_Frontend.git",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "This web app allows users to check real-time temperature, humidity, and wind speed for any city worldwide through a simple and user-friendly interface. The project helped me improve my development and project management skills.",
    image: weatherImg,
    technologies: [
      "React.js",
      "JavaScript",
      "Location-based API",
    ],
    demoLink: "https://weather-app-frontend-azure.vercel.app/",
    codeLink: "https://github.com/chanuka1012/Weather-app_frontend.git",
  },
  {
    id: 4,
    title: "My Personal Blog",
    description:
      "A personal portfolio site highlighting my projects, skills, and experience. Developed using HTML, CSS, and JavaScript with a focus on a clean, responsive design.",
    image: blogImg,
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    demoLink: "https://new-portfolio-one-alpha-43.vercel.app/",
    codeLink: "https://github.com/chanuka1012/new_portfolio.git",
  },
  {
    id: 5,
    title: "Quiz App",
    description:
      "A small quiz app featuring important facts about Sri Lanka. We can customize the number of questions and change the questions as we like",
    image: quizImg,
    technologies: [
      "React.js",
      "JavaScript",
      "CSS",
    ],
    demoLink: "https://quiz-app-lilac-delta-74.vercel.app/",
    codeLink: "https://github.com/chanuka1012/quiz_app.git",
  },
];
