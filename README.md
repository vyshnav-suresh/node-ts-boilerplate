# Node-TS-Boilerplate

A robust and scalable boilerplate for building RESTful APIs using **Node.js**, **TypeScript**, and **MongoDB**. This project is designed for quick setup and efficient backend development, following best practices for clean architecture and modular design.

---

## Features

- **TypeScript**: Provides type safety and modern JavaScript features.
- **Express.js**: Lightweight and fast web framework for API development.
- **MongoDB Integration**: Pre-configured with Mongoose for seamless database interactions.
- **Modular Architecture**: Well-structured folder hierarchy for scalability.
- **Pre-built Middlewares**:
  - Centralized error handling.
  - Logger with timestamps in IST.
- **Environment-based Configuration**: Supports `.env` files for environment variables.
- **Ready-to-Extend**: Easily add new models, routes, and services.

---

## Tech Stack

- **Node.js**
- **TypeScript**
- **Express.js**
- **Mongoose**

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/node-ts-boilerplate.git
   cd node-ts-boilerplate
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory and add the following:
   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/your_database
   NODE_ENV=development
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   Your Node.js API server will be running at `http://localhost:5000`.
5. Build and run in production:
   ```bash
   npm run build
   npm start
   ```

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the server in development mode |
| `npm run build` | Build the project for production     |
| `npm start`     | Start the server in production mode  |
| `npm run lint`  | Run ESLint to check code quality     |

---

## API Endpoints

### Base URL: `/api`

#### User Endpoints:

| Method   | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/users`     | Fetch all users   |
| `POST`   | `/users`     | Create a new user |
| `GET`    | `/users/:id` | Get user by ID    |
| `PUT`    | `/users/:id` | Update user by ID |
| `DELETE` | `/users/:id` | Delete user by ID |

---

## Middleware

### Logger

Logs API requests with timestamps in **Indian Standard Time (IST)**.

### Error Handler

Handles all uncaught errors and sends structured error responses.

---

## How to Extend

1. **Add a New Model**:

   - Create a new file in `models/`.
   - Define the schema using Mongoose.

2. **Add a New Controller**:

   - Implement request handling logic in `controllers/`.

3. **Add a New Route**:

   - Define the route in `routes/` and link it to the controller.

4. **Add Business Logic**:
   - Use `services/` for complex logic to keep controllers lean.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Future Enhancements

- Add support for other databases (MySQL, PostgreSQL, etc.).
- Integrate user authentication and authorization (e.g., JWT).
- Containerize with Docker.
- Add unit tests with Jest.

---

## Support

If you encounter any issues, feel free to open an issue on GitHub.
