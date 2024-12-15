export interface Work {
  project: String;
  description: String;
  priority: number;
  completed: boolean;
}

// Example work list
export const workList: Work[] = [
  {
    project: "Build RESTful API",
    description: "Develop a RESTful API using Node.js and Express for the e-commerce platform.",
    priority: 8,
    completed: false,
  },
  {
    project: "Frontend Redesign",
    description: "Redesign the user interface using React and improve user experience.",
    priority: 7,
    completed: false,
  },
  {
    project: "Database Optimization",
    description: "Optimize MongoDB queries to enhance application performance.",
    priority: 6,
    completed: true,
  },
  {
    project: "Implement Authentication",
    description: "Add JWT-based authentication to secure the application endpoints.",
    priority: 9,
    completed: false,
  },
  {
    project: "Write Unit Tests",
    description: "Create comprehensive unit tests for the service layer using Jest.",
    priority: 5,
    completed: true,
  },
  {
    project: "Set Up CI/CD Pipeline",
    description: "Configure Continuous Integration and Continuous Deployment using GitHub Actions.",
    priority: 7,
    completed: false,
  },
  {
    project: "Integrate Payment Gateway",
    description: "Integrate Stripe payment gateway to handle transactions securely.",
    priority: 8,
    completed: false,
  },
  {
    project: "Mobile App Development",
    description: "Develop a cross-platform mobile app using Flutter for better accessibility.",
    priority: 6,
    completed: false,
  },
  {
    project: "Refactor Legacy Code",
    description: "Refactor and improve the maintainability of the existing legacy codebase.",
    priority: 4,
    completed: true,
  },
  {
    project: "Deploy to Cloud",
    description: "Deploy the application to AWS using Docker and Kubernetes for scalability.",
    priority: 9,
    completed: false,
  },
];
