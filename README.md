# Weather App
Brent Heftye Sanchez
April 21st, 2019
Uppsala, Sweden

## Summary of the Entire System
Weather App is a mobile application with the aim to facilitate weather information regarding 3 cities: Stockholm, Sweden;
Bengauluru, India; Nairobi, Kenya. It consists of two screens. The first one has a list of the cities each with name,
current temperature in metric system and a small map of the city. When touching on the name of the city you get
redirected to the detail screen. A more detailed screen with the current temperature, name of the city, a list of the
forecast for the next few days, each with day of the week and maximum and minimum temperature. Also, there is a description
of the current weather and a recommendation according to the current or forecast weather information. Below there is a
bigger map of the city which can be navigated for further details.

The entire system has only two components that interact: the mobile application and [OpenWeatherMap API](https://openweathermap.org).

## Architecture
The architecture of the system is pretty simple to understand. It is constructed of two high-level components.
The system is built thinking of the client-server architecture.
Therefore, I chose technologies that are developed for this purpose.

![Architecture](https://i.imgur.com/Q9diCKI.png)

## Technology Choice
Fast development was crucial for this project, thus I decided to go for the technologies that I use the most. Expo had
exactly what I needed regarding pre-installed libraries and components.

### [Expo](https://expo.io)
Expo is a framework that gives us tools and services for React-Native development.
It has tools to build and deploy, even publish projects. It provides an API to access hardware characteristics.
Also, for production you can build the app for Android and iOS and publish them to the app stores.
It provides an app to live test the projects.

### [React-Native](https://facebook.github.io/react-native/)
React-Native the best option to quickly develop cross-platform apps using light technologies like JavaScript.
React-Native has great documentation and it is widely used.
It is built from React which a great technology for web development.
This technology is developed by Facebook and used by big companies like Uber, Tesla, Instagram and Skype.

### [Redux](https://redux.js.org)
Redux is a great tool to handle global state in a React-Native application. It has great documentation and is well supported
and recommended to use among developers.

## Demo
To test the app from the source code you need to have [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) installed.

After installing both dependencies in the project root execute to install libraries:

```
npm install
```

Also, you need to add your own API key from OpenWeatherMap in:

```
project-root/constants/index.js

  api:{
    key: <your_api_key>
  }
```

Then to start the project:
```
npm start
```

To visualize the project you need to download the [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent) from the Android's PlayStore
and scan the QR-code that appears in the Development window opened by Expo in your browser. Unfortunately in iOS you are not allowed to see a project that does not belong to you from the [published repository](https://expo.io/@bheftye/weather).
On the other hand you can do this in Android, all you need to do is to scan this QR-code while on the Expo App:

![Imgur](https://i.imgur.com/oiseHGs.png)

In case you can't execute the project nor see it in the Expo App, I uploaded a [video](https://www.youtube.com/watch?v=F-22QYSrMms) showing the demo executing in an iPhone 8 device.