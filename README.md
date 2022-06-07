# Ride-UI-Kit

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-ride-ui-kit">About Ride-UI-Kit</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#Installing Locally">Installing Locally</a></li>
    <li><a href="#Developing in Watch Mode">Developing in Watch Mode</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Demo Playground

The Ride-UI-Kit has a simplified built-in React App to quickly develop and test front end components. Changes are shipped to the `gh-pages` branch.

[View the demo app](https://ridereport.github.io/ride-ui-kit/)

For instructions to start developing locally <a href="#Developing in Watch Mode">click here</a>

## About The Project

The Ride-UI-Kit is a shared front end component library that is used across Ride Report React projects. It is a commonplace for all shared front end design systems that includes, and are not limited to:

- Commonly used React Components (buttons, charts, etc)
- Assets (logos, svgs, fonts)
- Whatever else you can think of!

There are a few gotchas. The `Ride-UI-Kit` is not a traditional npm package. It is not published in the npm registry. Under the surface it is the same as any other github repository but is consumed by front end repositories through packages. Because of this the `dist` file isn't automatically built on install, we have to save and commit these changes ourselves to take adantage of compiled javascript so it can be used ubiquitously across projects.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To import the library into a project, install via npm through the Github Repo URL.

In the root of the consuming project, enter in the command line:

```
npm install git@github.com:RideReport/ride-ui-kit/src.git#main
```

Then import it as with any other component.

```
import { Button } from 'ride-ui-kit';

function Example() {
    return <Button label={'omg it worked'} />
}
```

### Prerequisites

Node
NPM
Node version manager? -> create-react-app requires a higher version of node than the component library

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installing Locally

1. Clone the repo

   ```
   git clone https://github.com/RideReport/ride-ui-kit.git#main
   ```

2. Install NPM packages

   ```
   npm install
   ```

3. Build the files into the output directory `/dist`
   ```
   npm run build
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Developing in Watch Mode

Developing new components from within this repository is different than most development workflows. It is essentially a frontend component library that doesn't have a UI of it's own. To work through this, this is a very basic react app that is hosted from inside the component library called `demo`. This react app imports `ride-ui-kit` and is pointed at the`/dist`. Or the version of the app that is bundled and used by consuming projects. To develop components using this structure with hot reloading effects follow these steps:

1. In the terminal, go to the root of `ride-ui-kit` and run the command `npm run watch`. This sets up an event listener that watched for changes within the `/src` directory that automatically rebuilds the library.

2. Then set up a new project terminal window and from the root enter the `demo` react app (ex: `cd demo`) and run the command `npm run start` to start the react app and go to `localhost:3000` to see the component library in action.

3. from within `demo` you can use `app.tsx` to render and test components as if they were in a live react project.

Now every time you make changes from within the component library it should be automatically rebundled and and updated.

<p align="right">(<a href="#top">back to top</a>)</p>

_For more examples, please refer to the [Documentation](https://example.com)_

### Shipping Changes (WIP)

After changes have shipped to ride-ui-kit. All react repositories that consume and rely on the the component library need to be updated with the latest version. To update to the most recent version on the component library run:

will this actually work?
`npm update ride-ui-kit`

`npm version patch`

Git Subtrees are used to set the root folder for github pages to the subdirectory demo app. It then uses the /build of demo as the source to run and execute it in the browser.

make sure you build and push the react demo app,
Then to update the github page run this in the root terminal.

`` git push origin `git subtree split --prefix demo/build`:gh-pages --force  ``

\*Eventually this step will be scripted.

<p align="right">(<a href="#top">back to top</a>)</p>
