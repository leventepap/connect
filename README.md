# connect

Connect is a simple social-media page created entirely by myself.
It is presented as a Full-Stack project (ongoing).
UI inspired by Constructor Learning Zurich. ( https://learning.constructor.org/ )

In order to view Connect, you must run both the backend and frontend development servers.

Navigate to the backend folder and run:
python manage.py runserver

You might need to activate a Conda Environment:
conda activate connect-backend

Once your backend server is running navigate to frontend folder and run:
npm start

You can visit the following subpages:

http://localhost:3000/login => Login Page

http://localhost:3000/signup => Signup Page

http://localhost:3000/confirm => Signup Page 2
http://localhost:3000/verify => Signup Page 3

http://localhost:3000/main => Main page (Feed / Find Friends / Notifications / Logout)
http://localhost:3000/profile/:userID => Profile pages (replace ':userID' with a number between 1-7 or by clicking on any avatar pictures on the main page)
http://localhost:3000/edit => Edit user profile page
