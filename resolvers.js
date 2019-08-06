var coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    },
    {
        id: 4,
        title: 'NodeJs : The complete guide',
        author: 'Maximilian Schwarzmuller',
        description: 'A comprehensive NodeJS course for everyone! Core Modules, SSR, MVC, GraphQL, build your own projects, and more.',
        topic: 'Node.JS',
        url: 'https://www.udemy.com/course/nodejs-the-complete-guide/'
    },
    {
        id: 5,
        title: 'Node.js: The Complete Guide to Build RESTful APIs',
        author: 'Mosh Hamedani',
        description: 'Learn to build fast, scalable and secure RESTful services with Node, Express and MongoDB, from setup to production',
        topic: 'Node.JS',
        url: 'https://www.udemy.com/nodejs-master-class/'
    },
    {
        id: 6,
        title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp 2019',
        author: 'Jonas Schmedtmann',
        description: 'Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)',
        topic: 'Node.JS',
        url: 'https://www.udemy.com/nodejs-express-mongodb-bootcamp/'
    },

];

const resolvers = {
    Query : {
        allCourses : () => coursesData,
        course : (root, {id}) => {
            return coursesData.find(el => {
                return el.id === id;
            });
        } 
    }
}

module.exports = resolvers;