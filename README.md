## Fabledose Demo
Welcome to the Fabledose Demo project! This application showcases a library of animated books designed to engage children in reading.

### Overview

This project is built using [Next.js](https://nextjs.org/), a powerful React framework for server-side rendering and generating static websites. It was initialized with `create-next-app`.

### Prerequisites

Ensure you have the following installed on your machine:
* Node.js: v20.11.0 (recommended to use [NVM](https://github.com/nvm-sh/nvm))
* Next.js: v14.0.4
* React: v18.x

### Node Version Management

To manage the Node.js version, use [NVM](https://github.com/nvm-sh/nvm). Run the following command in the root of the project to install the correct Node.js version as specified in the `.nvmrc` file:

```
nvm install
```

### Setting Up the Environment

You need to create an `.env` file in the root directory and populate it with the necessary environment variables:

```dotenv
APP_ENVIRONMENT=
SPACE_ID=
PREVIEW_TOKEN=
DELIVERY_TOKEN=
```

### Getting Started

Follow these steps to run the development server:

1. Install the dependencies:
```
npm install --legacy-peer-deps
```
2. Start the development server:
```
npm run dev
```
3. Open http://localhost:3000 in your browser to see the application in action.

### Additional Resources

To learn more about Next.js and its features, refer to the following resources:
* [Next.js Documentation](https://nextjs.org/docs) - Comprehensive documentation on Next.js.
* [Learn Next.js](https://nextjs.org/learn) - An interactive tutorial to get started with Next.js.

### Feedback and Contributions

We welcome your feedback and contributions! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.