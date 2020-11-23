import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CreateIcon from '@material-ui/icons/Create';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '#' },
];

const mainFeaturedPost = {
  title: 'Clark Ngo',
  description:
    "Amazon AWS Apprenticeship Program Manager (Full Stack Web Systems Developer) @ City University of Seattle",
  list: [
    `As part of Amazon AWS Military Apprenticeship Program, successfully managed yearly 17-week Amazon Apprenticeship Program focusing on
    military veteran/spouse apprentices. Participants learned Linux system administration, networking, database technologies, programming, and full
    stack web development.`,

  ],
  image: '',
  imgText: '',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Professional Experience',
    description:
      "Amazon AWS Apprenticeship Program Manager (Full Stack Web Systems Developer) @ City University of Seattle",
    list: [
      `As part of Amazon AWS Military Apprenticeship Program, successfully managed yearly 17-week Amazon Apprenticeship Program focusing on
      military veteran/spouse apprentices. Participants learned Linux system administration, networking, database technologies, programming, and full
      stack web development.`,
      `Saved $72,000 over 2 years, decreasing operational budget by 40% by introducing organizational efficiencies through optimizing instructor and
      teaching assistant workload.`,
      `93% of the participants moved on to OJT with the Amazon AWS Team.`,
      `Led the development of courses for system administration, programming, database, full stack web development.`,
      `Mentored and led 5 instructors and 5 teaching assistants.`,
      `Project management methodologies used Kanban and Scrum.`,
      `Taught the following subjects as part of the regular curriculum: database, networking, information systems, and Python.`,
      `Promoted from Program Assistant – developed course materials for computer science, cybersecurity, and IT management.`,
      `Technologies used: MEAN Stack, MongoDB, Express, Angular, Node.js, TypeScript, JavaScript, Python, MySQL, AWS, GitHub, Trello, Linux, Kali Linux, and Mendix.`,
    ],
    image: '',
    imageText: '',
  },
  {
    title: 'Startup Experience',
    date: '',
    description:
      'Software Engineer @ CloudEagle.AI',
    list: [
      `DevOps team member for pre-launched vendor management system with machine learning and AI.`,
      `Responsibilities include solution design for integrating database and full-text search engine, development environment provisioning, application
      health monitoring, triaged support tickets, customer onboarding documentation, technical documentation, and mentored new developers.`,
      `Successfully led the prototype and implementation of development environment using Docker.`,
      `Developed automated stress test tool to ensure authentication scalability.`,
      `Technologies used: React, Java, Python, MongoDB, SwaggerUI, SonarQube, Postman, Docker, Asana, Confluence, AWS, Okta, GitLab.`,
    ],
    image: '',
    imageText: '',
  },
  {
    title: 'Startup Experience',
    date: '',
    description:
      'Software Engineer @ Worldwide American',
    list: [
      `Owned the software architecture and implementation of a social media ranking platform written in React. Responsibilities include staff sourcing,
      new member onboarding, and building the authentication layer.`,
      `Technologies used: React, Auth0 and AWS.`,
    ],
    image: '',
    imageText: '',
  },
  {
    title: 'Internship Experience',
    date: '',
    description:
      'Software Developer Intern @ CodeDay CodeLabs',
    list: [
      `Enhanced RESTful API functionality and consumed by UI, written in MERN.`,
      `Protected routes by integrating JSON Web Token (JWT) using Auth0.`,
      `Technologies used: Express, Node.js, MongoDB, Auth0, GitHub, and Notion.`,
    ],
    image: '',
    imageText: '',
  },
  {
    title: 'Internship Experience',
    date: '',
    description:
      'Software Developer Intern @ CodeDay CodeLabs',
    list: [
      `Enhanced RESTful API functionality and consumed by UI, written in MERN.`,
      `Protected routes by integrating JSON Web Token (JWT) using Auth0.`,
      `Technologies used: Express, Node.js, MongoDB, Auth0, GitHub, and Notion.`,
    ],
    image: '',
    imageText: '',
  },
  {
    title: 'Technical Projects',
    date: '',
    description:
      '',
    list: [
      `Book Store Application: MEAN Stack - Designed, implemented, and deployed a single page web application and deployed in AWS.`,
      `Firehose Project Applications: Yelp Clone, Video Streaming Platform, Automated Software Tests, Fluid User Interface - Developed Ruby on Rails applications and applied MVC architecture, object-oriented programming principles, and test-driven development.`,
      `Hackathon Starter - Boiler Plate for Node.js Applications: Google Sheets API - Contributed Google Sheets API boilerplate code using JavaScript and Node.js to an open source project.`,
    ],
    image: '',
    imageText: '',
  },
  {
    title: 'Publications',
    date: '',
    description:
      '',
    list: [
      `Ngo, C., Wang, P., Tran, T., & Chung, S. (2020). Serverless Computing Architecture Security and Quality Analysis for Back-end Development.
      Journal of The Colloquium for Information Systems Security Education, 7 (1), 44.`,
    ],
    image: '',
    imageText: '',
  },
  {
    title: 'Certifications',
    date: '',
    description:
      '',
    list: [
      `CompTIA Linux+ Certified, Validity: April 2020 – April 2023.`,
      `The Firehose Project (Software Engineering) – San Francisco, CA - 2019`,
    ],
    image: '',
    imageText: '',
  },
  {
    title: 'Education',
    date: '',
    description:
      '',
    list: [
      `Master of Science in Computer Science (GPA 3.9) @ City University of Seattle – Seattle, WA - March 2020`,
      `Bachelor of Science in Commerce, Major in Management of Financial Institutions @ De La Salle University – Manila, Philippines - June 2010`,
    ],
    image: '',
    imageText: '',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/clarkngo' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/clarkngo/' },
    { name: 'Blog', icon: CreateIcon, url: 'https://www.freecodecamp.org/news/author/clarkngo' },
    { name: 'YouTube', icon: YouTubeIcon, url: 'https://www.youtube.com/channel/UCsgCdx9_lI7nwTS0pHCiCNw' },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="ClarkTechTalk" sections={sections} social={sidebar.social} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>
      <Footer title="" description="" />
    </React.Fragment>
  );
}
