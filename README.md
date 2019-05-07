# Parcel Boilerplate

Parcel boilerplate for Modern JavaScript ES6 and Beyond, using [Babel](https://babeljs.io/), css/sass/scss, and autoprefix using [PostCSS](https://preset-env.cssdb.org/).

## Table of Contents

- [Table of Contents](#table-of-contents)
- [TL;DR](#tldr)
- [Getting Started](#getting-started)
- [Support ES6 and Beyond to the project](#support-es6-and-beyond-to-the-project)
- [Add Dynamic Imports for Code Splitting](#add-dynamic-imports-for-code-splitting)
- [Add CSS to Project](#add-css-to-project)
- [Add SASS/SCSS to Project](#add-sassscss-to-project)
- [Add Autoprefix to Project](#add-autoprefix-to-project)
- [Keep clean and fresh (Clean up before build)](#keep-clean-and-fresh-clean-up-before-build)
- [Wrap it up](#wrap-it-up)

## TL;DR

If you only want to use this parcel boilerplate and dont want to know how to implement it, well just clone this repo and start developing.

1. `git clone https://github.com/finmavis/parcel-boilerplate.git`
2. Navigate to folder you just clone
3. Install all Dependencies, `yarn` or `npm install`
4. Then for development just run the script `yarn start` or `npm run start`
5. To build for production just run the script `yarn build` or `npm run build`, it will generate folder build.

## Getting Started

- initial your project with `npm init` or `yarn init`
- Create `src` folder
- Create `index.html` and `index.js` inside `src` folder
- Install `parcel-bundler` as Development Dependencies

  If you're using **yarn**

  ```
  yarn add --dev parcel-bundler
  ```

  If you're using **npm**

  ```
  npm install --save-dev parcel-bundler
  ```

  Folder structure

  ```
  |-- src
      |-- index.html
      |-- index.js
  |-- package.json
  ```

  - Open `src/index.html` and add code below :

  ```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      <title>Parcel Boilerplate</title>
    </head>
    <body>
      <h1>Parcel Boilerplate</h1>

      <script src="./index.js"></script>
    </body>
  </html>
  ```

  - Open `src/index.js` and add code below :

  ```
  const tes = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World"), 2000);
    });
  }

  tes()
    .then(value => console.log(value));
  ```

  - Open `package.json` and add new scripts for starting `parcel` :

  ```
  "scripts": {
    "start": "parcel ./src/index.html",
    "build": "parcel build ./src/index.html"
  },
  ```

  - Then, you will be able to start your development by running :

  If you're using **yarn**

  ```
  yarn start
  ```

  If you're using **npm**

  ```
  npm run start
  ```

## Support ES6 and Beyond to the project

- Install `@babel/core @babel/plugin-transform-runtime` as Development Dependencies

  If you're using **yarn**

  ```
  yarn add --dev @babel/core @babel/plugin-transform-runtime
  ```

  If you're using **npm**

  ```
  npm install --save-dev @babel/core @babel/plugin-transform-runtime
  ```

- Install `@babel/runtime` as Dependencies

  If you're using **yarn**

  ```
  yarn add @babel/runtime
  ```

  If you're using **npm**

  ```
  npm install --save @babel/runtime
  ```

- Create `.babelrc` for babel configuration and add code below :

  ```
  {
    "plugins": ["@babel/plugin-transform-runtime"]
  }
  ```

- Set browser list that you want to support in `package.json`. <br>
  Note: you can check browserlist [Here](https://browserl.ist/) <br>
  In this case we will use this configuration :

  ```
  "browserslist": [
    "> 1%",
    "not ie <= 9",
    "last 3 versions"
  ]
  ```

- Now you can write feature JavaScript ES6 and Beyond like async/await. <br>
  Let's do it now, Open `src/index.js` and edit little bit :

  ```
  const tes = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World"), 2000);
    });
  }

  // I know this is dumb
  // Just for demo purpose
  async function asyncAwaitSample() {
    const result = await tes();
    console.log(result);
  }

  asyncAwaitSample();
  ```

## Add Dynamic Imports for Code Splitting

- Install `@babel/plugin-syntax-dynamic-import` as Development Dependencies

  If you're using **yarn**

  ```
  yarn add --dev @babel/plugin-syntax-dynamic-import
  ```

  If you're using **npm**

  ```
  npm install --save-dev @babel/plugin-syntax-dynamic-import
  ```

- Open `.babelrc` and update plugins :

  ```
  {
    "plugins": [
      "@babel/plugin-transform-runtime",
      "@babel/plugin-syntax-dynamic-import"
    ]
  }
  ```

- Now split our code into two files `index.js` and `tes.js` to test `dynamic imports`

  - `index.js`

    ```
    // I know this is dumb
    // Just for demo purpose
    async function asyncAwaitSample() {
      const { tes } = await import('./tes');
      const result = await tes();
      console.log(result);
    }

    asyncAwaitSample();
    ```

  - `tes.js`

    ```
    // I know this is dumb
    // Just for demo purpose
    export const tes = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello World"), 2000);
      });
    }
    ```

## Add CSS to Project

- Create `style.css` inside `src/css` and add code below :

  ```
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  ```

- Open `src/index.html` and add our css to `head` tag :

  ```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      <title>Parcel Boilerplate</title>

      <link rel="stylesheet" href="./css/style.css" />
    </head>
    <body>
      <h1>Parcel Boilerplate</h1>

      <script src="./index.js"></script>
    </body>
  </html>
  ```

## Add SASS/SCSS to Project

- Simple, just change our `css` to `scss` or `sass`
- Open `src/index.html` and update out style reference :

  ```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      <title>Parcel Boilerplate</title>

      <!-- Example using CSS -->
      <!-- <link rel="stylesheet" href="./css/style.css"> -->
      <!-- Example using SASS -->
      <!-- <link rel="stylesheet" href="./css/style.sass"> -->
      <!-- Example using SCSS -->
      <link rel="stylesheet" href="./css/style.scss" />
    </head>
    <body>
      <h1>Parcel Boilerplate</h1>

      <script src="./index.js"></script>
    </body>
  </html>
  ```

- Or you can import via your JavaScript file

  - Create new file `fromjs.sass` inside css folder
  - Add code below :

    ```
    .fromsass
      text-align: center
    ```

  - Import `fromjs.sass` on `index.js`

    ```
    import './css/fromjs.sass'

    // I know this is dumb
    // Just for demo purpose
    async function asyncAwaitSample() {
      const { tes } = await import('./tes');
      const result = await tes();
      console.log(result);
    }

    asyncAwaitSample();
    ```

  - Update `index.html` :

    ```
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <title>Parcel Boilerplate</title>

        <!-- Example using CSS -->
        <!-- <link rel="stylesheet" href="./css/style.css"> -->
        <!-- Example using SASS -->
        <!-- <link rel="stylesheet" href="./css/style.sass"> -->
        <!-- Example using SCSS -->
        <link rel="stylesheet" href="./css/style.scss" />
      </head>
      <body>
        <h1 class="fromsass">Parcel Boilerplate</h1>

        <script src="./index.js"></script>
      </body>
    </html>
    ```

## Add Autoprefix to Project

- Install `postcss-preset-env` as Development Dependencies

  If you're using **yarn**

  ```
  yarn add --dev postcss-preset-env
  ```

  If you're using **npm**

  ```
  npm install --save-dev postcss-preset-env
  ```

- Create `postcss.config.js` and add code below :

  ```
  module.exports = {
    plugins: [
      require('postcss-preset-env')(),
    ],
  };
  ```

## Keep clean and fresh (Clean up before build)

- Install `parcel-plugin-clean-dist` as Development Dependencies

  If you're using **yarn**

  ```
  yarn add --dev parcel-plugin-clean-dist
  ```

  If you're using **npm**

  ```
  npm install --save-dev parcel-plugin-clean-dist
  ```

## Wrap it up

- Folder Structure

  ```
  |-- src
      |-- css
          |-- fromjs.sass
          |-- style.scss
      |-- index.html
      |-- index.js
      |-- tes.js
  |-- .babelrc
  |-- package.json
  |-- postcss.config.js
  ```

- `src/index.html`

  ```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      <title>Parcel Boilerplate</title>

      <!-- Example using CSS -->
      <!-- <link rel="stylesheet" href="./css/style.css"> -->
      <!-- Example using SASS -->
      <!-- <link rel="stylesheet" href="./css/style.sass"> -->
      <!-- Example using SCSS -->
      <link rel="stylesheet" href="./css/style.scss" />
    </head>
    <body>
      <h1 class="fromsass">Parcel Boilerplate</h1>

      <script src="./index.js"></script>
    </body>
  </html>
  ```

- `src/index.js`

  ```
  import './css/fromjs.sass'

  // I know this is dumb
  // Just for demo purpose
  async function asyncAwaitSample() {
    const { tes } = await import('./tes');
    const result = await tes();
    console.log(result);
  }

  asyncAwaitSample();
  ```

- `src/tes.js`

  ```
  // I know this is dumb
  // Just for demo purpose
  export const tes = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World"), 2000);
    });
  }
  ```

- `src/css/fromjs.sass`

  ```
  .fromsass
  text-align: center
  ```

- `src/css/style.scss`

  ```
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  ```
