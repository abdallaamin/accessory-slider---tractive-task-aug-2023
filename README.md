# Hello there, Good People of Tractive!

This is my submission for "the Accessory slider component" task given to me on August 29th, 2023.

Try it on the web now [here](https://accessory-slider-tractive-task-aug-2023.vercel.app/).

## What I have done:

According to the requirements, I implemented my solution using JavaScript along with HTML and CSS. I did not use any JavaScript frameworks as requested. I took it upon myself to avoid using any third-party components or libraries.

Starting with index.html:

It's the basic skeleton for the slider container and the cards, followed by a slider bar container that gets filled dynamically. I chose to handle most of the heavy lifting on the JavaScript side.

Moving to styles.css:

Just simple styling for the main component and adding a media query for mobile responsiveness (slider and slider bar content).

As for the main part, scripts.js:

This is where the heavy lifting happens. First, I added the functionality for the slider bar and dynamically added dots that respond to card changes when clicked. I then spent most of my time and effort adding touch events to make the slider adapt to visible cards. I didn't use any third-party libraries like Swiper; instead, I aimed to keep the bundle size small and avoid external dependencies. Finally, I implemented the window resize functionality to ensure a reset to the default layout when switching from mobile to desktop.

You will find simple comments guiding you through each step in script.js.

![desktop screen](https://github.com/abdallaamin/accessory-slider---tractive-task-aug-2023/assets/26660809/cdd486e7-c3be-45b7-b97d-1ba852f9d069)
![mobile screen](https://github.com/abdallaamin/accessory-slider---tractive-task-aug-2023/assets/26660809/d8c7e2d4-04f3-4c6f-bd3e-6c521e4ae389)
## Getting Started:

I went a step further and deployed it on the web using Vercel, so you can check it out [here](https://accessory-slider-tractive-task-aug-2023.vercel.app/).

If you want to get started locally, follow these steps:
1. Clone the repository.
2. Open the index.html file in your local browser or use a live development server in VS Code.

## Learn More:

As for the time I spent on this task, it was around 3 to 4 hours, with most of that time dedicated to implementing touch and drag functionality.

## Deploy on Vercel:

I went the extra mile and deployed it on the web using Vercel. You can access it [here](https://accessory-slider-tractive-task-aug-2023.vercel.app/).
