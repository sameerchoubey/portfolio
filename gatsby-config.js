module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://sameerchoubey.tech/`,
    // Your Name
    name: 'Sameer Choubey',
    // Main Site Title
    title: `Sameer Choubey | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer Intern @ OnJuno`,
    // Optional: Twitter account handle
    author: `@SameerChoubey98`,
    // Optional: Github account URL
    github: `https://github.com/sameerchoubey`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sameerchoubey/`,
    // Content of the About Me section
    about: `Jack of all trades, master of none.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    // projects: [
    //   {
    //     name: 'Devfolio',
    //     description:
    //       'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
    //     link: 'https://github.com/',
    //   },
    //   {
    //     name: 'ChromeExtensionKit',
    //     description:
    //       'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
    //     link: 'https://chromeextensionkit.com/?ref=devfolio',
    //   },
    //   {
    //     name: 'Another Cool Project',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'OnJuno',
        description: 'Software Developer Intern, November 2020 - Present',
        link: 'https://onjuno.com',
      },
      {
        name: 'Zulip Chat',
        description: 'Open Source Contributor, November 2018 - July 2019',
        link: 'https://github.com/sameerchoubey/zulip/commits?author=sameerchoubey',
      },
      {
        name: 'Moodcafe Wellness Private Limited',
        description: 'Frontend Web Developer Intern, January 2019 - February 2019',
        link: 'https://Moodcafe.in',
      },
      {
        name: 'Web Development Cell, NIT Sikkim',
        description: 'Full-Stack Developer, February 2018 - Present',
        link: 'http://nitsikkim.ac.in',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description:
          'C/C++, JavaScript, Python, PHP',
      },
      {
        name: 'Languages & Frameworks',
        description:
          'Node.js, Express.js, Vue.js, Django, Flask',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Tools',
        description:
          'Git, Docker, Amazon Web Services (AWS)',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
