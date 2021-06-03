#Where in the world

### Description:

Part of the Cisco interview process. A small desktop and mobile device compatible web app which shows information about 
all countries by interacting with https://restcountries.eu/ APIs.


### Features:
1. Show thumbnails of all the countries on landing page
1. Search by name of countries. 
1. Filter results selecting one of the regions from the provided dropdown.
1. Click on thumbnail to see details of the country.
1. In country detail view, clicks on Border country name is supported.
1. In country detail view, click on Home button to go back to landing page.
1. All pages are responsive to screen size.
1. Dark and Light theme support. Theme Toggle button is located at top right corner of app in the header bar.


### Technical Specs:
1. App is divided into frontend and backend parts, included in same repo but in different folders.
1. Backend server is written in Nodejs which uses express.js to create server instance.
1. Node server interacts with actual https://restcountries.eu/ APIs. And serves responses back to frontend. 
1. Used React.js framework with Redux for state management.
1. SCSS is used for styling
1. External library Material-UI is used for components.


### How to run:
1. Install dependencies and start application on local
```bash
npm run installAll:startAll
```

 (If not redirected already, application is running at [http://localhost:3000/](http://localhost:3000/) )
 