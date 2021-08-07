# Application Development KnowledgeBase Website

For testing vuepress in your local machine after cloning the Git repository, do the following:

You need to install [Node.js 10+](https://nodejs.org/en/)

On the branch root folder:



`npm install -D vuepress`

`npm i vuepress-plugin-fulltext-search -D`

`npm install vuepress-theme-yuu`



If you want to host the website into your local machine to see the output you can run:

`npm run dev`



If you want to build the website so it is ready to be deployed on a Web Server:



`npm run build`



And you will find the file into the docs/.vuepress/dist folder. You just need to copy over the contents of the dist folder into your Web Server.

