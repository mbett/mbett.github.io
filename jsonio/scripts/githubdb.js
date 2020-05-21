/**
* We are going to authenticate with Github and
* specify our repo name and file we just created.
*/
var options = {
  host: 'private-github-api.com', // <-- Private github api url. If not passed, defaults to 'api.github.com'
  pathPrefix: 'prefix-for-enterprise-instance', // <-- Private github api url prefix. If not passed, defaults to null.
  protocol: 'https', // <-- http protocol 'https' or 'http'. If not passed, defaults to 'https'
  user: 'mbett', // <-- Your Github username
  repo: 'json-db', // <-- Your repository to be used a db
  remoteFilename: 'myQuiz.json' // <- File with extension .json
};
 
// Require GithubDB
var GithubDB = require('..').default;
// Initialize it with the options from above.
var githubDB = new GithubDB(options);
 
// Authenticate Github DB -> grab a token from here https://github.com/settings/tokens
githubDB.auth(personalAccessToken);
 
// Connect to repository
githubDB.connectToRepo();
 
// You are now authenticated with Github and you are ready to use it as your database.
githubDB.save({"message": "wooohoo"});
