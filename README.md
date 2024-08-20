# Clinics doctor booking and appointment application

## 🚀 Getting Started

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/dommymogeni/clinics.git
cd clinics
npm install
```

### 2. Configure your local environment

Create a .env file in the root directory that contains the

```bash
touch .env
cat .env
AUTH_SECRET="your-auth-secret"
DATABASE_URL="your-database-connection-string for port:6543"
DIRECT_URL="your-database-connection-string for port:5432"
```

Make sure to fill out every env variable. Also, don't forget to add environment variables to configure any of the [supported providers](https://authjs.dev/reference/core/providers) for Auth.js login.

### 3. Start the application

To run your site locally, use:

```bash
npm run dev
```

on your local machine web browser visit [http://localhost:3000/](http://localhost:3000/) to vivew your site that has been compiled

### 3. Start the application

To view hosted version of the web application visit this:[https://clinics-ruby.vercel.app](https://clinics-ruby.vercel.app)

# Refrences

### 1. Auth js authentatication

Auth.js
Authentication for the Web.
Free and open source.
| title | Link refrence |
| :--- | :---- |
| Authentication for the web | [https://authjs.dev/](https://authjs.dev/) |
| prisma adapter and schema setup | [https://authjs.dev/getting-started/adapters/prisma](https://authjs.dev/getting-started/adapters/prisma) |
| prisma edge compatibility | <ol> <li>[https://authjs.dev/guides/edge-compatibility](https://authjs.dev/guides/edge-compatibility)</li><li>[https://www.fjobeir.com/using-nextauthrequest-in-nextjs-middleware/](https://www.fjobeir.com/using-nextauthrequest-in-nextjs-middleware/) </li><li>[https://github.com/umairjameel321/authjsv5nextjs/blob/main/auth.ts](https://github.com/umairjameel321/authjsv5nextjs/blob/main/auth.ts)</li><li>[https://github.com/ndom91/authjs-prisma-edge-example/blob/main/README.md?plain=1](https://github.com/ndom91/authjs-prisma-edge-example/blob/main/README.md?plain=1)</li></ol> |

## 📝 License

MIT
