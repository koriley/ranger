This is the code code for rangerboats.com

This will be the baseline that we use for AEM.

Design by Johnathan Pierce
Developed by Kevin O'Riley

All pages are broken down to components, each with its own html (in partials), scss, and js files. The idea is to pinpoint problems and quickly find and repair.

The gulp file will compile the css to one file and all the js files separate. Js files are ported into the project using require.js

TO COMPILE:<br/>
once you have pulled the repo to your computer;
1. run npm install
2. run bower install
3. run foundation watch.

this will compile all code to a dist folder as well as launch a browser on your local machine.