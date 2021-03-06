# Retirement Party

> Event management and creation system

## Project's Website [Repartyed](http://cmpt371g4.usask.ca:8090)

## Build Setup

1. Install NodeJS from here https://nodejs.org/en/download/. Go with the LTS version
   * If you are on Linux you will need to use these commands to get NodeJS installed
      ```
      curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
      sudo apt-get install -y nodejs
      ```
2. Install maven from here https://maven.apache.org/install.html
3. Install VSCode from here https://code.visualstudio.com/Download
   * If you are using a MacOS machine, you will need to follow the instructions on the this page before installing the VSCode extensions
   https://code.visualstudio.com/docs/setup/mac
4. Install the extensions from the extensions section below
   * Install Vue dev tools from
   https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en
5. Clone the repo into your desired folder
   * Make sure to switch to the development branch and create your own branch from there
6. While you are in VSCode, open the folder where you cloned the repo
7. Hit CTRL+\` and the embedded terminal will come up
8. Type `npm install`, go get a drink...
9. Type `npm start`, and the server will be launched and your default browser will show the App
10. The list of the all commands is provided below

##

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# to run unit tests in headless mode
npm run unit -- --browsers=ChromeHeadless

# run end-2-end tests
npm run e2e

# to run E2E tests in headless mode
npm run e2e -- --headless

# run all tests
npm run test
```

## Extensions for VS Code
Just run these commands from the command line and you should be good to go
```
code --install-extension EditorConfig.editorconfig
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
code --install-extension dariofuzinato.vue-peek
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens
code --install-extension eg2.vscode-npm-script
code --install-extension esbenp.prettier-vscode
code --install-extension formulahendry.auto-close-tag
code --install-extension formulahendry.auto-rename-tag
code --install-extension msjsdiag.debugger-for-chrome
code --install-extension octref.vetur
code --install-extension redhat.java
code --install-extension robertohuertasm.vscode-icons
code --install-extension rebornix.project-snippets
code --install-extension vscjava.vscode-java-debug
code --install-extension vscjava.vscode-java-test
code --install-extension vscjava.vscode-maven
code --install-extension xabikos.javascriptsnippets
code --install-extension zhuangtongfa.material-theme
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader) and https://vuejs-templates.github.io/webpack/structure.html .
