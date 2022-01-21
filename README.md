## Installation

Clone the repository. Open your console and type:
```bash
git clone https://github.com/austpic/pic-front-end.git
```

It is recommended to install the packages using yarn.
If you don't have yarn installed already, do the following:
```bash
npm install --global yarn
yarn --version
```

After you have installed yarn, run the following command:
```bash
yarn install
```

## Extentions recommended

- 
- 

## Code Conventions

- Always make sure to keep your code in a consistent style. Use `Cntrl + Alt + F` (in windows) to format your code.

## Env files

`.env.development` contains the development environment variables.
`.env.production` contains the production environment variables.
`.env.local` contains the local environment variables. Note: variables stored here will only run on the local machine

## Possible Issues with their fixes

- Jsconfig.json file gives TS error. [fix](https://stackoverflow.com/questions/68879795/vscode-jsconfig-json-gives-ts-errors-root-file-specified-for-compilation)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`
