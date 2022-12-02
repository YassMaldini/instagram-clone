<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="[https://github.com/YassMaldini/instagram-clone](https://github.com/YassMaldini/instagram-clone)">
    <img src="assets/icon.png" style="border-radius: 5px;" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Instaclone</h3>

  <p align="center">
    A clone of the Instagram app using the same API as the real app.
    <br />
    <br />
    <a href=""><strong>Online Demo »</strong></a>
    <br />
    <div align="center">
      <img src="https://miro.medium.com/max/800/1*yWUgGAQuiROzilwG_tEU2Q.png" alt="rn_ts" width="85" height="50">
    </div>
  </p>
</div>

<!-- GETTING STARTED -->
## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* expo
  ```sh
  npm install -g expo-cli
  ```
* eas (recommended)
  ```sh
  npm install -g eas-cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/YassMaldini/instagram-clone.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a development build locally
   ```sh
   npx expo run:android|ios
   ```

### Build

* Development build
   ```sh
   eas build --platform android|ios|all --profile development
   ```
* Production build
   ```sh
   eas build --platform android|ios|all --profile production
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ABOUT THE PROJECT -->
## About The Project

It's a revisited version of the instagram's mobile app based on the same API as the real app. 

This project is still in progress and a lot of features are missing.

Main problems I encountered:
* The first issue was to access the mobile API, to do it I had to go through these steps:
  * Disable SSL pinning from the instagram's apk to prepare MitM
  * Set up a remote MitM on my desktop
  * Root an android phone to access the system files and place in it the MitM certificate and run a frida server
* The second one was to reproduce properly the functionning of the app, particulary the way to manage the API
* The only issue I wasn't able to resolve in the way I wanted is the password encryption. So to handle it I created a remote API using node.js to have access to the built-in crypto module. <br />
  You can also take a look at `https://insta-auth.herokuapp.com/encrypt_password/:password` which is an endpoint to encrypt a password in the same way as instagram.

An online demo is available but you can contact me to test it on a real device using Testflight for iOS or an apk build for android.

<!-- CONTACT -->
## Contact

Yacine Berkane - yass.maldini@gmail.com

Project Link: [https://github.com/YassMaldini/instagram-clone](https://github.com/YassMaldini/instagram-clone)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

