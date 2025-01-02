export interface Work {
  project: String;
  description: String;
  priority: number;
  completed: boolean;
  createdDate: Date;
  completedDate: Date;
}

// Example work list
export const workList: Work[] = [
  {
    project: "Build RESTful API",
    description: "Develop a RESTful API using Node.js and Express for the e-commerce platform.",
    priority: 8,
    completed: false,
    createdDate: new Date(Date.now()),
    completedDate: new Date(Date.now()),
  },
  {
    project: "Frontend Redesign",
    description: "Redesign the user interface using React and improve user experience.",
    priority: 7,
    completed: false,
    createdDate: new Date(Date.now()),
    completedDate: new Date(Date.now()),
  },
  {
    project: "Database Optimization",
    description: "Optimize MongoDB queries to enhance application performance.",
    priority: 6,
    completed: true,
    createdDate: new Date(Date.now()),
    completedDate: new Date(Date.now()),
  },
  {
    project: "Authentication",
    description: "Add JWT-based authentication to secure the application endpoints.",
    priority: 9,
    completed: false,
    createdDate: new Date(Date.now()),
    completedDate: new Date(Date.now()),
  },
  {
    project: "Write Unit Tests",
    description: "Create comprehensive unit tests for the service layer using Jest.",
    priority: 3,
    completed: true,
    createdDate: new Date(Date.now()),
    completedDate: new Date(Date.now()),
  },
  {
    project: "Set Up CI/CD Pipeline",
    description: "Configure Continuous Integration and Continuous Deployment using GitHub Actions.",
    priority: 7,
    completed: false,
    createdDate: new Date(Date.now()),
    completedDate: new Date(Date.now()),
  },
];
