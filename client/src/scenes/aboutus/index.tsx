import React from "react";
import { Typography, Container, Grid, Paper } from "@mui/material";
import TeamMember from "./TeamMember"; // Adjust this import to the location of your TeamMember component

// Importing team member images based on the directory structure provided
import imageChrisPowell from "./images/chrispowell.jpg";
import imageDonaldKremer from "./images/donkremer.jpg";
import imageAmandaOmasta from "./images/amandaomasta.png"; // Complete the file extension as necessary
import imageKevinFlores from "./images/kevinflores.jpg";
import imageJayZazzera from "./images/jayzazzera.png";

// Team members array
const teamMembers = [
  {
    name: "Christopher Powell",
    role: "Computer Science Senior",
    education: "Florida State University",
    major: "Computer Science",
    minor: "Communication",
    bio: "Christopher Powell, a senior at Florida State University, is a versatile software engineer with a strong foundation in computer science and communication. Set to graduate in December 2023, he has excelled academically and mastered a diverse skill set. His technical proficiency covers a range of languages and frameworks, including HTML, CSS, JavaScript, SQL, Python, C/C++, Java, TypeScript, React, Express, and NodeJS. Christopher is also adept in AWS, Azure, and Docker, with hands-on experience in machine learning and deep learning using TensorFlow and PyTorch. He has contributed significantly to various projects, including a sophisticated data analysis application and a real-time chat application. His portfolio showcases a user-centric approach and responsive design. Christopher's professional experience extends to customer service, having worked as a residential concierge. He has demonstrated leadership as the President of the Online Association for Computing Machinery at FSU. Originally from Miami, FL, Christopher is passionate about applying his skills in software engineering to innovate in the automotive industry.",
    image: imageChrisPowell,
  },
  {
    name: "Donald Kremer",
    role: "Computer Science Senior",
    education: "Florida State University",
    major: "Computer Science",
    bio: "As a Senior at Florida State University, set to graduate in December 2024, I find myself at the intersection of technology and philosophy. My journey as an amateur programmer has been fueled by a curiosity that extends beyond code into the realm of philosophical thought. I've engaged deeply with concepts of ethics in AI, exploring how technology impacts society. My academic endeavors have seen me delve into various programming languages, including Python and Java, while also exploring theoretical aspects of computer science. As I approach the culmination of my undergraduate studies, my aim is to blend technical acumen with philosophical inquiry, contributing to tech solutions that are not only innovative but also ethically sound and socially responsible. Always eager to learn, I remain open to new ideas and perspectives, ready to embrace the challenges of a rapidly evolving tech landscape.",
    image: imageDonaldKremer,
  },
  {
    name: "Amanda Omasta",
    role: "Computer Science Senior",
    education: "Florida State University",
    major: "Computer Science",
    bio: "Hello, my name is Amanda Omasta, a passionate senior at Florida State University majoring in Computer Science, with graduation planned for Fall 2023. My academic journey has been marked by a strong focus on software development, data structures, and algorithm design, fostering a deep understanding of the fundamentals of computer science. Alongside my coursework, I have actively engaged in extracurricular projects and collaborative team efforts, honing my skills in programming languages such as Python and Java. My interest extends to the practical application of technology in solving real-world problems, particularly in the fields of healthcare and education technology. As I prepare to transition from academia to the professional world, I am enthusiastic about contributing my knowledge and skills to innovative projects that drive positive change and improve user experiences in tech-driven environments.",
    image: imageAmandaOmasta,
  },
  {
    name: "Kevin Flores",
    role: "Computer Science Senior",
    education: "Florida State University",
    major: "Computer Science",
    bio: "I am Kevin Flores, a dedicated senior in the Computer Science department at Florida State University, with a deep-rooted interest in automotive innovation. Growing up in the north panhandle of Florida, I developed a fascination with how technology can enhance transportation and safety. My academic path has been enriched with courses in software engineering, machine learning, and artificial intelligence, providing me with a solid foundation in the field. I've worked on projects that include developing software for vehicle diagnostics and exploring the potential of autonomous vehicles. My goal is to contribute to the evolution of the automotive industry, focusing on creating safer, more efficient, and environmentally friendly transportation solutions. I am committed to leveraging my technical skills and creative thinking to make a significant impact in the world of automotive technology.",
    image: imageKevinFlores,
  },
  {
    name: "Jay Zazzera",
    role: "Computer Science Senior",
    education: "Florida State University",
    major: "Computer Science",
    bio: "I am Jay Zazzera, currently completing my second bachelor's degree in Computer Science at Florida State University. My academic focus is on mastering the intricacies of computer programming and applications, with a keen interest in software development and data analytics. Having previously earned a degree in a different field, I bring a unique perspective to computer science, blending diverse knowledge with technical expertise. My experience includes working on projects involving web development, mobile app creation, and machine learning applications. I am particularly interested in how technology can be used to drive business innovation and improve user experiences. As I near the completion of my degree, I am excited to explore opportunities that will allow me to apply my skills in dynamic and challenging environments, with a long-term goal of contributing to impactful technological advancements.",
    image: imageJayZazzera,
  },
];

const AboutUs = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TeamMember
                name={member.name}
                role={member.role}
                education={member.education}
                major={member.major}
                bio={member.bio}
                image={member.image}
                //resumeLink={member.resumeLink} -- Include only if the resume is available
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutUs;
