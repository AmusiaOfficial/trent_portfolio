# Trent Yates Portfolio

This is a personal portfolio website created using a gatsby template. 

## Installation

To create a Gatsby.js project:

Open your WSL terminal (ie. Ubuntu 18.04).

Create a new project folder: mkdir GatsbyProjects and enter that directory: cd GatsbyProjects

Use npm to install the Gatsby CLI: npm install -g gatsby-cli. Once installed, check the version with gatsby --version.

Create your Gatsby.js project: gatsby new my-gatsby-app

Once the package has been installed, change directories into your new app folder, cd my-gatsby-app, then use code . to open your Gatsby project in VS Code. This will allow you to look at the Gatsby.js framework that has been created for your app using VS Code's File Explorer. Notice that VS Code opened your app in a WSL-Remote environment (as indicated in the green tab on the bottom-left of your VS Code window). This means that while you are using VS Code for editing on the Windows OS, it is still running your app on the Linux OS.

WSL-Remote Extension

There are 3 commands you need to know once Gatsby is installed:

gatsby develop for running a development instance with hot-reloading.
gatsby build for creating a production build.
gatsby serve for starting your app in production mode.
Open the WSL terminal integrated in VS Code (View > Terminal). Make sure that the terminal path is pointed to your project directory (ie. ~/GatsbyProjects/my-gatsby-app$). Then try running a development instance of your new app using: gatsby develop

Once your new Gatsby project finishes compiling, your terminal will display that "You can now view gatsby-starter-default in the browser. http://localhost:8000/." Select this localhost link to view your new project built in a web browser.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Preview

https://www.trentyates.us/