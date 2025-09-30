export const blogList = [
  {
    id: 1,
    title: "Getting Started with the MERN Stack",
    category: "MERN",
    subcategory: ["Introduction", "Beginner"],
    description:
      "The MERN stack, consisting of MongoDB, Express.js, React, and Node.js, offers developers a unified JavaScript environment for building powerful applications. MongoDB handles flexible document storage, Express streamlines backend routing, React builds rich user interfaces, and Node.js ensures scalable server-side performance. Beginners can start by setting up a simple project that integrates each of these technologies step by step. As you progress, understanding how data flows from the database to the frontend through REST APIs or GraphQL becomes crucial. This approach allows developers to design applications that are both fast and maintainable for real-world use.",
    authorName: "Mohammed Sufiyan Ansari",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    createdAt: "2025-09-28",
    cover:
      "https://images.unsplash.com/photo-1581091870622-7f3c1d1dc4d3?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 2,
    title: "Building REST APIs with Express and MongoDB",
    category: "Backend",
    subcategory: ["API", "Express", "MongoDB"],
    description:
      "Creating RESTful APIs using Express.js and MongoDB forms the backbone of most MERN stack applications. Express simplifies handling HTTP requests and responses, while MongoDB stores data in a flexible, JSON-like format. Together, they provide developers with the ability to create endpoints for user authentication, CRUD operations, and more. The APIs can then be consumed by a React frontend or even mobile applications. By applying middleware for authentication and validation, developers can ensure data security and consistency. This design approach allows scalability, making it perfect for modern applications with growing traffic and features.",
    authorName: "Aisha Khan",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    createdAt: "2025-09-25",
    cover:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 3,
    title: "State Management in React for MERN Projects",
    category: "Frontend",
    subcategory: ["React", "State", "Redux"],
    description:
      "Managing state efficiently is one of the biggest challenges in React applications. For small projects, hooks like useState and useContext may be enough. However, in large MERN projects, state often needs to be shared across multiple components and synchronized with backend APIs. Libraries like Redux, Zustand, or Recoil are commonly used to manage global state in a predictable way. Effective state management ensures that UI updates are consistent, debugging becomes easier, and the application performs smoothly. Developers must carefully choose between local and global state strategies based on project requirements for optimal results.",
    authorName: "Ravi Sharma",
    authorAvatar: "https://randomuser.me/api/portraits/men/12.jpg",
    createdAt: "2025-09-20",
    cover:
      "https://images.unsplash.com/photo-1633356122300-5c09ecfdb568?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 4,
    title: "Deploying MERN Applications on the Cloud",
    category: "Deployment",
    subcategory: ["Cloud", "Heroku", "Vercel"],
    description:
      "Deployment is the final step to making your MERN application available to users. Developers can host the frontend React application on platforms like Vercel or Netlify, while the backend Express and Node.js server can be deployed on services like Heroku or AWS. For databases, MongoDB Atlas offers a reliable cloud-hosted solution. Developers must also handle environment variables for security and configure build settings for production. Ensuring HTTPS, setting up CORS policies, and scaling server resources are key considerations. A successful deployment ensures the application remains fast, secure, and accessible for users worldwide.",
    authorName: "Neha Verma",
    authorAvatar: "https://randomuser.me/api/portraits/women/65.jpg",
    createdAt: "2025-09-18",
    cover:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 5,
    title: "Authentication and Authorization in MERN",
    category: "Security",
    subcategory: ["JWT", "OAuth", "Auth"],
    description:
      "Authentication and authorization are essential for protecting MERN applications. Authentication verifies user identity, while authorization ensures that users can only access permitted resources. Popular approaches include using JWT (JSON Web Tokens) for stateless authentication and OAuth for third-party logins like Google or GitHub. On the backend, Express middleware handles token validation, while MongoDB securely stores user credentials. React integrates with these systems by managing tokens in local storage or cookies. Properly implemented authentication not only secures data but also enhances user trust, making it a fundamental part of any production-ready MERN project.",
    authorName: "Arjun Patel",
    authorAvatar: "https://randomuser.me/api/portraits/men/77.jpg",
    createdAt: "2025-09-15",
    cover:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 6,
    title: "Using GraphQL with the MERN Stack",
    category: "Advanced",
    subcategory: ["GraphQL", "API", "Backend"],
    description:
      "GraphQL is becoming increasingly popular as an alternative to REST in MERN applications. Unlike REST, where multiple endpoints are required, GraphQL allows developers to request only the specific data needed with a single query. This makes it more efficient and flexible. Apollo Server integrates seamlessly with Express and Node.js, while Apollo Client works beautifully with React on the frontend. MongoDB can serve as the data source for GraphQL resolvers. By using GraphQL, developers can reduce over-fetching, improve performance, and provide a better developer experience when building large-scale applications.",
    authorName: "Sara Ali",
    authorAvatar: "https://randomuser.me/api/portraits/women/29.jpg",
    createdAt: "2025-09-12",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 7,
    title: "Error Handling Best Practices in MERN",
    category: "Backend",
    subcategory: ["Errors", "Debugging", "Node.js"],
    description:
      "Error handling is a vital part of backend development in MERN applications. In Node.js and Express, developers often use middleware to catch errors and return appropriate responses. Proper error handling ensures that unexpected issues are logged, users receive clear feedback, and the application remains stable. MongoDB errors, such as validation failures, must also be caught and handled gracefully. On the frontend, React components can display error messages or fallback UI. Implementing consistent error handling across the stack improves maintainability, enhances user experience, and helps developers debug faster when issues arise.",
    authorName: "Kabir Mehta",
    authorAvatar: "https://randomuser.me/api/portraits/men/83.jpg",
    createdAt: "2025-09-10",
    cover:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 8,
    title: "Performance Optimization in MERN Applications",
    category: "Performance",
    subcategory: ["Optimization", "React", "MongoDB"],
    description:
      "Performance optimization is crucial when scaling MERN applications for production use. On the backend, developers can use caching mechanisms like Redis to reduce database load. MongoDB queries should be optimized with proper indexing. On the frontend, React developers can use memoization, lazy loading, and code-splitting to improve performance. Minimizing network requests and compressing images also boost speed. Node.js applications benefit from clustering and load balancing for handling high traffic. By combining these strategies, MERN applications can deliver faster response times, reduce server costs, and provide users with a seamless experience even under heavy load.",
    authorName: "Ishita Gupta",
    authorAvatar: "https://randomuser.me/api/portraits/women/41.jpg",
    createdAt: "2025-09-07",
    cover:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a8?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 9,
    title: "Testing MERN Applications Effectively",
    category: "Testing",
    subcategory: ["Jest", "Mocha", "Integration"],
    description:
      "Testing ensures that MERN applications remain reliable as features are added or updated. Unit tests check individual functions, integration tests verify modules working together, and end-to-end tests simulate user interactions. React applications often use Jest and React Testing Library, while backend APIs can be tested with Mocha, Chai, or Supertest. MongoDB can be mocked for database tests. Automated testing improves developer confidence, reduces bugs in production, and speeds up development cycles. With proper test coverage, teams can release updates more frequently without fear of breaking existing functionality.",
    authorName: "Devansh Yadav",
    authorAvatar: "https://randomuser.me/api/portraits/men/25.jpg",
    createdAt: "2025-09-05",
    cover:
      "https://images.unsplash.com/photo-1581090700227-4c4c12f42b1b?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: 10,
    title: "Real-Time Features in MERN Using WebSockets",
    category: "Advanced",
    subcategory: ["WebSockets", "Realtime", "Node.js"],
    description:
      "Adding real-time features like chat, notifications, or live updates greatly enhances user engagement in MERN applications. WebSockets provide a persistent connection between client and server, enabling instant communication. Socket.IO is a popular library that integrates easily with Express and Node.js. On the frontend, React components can subscribe to WebSocket events and update the UI dynamically. MongoDB change streams can also be used to trigger real-time updates when data changes. These capabilities make MERN applications suitable for collaborative platforms, gaming apps, and dashboards where instant feedback is critical for user experience.",
    authorName: "Fatima Sheikh",
    authorAvatar: "https://randomuser.me/api/portraits/women/53.jpg",
    createdAt: "2025-09-02",
    cover:
      "https://images.unsplash.com/photo-1556767576-cfba5f2ee9cb?auto=format&fit=crop&w=1080&q=80",
  },
];
