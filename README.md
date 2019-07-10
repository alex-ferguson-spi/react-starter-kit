# react-starter-kit

This is a react-starter-kit that follows the technology roadmap detailed by Digilock.

## Getting Started with Development

0. Install [Node.js](https://nodejs.org/en/) (use LTS please) if you haven't yet. Based on your editor, install ESLint and Prettier for it.

1. Clone this repo

1. Run

```
npm install
```

to install dependencies

3. Run

```
npm run dev
```

to start the project on PORT 3000

### Prerequisites

Git, [Node.js & NPM](https://nodejs.org/en/)

### Browser Support

IE11, Chrome, Edge, and Safari for iPhone/iPad. It can probably work for other browsers

## Running the Tests

In your terminal, run

```
npm run test
```

to start the Jest/React-Testing-Library suite.

## Coding Style

.eslintrc.json contains most of the linting rules including accessibility.
.prettierrc is an empty object but if we want to enforce certain rules such as width and quotes, .prettierrc is where it happens

For VSCode, to have linter and prettier working, enable 2 settings to true within your preferences:

1. Eslint: Auto Fix On Save

2. Prettier: Require Config

The 1st one will run the linter/prettier every time you save. If you don't wish to do this and instead run a command from the cli, disable this setting and instead run

```
npm run lint
```

The second one will enable the on save formatting if the project's root has a .prettierrc file. This is to ensure that if your don't want a file to be formatted (like a quick and dirty JS file to test something), that it won't.

## Deployment on Production

⚠️ ⚠️ NOTE, running the below command will erase all files in the dist folder. BACKUP previous builds if you care about them since they are NOT pushed to github ⚠️ ️⚠️

For production,

1. Run

```
npm run build
```

This will use webpack to build the app and insert the new build files into the dist folder.

3. Download [issnode](https://github.com/Azure/iisnode), this allows us to use IIS to deploy Node.js apps

4) Download [URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite), this allows us to use different routing for our Node.js app (apparently, Express and React Routing doesn't work well with IIS's native URL routing tool)

5. Open IIS and create a site that directs to the folder root where user-interface exists and with your name (I named mine "one-member-view"), port, and hostname of your choosing

6) Start the website and open it up on localhost

6a. If you get a 503 error, check IIS's Application Pool to see if the site is stopped. If so, start it.

6b. If you still get an error, follow this [video guide](https://www.youtube.com/watch?v=JUYCDnqR8p0)

## Flow of the Code

File and folder structure somewhat based off of this [article](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) and [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)

Back End:

1. client: Where front-end React code lives

2) models: contains the API endpoints for retrieving and posting data

3. routes: contains the frontend endpoints that will hit API calls in models

4)  utils: has utility/helper functions such as data transformations NOTE: Data Transformations for APIs so probably be in a controller folder but ehhhh

5. server.js: starts up the Node.js server with Express, this will serve up the code in the client folder

Front End (client folder):

1. build: contains static files of all the client files, used for production

2) node_modules: all of the dependencies

3. public: where index.html, favicon (icon on the tab in the browser), and manifest exist. index.html has a div element with an id of root that loads the react code within the src folder. Note: index.html is where you would include CDNs such as Bootstrap.

4) src: Where React code is contained


    A. actions: Redux actions are stored, typically where logic of store/state changes happen



    B. assets: Images



    C. components: Atoms, Molecules, and Organisms are stored here



      a. common: Atoms and maybe Molecules stored here, should be very simple and dumb components



      b. ...rest: Molecules and Organisms stored here, can be Smarter and can connect with Redux



    D. reducers: where reducers are stored, should not contain too much logic. Note that reducers don't have to be 1:1 with actions. Think of Reducers files as keys in your store, if you have one though, the state is gives back will just be the store. If there is more than one Reducer, then it is recommended to use combineReducers which will then create multiple objects of each Reducer in store



    E. sagas: middleware layer that listens for actions and runs async API calls. Similar to actions but has better handling of API calls



    F. store: where store and localStorage files live



    G. utils: contains simple utility/helper functions, should NOT be connected to Redux



    G. App files: 2nd file that is loaded when app starts, App.js contains much logic



    H. index files: 1st file that is loaded when app starts, index.js loads stores, index.css has some central css



    I. serviceWorker.js: TBA (can load website offline but not really useful for this app)

5. .env files: where environment variables are stored, when Node uses the build files, it will first load .env then load .env.production which can override env variables in .env. If react code just launches with npm run start, .env is read and then .env.development is read where it can override env variables in .env

6) .eslintrc.js: where linter is stored, it is ESLint

7. package.json: where versioning of node_modules is stored as well as npm scripts

## Bugs

If you experience bugs trying to run the app, delete the node_modules and run

```
npm install
```

Sometimes, npm can cause issue and clearing node_modules can help with stabilizing packages like React.

If problems persist, try clearing the cache of npm with

```
npm cache clean
```

If it is not working still, contact [Alex Ferguson](alex.ferguson@digilock.com)

## Contributing

There are certain principles to coding in React that don't necessarily have to be followed.
I included a linter that will help guide you but as long as you are not merging breaking changes to master, we should be a-okay.
Just try to follow DRY and keep components pure and simple though don't follow DRY to a t (Kent C. Dodds has a good [blog post](https://kentcdodds.com/blog/aha-programming) about it).

Please stick to NPM, Yarn is great and NPM is evil since they fired their workers for lame reasons but still, NPM is the de facto and I predict it will be around longer than Yarn (though if GitHub does their package distribution well, I'd be down to switch then)

Again, do NOT merge BREAKING changes to master and do NOT work directly on master. Incase if you do, follow this [link](https://ohshitgit.com/).

## Built With

- [React](https://reactjs.org/) - Web framework
- [React-axe](https://github.com/dequelabs/react-axe) - Accessibility for React based off of [axe-core](https://www.deque.com/axe/) under deque
- [Babel](https://babeljs.io/) - JavaScript complier for ES6+ to ES5
- [Webpack](https://webpack.js.org/) - JavaScript bundler
- [Axios](https://github.com/axios/axios) - HTTP client, arguably better than fetch
- [ESLint](https://eslint.org/) - JavaScript/JSX linter
- [NPM](https://www.npmjs.com/) - Package/dependency manager

## Influences

- [Creating a React Starter Kit](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
- [Using React Context over Redux](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [Integrating ESLint and Prettier in React](https://frontendmasters.com/courses/complete-react-v5/npm-generating-a-package-json-file/)
- [Accessibility in React with Linting and console logging](https://web.dev/accessibility-auditing-react)
- Setting up Webpack: [Link 1](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/), [Link 2](https://www.robinwieruch.de/webpack-advanced-setup-tutorial/)
- [README Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

## Authors

- **Alex Ferguson** - _BDFL_ - [Email](alex.ferguson@digilock.com)
