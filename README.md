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
    <li><a href="#developing-components-locally">Developing Components Locally</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The Ride-UI-Kit is a shared front end component library that is used across all of Ride Report front end repositories.

It includes:

- Commonly used React Components (buttons, charts, etc)
- Assets (logos, svgs, fonts)
- Whatever else you can think of!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To import the library into your project, we install via npm through the Github Repo URL.

```
npm install git@github.com:RideReport/ride-ui-kit/src.git#main
```

Then you can import it as you would with any other component using ES6 syntax:

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

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```
   git clone https://github.com/RideReport/ride-ui-kit.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Run Rollup to build the dist files
   ```
   npm run rollup
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

### Developing in Watch Mode

You can develop components within the repository using a ver ybasic react app that imports the package locally.

1. From the top-level of the project run `npm run watch`
2. Open up a new project terminal window and from the root `cd demo`
3. Start the react app with `npm run start`

Every time you make changes within the component library it should be automatically rebundled by rollup and served to the react app for hot reloading effects.

<p align="right">(<a href="#top">back to top</a>)</p>

_For more examples, please refer to the [Documentation](https://example.com)_

<p> Write docs on how to commit the /dist file and why we do it. </p>

<p align="right">(<a href="#top">back to top</a>)</p>
