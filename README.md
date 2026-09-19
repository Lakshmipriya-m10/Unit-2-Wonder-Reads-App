# 📚 Wonder Reads App                                                                            
[![By Lakshmi Priya](https://img.shields.io/badge/By-Lakshmi%20Priya-purple?style=for-the-badge)](#)

# Wonder Reads: Full-Stack Reading & Storytelling Application

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=333333)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=333333)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css3&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Text-to-Speech](https://img.shields.io/badge/Text--to--Speech-4285F4?style=for-the-badge&logo=googleassistant&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![React Swiper](https://img.shields.io/badge/React_Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Session Storage](https://img.shields.io/badge/SessionStorage-000000?style=for-the-badge&logo=googlechrome&logoColor=white)

**Wonder Reads** is a full-stack web application that makes reading practice more engaging through stories, narration, quizzes, creative writing, and interactive games.

**Navigation:** [About](#-about-the-project) • [Features](#-features) • [Key Visuals](#-key-visuals) • [Tech Stack](#️-tech-stack) • [Installation](#-prerequisites--installation) • [Database](#️-database-structure) • [API](#️-api-endpoints) • [Future Features](#-future-features)

---

## 💡 About the Project

Wonder Reads is designed for children developing reading confidence, vocabulary, and comprehension skills. Users can sign in, browse reading levels, open stories for Grades 1–5, view story images, listen with the browser's speech-synthesis API, answer story-based quizzes, submit their own stories, and explore learning games. The React and Vite frontend communicates with a Java Spring Boot REST API, while Spring Data JPA/Hibernate persists application data in MySQL. The project demonstrates full-stack development through client-side routing, protected pages, asynchronous API requests, form validation, REST controllers, JPA entity relationships, database configuration, and interactive React state management. It is developed as part of a LaunchCode Unit 2 software development learning experience.

> The current application is configured for local development. A live demo is not currently available.

---

## 🎨 Features

### 📚 Reading Experience

- Browse reading-level cards loaded from `GET /api/readinglevels`.
- Navigate to separate reading pages for Grades 1, 2, 3, 4, and 5.
- Load stories from the Spring Boot API and filter them by grade in the frontend.
- Display story text and one or more story images with Swiper navigation and pagination.
- Use browser text-to-speech controls to read, pause, resume, and stop a story.

### ✍️ Create Your Own Story

- Submit a name, email address, ten-digit contact number, and story through the Create Your Story form.
- Save submitted stories and associate them with a `Student` record through the backend.
- View submitted stories on the Own Stories page.
- Edit or delete own-story records through the existing admin-controlled backend endpoints. The current backend requires the `Student-Id` header and an `ADMIN` role for `PUT` and `DELETE`.

### 🧠 Quizzes & Learning Games

- Select a story and load its related quiz questions and answer choices.
- Submit answers, view correct/wrong feedback, restart a quiz, and receive star rewards for correct answers.
- Play the Pokémon Memory Flip matching game.
- Open Butterfly Catch and Fruit Slice from the MiniGames page; their current components display a “Coming Soon” screen rather than playable games.

### 🎁 Interactive Experience

- Login feedback is shown in a dialog when credentials are rejected or the backend cannot be reached.
- Protected routes redirect users to the home page until `sessionStorage.isLoggedIn` is set.
- Logout clears the current browser session flag and returns to the home page.
- Responsive navigation includes a hamburger menu for smaller layouts.
- Font Awesome icons are used for controls such as password visibility and logout.

  ### 🔐 Frontend Security

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Session Storage](https://img.shields.io/badge/SessionStorage-000000?style=for-the-badge&logo=googlechrome&logoColor=white)

- Protected routes using React Router `ProtectedRoute`
- Login state stored using browser `sessionStorage`

### 📱 Responsive Design
The frontend includes responsive CSS files and a hamburger navigation state for smaller screens. Story pages use flexible layouts and Swiper carousels; exact visual behavior depends on the browser viewport and the current CSS.

<details open>

## 📸 Key Visuals

### Wireframes / Site Map

https://www.figma.com/design/5UibCHtWJ4fx6YLPEDUQNM/Unit-1-WonderReads--Wireframe?node-id=103-194&t=bdhasLxcfeWEPDSj-0

### Application Screenshots

#### Home Page

<summary>Home & Reading Pages</summary>

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789775766/Home_ugst6a.png" alt="Screenshot of Wonder Reads Home Page" height="500px" />

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789784816/Reading_ibulrl.png" alt="Screenshot of Grade 1 Reading Page" height="500px" />

</details>

<details>
<summary>About Page</summary>

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789776435/About_cbduu4.png" alt="Screenshot of About Page" height="500px" />

</details>

<summary>Grade 1 to Grade 5 Reading Pages</summary>

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789776436/story-Grade1_q7fbrh.png" alt="Screenshot of Wonder Reads Home Page" height="500px" />

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789784516/Grade_2_xgulrs.png" alt="Screenshot of Grade 1 Reading Page" height="500px" />

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789784516/Grade_3_tzqd0v.png" alt="Screenshot of Wonder Reads Home Page" height="500px" />

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789784516/Grade_4_qrrqhh.png" alt="Screenshot of Grade 1 Reading Page" height="500px" />

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789784516/Grade_5_spokgm.png" alt="Screenshot of Wonder Reads Home Page" height="500px" />

</details>

<details>
<summary>Quiz</summary>

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789775767/Quiz_f4ufjq.png" alt="Screenshot of Quiz Page" height="500px" />

</details>

<details>
<summary>Own Stories-Admin Page</summary>

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789776435/own-stories_rih5qh.png" alt="Screenshot of Own Stories Page" height="500px" />

</details>

<details>
<summary>Own Stories - Student Page</summary>

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789784204/student-page_vhwymm.png" alt="Screenshot of Educational Games Page" height="500px" />

</details>

<details>
<summary>Own Story Form</summary>

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789776534/storyform_nx2gc7.png" alt="Screenshot of Educational Games Page" height="500px" />

</details>

<details>
<summary>Memory Game</summary>

<img src="https://res.cloudinary.com/o7vbtffn/image/upload/v1789775766/Game_mnoq9h.png" alt="Screenshot of Educational Games Page" height="500px" />

</details>



<!-- Add screenshot here -->

#### Story Reading Page

<!-- Add screenshot here -->

#### Quiz / Games

<!-- Add screenshot here -->

#### Create Your Own Story

<!-- Add screenshot here -->

#### Own Stories

<!-- Add screenshot here -->

---

## 🛠️ Tech Stack

### Front End

| Technology | Purpose |
| --- | --- |
| React 19 | Builds the application UI from reusable components. |
| JavaScript | Implements frontend behavior, state, form handling, and API requests. |
| Vite | Provides the frontend development server and production build scripts. |
| React Router DOM | Handles client-side navigation and protected routes. |
| CSS | Styles page layouts, forms, navigation, games, cards, and responsive behavior. |
| Swiper | Provides story image carousels with navigation and pagination. |
| Font Awesome React | Provides icons used in the interface. |
| Vitest | Runs the frontend test file included in the repository. |
| Cloudinary-hosted media | Supplies image and video URLs referenced directly by frontend components. |

### Back End & Database

| Technology | Purpose |
| --- | --- |
| Java 17 | Backend programming language. |
| Spring Boot 4.1.1 | Runs the backend application and REST API. |
| Spring Web MVC | Provides REST controllers and HTTP endpoint handling. |
| Spring Data JPA | Provides repository-based persistence for the entities. |
| Hibernate | Implements the JPA ORM behavior and schema updates. |
| MySQL Connector/J | Connects the Spring application to MySQL at runtime. |
| MySQL | Stores students, stories, reading levels, quiz data, and submitted stories. |
| Spring Security | Configures the security filter chain, CORS, CSRF behavior, and request authorization. |
| Maven Wrapper | Provides the project-local Maven startup command. |
| JUnit / Spring Boot Test | Provides the backend context test included in `src/test`. |

---

## 🚀 Prerequisites & Installation

### Prerequisites

- Git
- Node.js and npm
- JDK 17
- MySQL Server
- A modern browser; speech-synthesis support is required for browser narration

### Clone the Repository

```bash
git clone https://github.com/Lakshmipriya-m10/Unit-2-Wonder-Reads-App.git
cd Unit-2-Wonder-Reads-App
```

### Backend Setup

1. Create the MySQL database:

   ```sql
   CREATE DATABASE `wonderreads-api`;
   ```

2. Open `Wonder-Reads-BackEnd/src/main/resources/application.properties`.

3. Set your local MySQL username and password. Do not commit real credentials:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/wonderreads-api
   spring.datasource.username=YOUR_MYSQL_USERNAME
   spring.datasource.password=YOUR_MYSQL_PASSWORD
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
   ```

4. Start Spring Boot from the backend directory:

   ```powershell
   cd Wonder-Reads-BackEnd
   .\mvnw.cmd spring-boot:run
   ```

The backend is configured to use port `8080` through the frontend's API URLs. The project does not include database seed or migration files, so the required records must be added to the local database separately.

### Frontend Setup

Open a second terminal at the repository root:

```powershell
cd Wonder-Reads-FrontEnd
npm install
npm run dev
```

Vite normally serves the frontend at `http://localhost:5173`. The backend CORS configuration explicitly allows localhost origins, and the frontend currently requests the API at `http://localhost:8080`.

### Running Both Applications

Keep both processes running:

| Application | Command | Local address |
| --- | --- | --- |
| Spring Boot API | `.\mvnw.cmd spring-boot:run` | `http://localhost:8080` |
| React/Vite frontend | `npm run dev` | `http://localhost:5173` |

The frontend and backend must run at the same time for login, reading-level data, stories, quizzes, and submitted-story features to work.

### Frontend Commands

```bash
npm run dev
npm run build
npm run lint
npm run test
npm run preview
```

---

## 🗄️ Database Structure

The database structure is defined by the JPA entities in `Wonder-Reads-BackEnd/src/main/java/org/example/wonderreadsapi/model/`. Hibernate is configured with `spring.jpa.hibernate.ddl-auto=update`.

| Entity | Important fields | Relationship |
| --- | --- | --- |
| `Student` | `id`, `name`, `email`, `contactNo`, `username`, `password`, `role` | One `Student` has many `OwnStory` records through `@OneToMany`; each `OwnStory` belongs to one `Student` through `@ManyToOne`. |
| `OwnStory` | `storyId`, `story`, `student` | Many `OwnStory` records can reference one `Student` using the `student_id` join column. |
| `Story` | `id`, `title`, `Grade`, `Text`, `image`, `questions` | One `Story` has many `QuizQus` records through `@OneToMany`; each quiz question belongs to one story through `@ManyToOne`. |
| `ReadingLevel` | `id`, `title`, `lexile`, `grade`, `image`, `link` | Standalone reading-level records used to build the frontend reading cards. |
| `QuizQus` | `id`, `question`, `correctAnswer`, `story`, `answers` | Many quiz questions can belong to one `Story`; one question has many `QuizAns` records. |
| `QuizAns` | `id`, `answer`, `question` | Many answer choices can belong to one `QuizQus` through the `question_id` join column. |

The project uses `@OneToMany` and `@ManyToOne` relationships. No `@OneToOne` or `@ManyToMany` relationships are defined in the inspected entity classes.

### Entity Relationship Diagram

<!-- Add ERD image here -->

`[Add ERD image or link here]`

---

## ⚙️ API Endpoints

All controller classes are located in `Wonder-Reads-BackEnd/src/main/java/org/example/wonderreadsapi/controller/`. The frontend currently calls these endpoints using the local backend base URL `http://localhost:8080`.

### Login

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/login` | Checks a submitted username and password and returns login details when valid. |
| `PATCH` | `/api/login/{id}` | Updates a student's username and/or password when those fields are provided. |

### Stories

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/stories` | Retrieves all `Story` records. |
| `GET` | `/api/stories/{id}` | Retrieves one story by ID, including its related questions. |
| `POST` | `/api/stories` | Creates a story from a request body. |
| `PUT` | `/api/stories/{id}` | Updates a story's title, grade, text, and image. |
| `DELETE` | `/api/stories/{id}` | Deletes a story by ID. |

### Reading Levels

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/readinglevels` | Retrieves all reading levels. |
| `GET` | `/api/readinglevels/{id}` | Retrieves one reading level by ID. |
| `POST` | `/api/readinglevels` | Creates a reading level. |
| `PUT` | `/api/readinglevels/{id}` | Updates a reading level's title, Lexile value, grade, image, and link. |
| `DELETE` | `/api/readinglevels/{id}` | Deletes a reading level by ID. |

### Quiz Questions

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/quiz` | Retrieves all quiz questions. |
| `GET` | `/api/quiz/story/{storyId}` | Retrieves quiz questions associated with a story. |
| `POST` | `/api/quiz` | Creates a quiz question. |
| `DELETE` | `/api/quiz/{id}` | Deletes a quiz question by ID. |

### Own Stories

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/own-stories` | Retrieves all submitted stories. |
| `GET` | `/api/own-stories/{id}` | Retrieves one submitted story by ID. |
| `POST` | `/api/own-stories` | Creates a submitted story and finds or creates its `Student` by email. |
| `PUT` | `/api/own-stories/{id}` | Updates the story text; the controller requires a `Student-Id` header and an `ADMIN` student role. |
| `PATCH` | `/api/own-stories/{id}` | Partially updates the story text when the request contains a `story` field. |
| `DELETE` | `/api/own-stories/{id}` | Deletes a submitted story; the controller requires a `Student-Id` header and an `ADMIN` student role. |

Example create-story request based on `OwnStoryDto`:

```json
{
  "name": "Reader Name",
  "email": "reader@example.com",
  "contactNo": "1234567890",
  "story": "Once upon a time..."
}
```

---

## 🧪 Testing

The repository contains both frontend and backend test files:

| Area | Framework/file | What is present |
| --- | --- | --- |
| Frontend | Vitest, `Wonder-Reads-FrontEnd/src/App.test.jsx` | A small test that verifies a basic arithmetic expectation. |
| Backend | JUnit 5 / Spring Boot Test, `Wonder-Reads-BackEnd/src/test/java/org/example/wonderreadsapi/WonderreadsApiApplicationTests.java` | A `contextLoads` test for starting the Spring application context. |

For manual testing, run both applications and use a browser to test login, protected navigation, reading pages, text-to-speech controls, quizzes, story submission, own-story management, logout, and the memory game. Postman can be used to exercise the REST endpoints with JSON request bodies and the `Student-Id` header required by the admin-controlled own-story operations.

No coverage percentage or broad automated feature coverage is claimed.

---

## 🔧 Debugging & Problem Solving

- **Frontend/backend communication:** The frontend uses local `http://localhost:8080` API URLs, while `CorsConfig` allows localhost origins and common request methods so the Vite frontend can communicate with Spring Boot during development.
- **Database setup:** `application.properties` makes the MySQL database name, username, password, JDBC driver, and Hibernate schema-update behavior explicit for local setup.
- **JPA relationships:** `Story`, `QuizQus`, and `QuizAns` use eager collections for the story/quiz response shape used by the quiz page. `OwnStory` and `Student` use a join column and JSON ignore behavior to avoid serializing the inverse collection.
- **React fetch states:** Data-driven pages maintain loading, error, empty, and success states in the components where those states are needed, including story loading and quiz selection.
- **Story input limits:** The story form limits submitted text to 800 characters, while the `OwnStory` entity stores the story column with a 700-character limit. These limits should remain aligned before longer stories are supported.

---

## 🔐 Application Architecture

```text
React + Vite frontend
          ↓
     REST API calls
          ↓
Spring Boot controllers
          ↓
Spring Data repositories
          ↓
    JPA / Hibernate
          ↓
       MySQL
```

- **React frontend:** Renders pages and reusable components, manages browser state, handles forms, protects routes, and calls the backend with `fetch`.
- **Controllers:** `LoginController`, `Storycontroller`, `ReadingLevelController`, `QuizQusController`, and `OwnStoryController` expose the REST API.
- **DTOs:** `LoginDto` and `OwnStoryDto` define request data for login and own-story creation/update flows.
- **Repositories:** Spring Data repositories persist and retrieve the entity classes.
- **Models/entities:** `Student`, `OwnStory`, `Story`, `ReadingLevel`, `QuizQus`, and `QuizAns` map application data to MySQL tables.
- **Configuration:** `CorsConfig` configures CORS, disables CSRF for this API configuration, and permits requests through the current security filter chain.

The backend does not contain a separate service package in the inspected source tree; controller classes call repositories directly.

---

## 🔮 Future Features

The following are future ideas, not completed features:

- Complete the Butterfly Catch and Fruit Slice games.
- Replace direct password comparison with password hashing and a stronger authentication/session or token strategy.
- Add more granular authorization and user ownership checks for submitted stories.
- Move API and database settings to environment-based configuration for deployment.
- Add database migrations and seed data for easier setup.
- Add more story search, filtering, favorites, bookmarks, and reading-progress features.
- Persist quiz scores and student learning progress.
- Expand automated frontend and backend endpoint tests.
- Improve keyboard, screen-reader, and other accessibility support.
- Deploy the frontend and backend with production configuration.

---

## 👩‍💻 Developer

**Lakshmi Priya**

- GitHub: [Lakshmipriya-m10](https://github.com/Lakshmipriya-m10)

