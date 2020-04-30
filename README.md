# Dynamic templating test

## Instructions

### Iteration 0: Setup

1. Clone the app
2. Navigate to the `dynamic-templating-test` folder
3. Run `npm i` (the same as `npm install`)
4. Install dependencies: `express` and `hbs` npm packages

```shell
$ npm i express hbs
```

5. Install dev dependency: `nodemon`

```shell
$ npm i nodemon --save-dev
```

6. Run the app: `nodemon server.js`

### Iteration 1: List all students

1. Export array of students from the `exam-info.js` file
2. Create new route pointing to the home (`/`), that should list all the students who took the exam. You have to create an `hbs` file where you can iterate over array of students (when you pass that array to the view through the route).

### Iteration 2: List students who passed the exam

1. Create a new route `/results`, and list all the students who passed the test and their score.
2. These students, who passed, should be in descending order based on their score.

<br/>

**Happy coding!** :heart:
