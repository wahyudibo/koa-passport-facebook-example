## Login with Facebook API using Koa & Passport Facebook

### Build Instruction
- clone repo
- install dependencies using `yarn` or npm install
- copy `.env.example` and rename it to `.env`
- set your configuration in `.env`
- start program using `npm start`

### Available Endpoint
Notes: this endpoint is prefixed with `/api` and use `GET` method
- `/` : default route. Will provide user info if it's login already or will tell you if you're not login yet
- `login` : will redirect you to facebook authorization page or to `success` if you're already authorized this app
- `success` : this page will display user info. Will redirect to this page after successful login
- `logout` : logout from this app

### Notes
For FB_CLIENT_ID & FB_CLIENT_SECRET, you must first create an app in your facebook developer account or you can use mine, just ask and I will provide it (probably)
