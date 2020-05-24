React GitHub Student List
Before you get started make sure to look through the code that has been provided. Server side code to GET and POST a GitHub user has been provided for you. There is also a form in a component (components/StudentForm/StudentForm.js) that passes data entered by the user back to App.js. You should not need to modify the StudentForm component.

Setup
Start postgres if you haven't already with brew services start.

npm install
npm run server
Now that the server is running, open a new terminal tab with cmd + t and start the react client app.

npm run client
Between the server and client, you'll need two terminal tabs! Because we're using nodemon and create-react-app, both our client side and server side will automatically spin back up when changes are made!

Note: You may also need to start PostgreSql, in which case you may need three terminal tabs.

Base Mode
Use axios to submit and save form data to the database by posting data to /students.
Retrieve the user list and store it in the App.js. Create a new component called StudentList.js and pass it the data.
Display the students in a table on the DOM.
Update the user list each time a new user is added to the database.
Base Mode Wireframe
Base Mode Wireframe

Stretch Goals
Link to profiles
Add a More Details button for each user. When the button is clicked on, pass the selected user back to App.js.
Make a request to the GitHub API to retrieve more details about the user. Create a new component on the page that displays those details.
https://api.github.com/users/GITHUB_USERNAME?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4
Create a new component that renders each individual list item in the user list.
GitHub Rate Limit
GitHub doesn't like it when malicious users pummel their API with an absurd amount of requests. Unfortunately, there's not a great way to tell who is malicious and who is not, so there is a rate limit to the number of requests allowed by GitHub (50 per hour from an IP address). You can increase that limit with a GitHub access token (pretty common among APIs). If you begin to get 403 status errors, you may want to try using our access token which will bump you up to 5000 requests per hour:

https://api.github.com/users/GITHUB_USERNAME?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4
If your cohort burns through that, try creating your own access token:

https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/

Profiles Wireframe
Stretch Goals Wireframe

Additional Stretch Goals
Add a button to delete a user from the list. This will require both UI changes and a new route.
It's pretty weird that details and a broken image are showing up right away because we don't have a default user. Use react conditional rendering to only show the details section if there is a selected user.
Add styling to your components.
Repeat over the users followers and display them below the selected users profile information.
