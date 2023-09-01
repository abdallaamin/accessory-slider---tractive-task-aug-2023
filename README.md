# Hello there Good People of Tractive 
This is my submission to "the Accessory slider component" task given to me at 29th aug 2023

try it on the web now from [here](https://accessory-slider-tractive-task-aug-2023.vercel.app/)

## what I have done : 
According to the requirments I implemented my solution using javascript along with html and css for sure, not using any js frame work as requested,
I took it upon myself to not use any third library components or library ,

starting with index.html : 
its basic skeleton for the slider container and the cards , followed by slider bar container that gets filled dynamicly , I made the choice to make all the heavy lefting on the javascript side .

moving to styles.css : 
just a simple styling for the main component and adding media query for mobile responsive part ( slider and slider bar content)


as for the main part : scripts.js : 
This where the heavy lifting is happening .
first I added the slider bar functionality and adding the dots dynamicly and making them responding to change cards on clicking . 
then I spend most of my time and effort adding touch events and make The slidebar adapt corresponding to the visible cards , ( I didnt use any third part library like : swipper for ex , which was much more simpler but adds to bundle size and makes it dependent on external third party library )
 finally I had to add the resize window functionality to make sure it reset again to the default if you are moving from mobile to desktop.

 you will find simple comments guiding you throught each step on the script.js 

![desktop screen](https://github.com/abdallaamin/accessory-slider---tractive-task-aug-2023/assets/26660809/cdd486e7-c3be-45b7-b97d-1ba852f9d069)
![mobile screen](https://github.com/abdallaamin/accessory-slider---tractive-task-aug-2023/assets/26660809/d8c7e2d4-04f3-4c6f-bd3e-6c521e4ae389)

## Getting Started
I took it further more and deplyed it on the web using vercel so you can just check IT from  [here](https://accessory-slider-tractive-task-aug-2023.vercel.app/)

If you want to get it started locally:
 clone the repo and then just open the index.html file on your local browser ( or run it on live dev server on vs code)
## Learn More
as for the time I spent on this task: 
It was around 3/4 hours , most of them was on the touch and drag functionallity.

## Deploy on Vercel
I took it further more and deplyed it on the web using vercel on [here](https://accessory-slider-tractive-task-aug-2023.vercel.app/)
