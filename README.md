# SIT737-2025-prac2p

## Cloud Native Application Development - 2.1P Task

This repository contains a simple project developed as part of the assignment for the unit **Cloud Native Application Development (SIT737)**. The purpose of this practical task is to gain hands-on experience in:

- Setting up and managing a Git repository.
- Creating a simple web server using Node.js.
- Serving an HTML web page using the Express framework.

---

## Project Setup

### Prerequisites

Before we run the project, ensure that the following tools are installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Git](https://git-scm.com/)
-  code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/))

### Installation

1. Clone this repository to  local machine:

```bash
git clone https://github.com/Tillu6/sit737-2025-prac2p.git
cd sit737-2025-prac2p
```

2. Install the project dependencies:

```bash
npm install
```

---

## Running the Project

To start the server, run the following command in  terminal:

```bash
node server.js
```

After running, our server will be accessible via:

```
http://localhost:3000
```

Open any browser and visit the above URL to view our simple HTML page served using Node.js and Express.

---

## Explanation of the Code

### `server.js`

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Listens on the specified port (3000)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
```

- **Express Framework**: Used for simplifying server creation and routing.
- **Static Files**: `app.use(express.static('public'));` instructs Express to serve static files (like HTML, CSS, JS) from the `public` directory.
- **Port**: The server listens on port `3000`, which can be accessed via `http://localhost:3000`.

### `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Simple Web Page</title>
</head>
<body>
    <h1>Hello from SIT737!</h1>
    <p>This page is served using Node.js and Express.</p>
</body>
</html>
```

- This HTML file provides a basic web page structure to demonstrate serving static content using Node.js and Express.

---

## Repository Structure

```
sit737-2025-prac2p/
├── node_modules/
├── public/
│   └── index.html
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## Author

SAKETH REDDY POREDDY - SIT737 Cloud Native Application Development

---

