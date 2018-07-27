# IRMS
A simple incident report management system.

# TODOS
* Add support for custom organizations.
* Add authorization. Currently, users can edit and delete reports they didn't create.
* Some sort of Organization moderator system.

# Running the project
1. In the root directory of the project, run `npm install`
2. In the root directory of the project, run `node app.js`
3. Open a browser window to http://localhost:3000

#### Note: if the project is restarted, the database will be seeded again. Comment out line 66 in the main app.js file to avoid this.