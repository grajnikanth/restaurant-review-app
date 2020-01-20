# Restaurant Reviews App

## Project Overview: Stage 1

This project was developed as part of the Udacity Front End Web Developer Nanodegree. For the **Restaurant Reviews App** projects, I converted a static webpage to a mobile-ready web application. In **Stage One**, I took a static design that lacks accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for users.

Starter code was provided by Udacity for a restaurant reviews website. The code had a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. I updated the code to resolve these issues while still maintaining the included functionality.

## Requirements Implemented
Made the provided site fully responsive. All of the page elements were updated to be usable and visible in any viewport, including desktop, tablet, and mobile displays. Images were organized so that they do not overlap, and page elements wrap when the viewport is too small to display them side by side.

I converted a site that looks like this:

![](img/starter_page.png)

...into a site that looks like this:

![](img/mobile_page.png)
![](img/mobile_page2.png)



### How I do did finished the Project from here?

1. In this folder, I started a simple HTTP server to serve up the site files on my local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 



