# E-Commerce-BackEnd
## Description

This was an incredibly useful challenge for me, before this assignment I was struggling heavily on routing and understanding it's syntax and usage. This assignment went along way to correcting those gaps in my knowledge. I can now say I have a very solid grasp on these ideas. 

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1.Upon opening the app, check to make sure you have a package.json file on the lefthand side. If not, open the terminal and type "npm init -y".
2.Still in the terminal, type " npm i". This will install all necessary node packages. Check to make sure your dependencies list matches this: "dotenv": "^8.6.0",
    "express": "^4.18.2",
    "mysql2": "^2.1.0",
    "sequelize": "^5.22.5"
  

## Usage

1. You will need to access mysql to run this app. Use "mysql -u root -p to sign into mysql in order to access the database. 
2. Once logged in, type "SOURCE db/schema.sql;" in order to set up the necessary tables. Once done, type "quit" into the console to exit out of mysql.
3. Next, type "npm run seed" to seed the database with example data. 
4. Finally, type "npm start" to initialize server.js and run the app. 
5. Use Insomnia or Postman to test out the available routes! 

Please note that you will need to update .env with your mysql credentials as well! 

The following walkthrough video covers all of the above steps, as well as demonstrates the usage of the database. 

![Video Walkthrough](https://drive.google.com/file/d/1cPpYywHs3jco6mdgiNHvAKBsI_PGUeoQ/view)

## Credits

Credit to Rene Trevino for the tutoring session. 
## License

MIT License

Copyright (c) 2023 Kalani Jones

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## How to Contribute

If you've like to contribute to this project, please reach out! We are incredibly proud of the work, and also of the numerous future opportunities for future features it could hold.

Before you reach out, please be familiar with the Contributor Covenant and the code of conduct within.

Link to GITHUB repo can be found here: https://github.com/kalaniJ94/E_Commerce_Backend