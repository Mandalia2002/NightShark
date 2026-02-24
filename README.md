# Nightly-Shark (Daily Tracker)
### Personal Project
<p>Habit, Mood and Weight Tracker App</p>

## Built with
- Designed on Figma
- Front-End done in Angular 21
- Back-End done with NestJS
- Database on Postgres created with TypeORM
- On Monorepo (first time making one)
- Front-End in two versions:
    - Desktop App with Electron Builder
    - Mobile App with Cordoba
- Back-End deployed with the help of Vercel (first time using it too)
-----------
### Development of the App
#### Phase 1:
<p>The birth of the idea</p>
<p>I neglected myself for some time so i tried to get back on my feet by tracking healthy habits and getting some work on myself, i started to use a Notion template for it using the gamification method of showing graphs and colors so i can motivate myself, the downside: i only had the Free plan of Notion so its very limited</p>

<p>So the idea of doing an app came to my mind, im a Web developer, how hard can it be?</p>

#### Phase 2:
<p>Designing the idea</p>
<p>For the first version of the app a came with the idea of using it daily, so i must use colors that doesnt give some "eye sore" everytime it opens, so i leaned to dark tones of purple that bring relaxation to the user (Me)</p>
<img src="design\Design Version-1.png">
<p>But i didn´t like the outcome, it looked cartoonish and simple, so i reworked the design by researching about design styles, to setting down with the "Glassmorphism" style with a touch of galactic vibe</p>
<img src="design\Design Version-2.png">

#### Phase 3:
<p>Creating the app (Web Version)</p>
<p>Making the base on a Web Page due to being the only way i knew how to make it, using Angular and making a NestJS project</p>
<p>All of the assets used on the project were designed on Figma by me, except for the animation of the background, that was taken from this page: </p>
<a href=https://wweb.dev/resources/animated-css-background-generator>Animation Page</a>
<p>And changed a little to fit the idea i had in mind</p>

<p>Finished!!! 19-Feb-2026</p>

#### Phase 4:
<p>Creating the app (Desktop Version)</p>
<p>Due to the project being done on Angular (Web page) i came across to the idea of "packaging" a process where an existing project is transformed into another type due to the same structure</p>
<p>The good news: Man i dont have to do anything to my code</p>
<p>The bad news: im going to need to host my back-end code somewhere else</p>
<p>So when i commented that situation to a couple of friends (Galletas de Animalitos) one of them recommended to me Vercel for hosting</p>

<p>So i decided to change my database (for the third time) to Postgres to use SupaBase and host my NestJS project on Vercel</p>
<p>and with that my desktop app is completed</p>

<img src="versions\DesktopApp.png">

<p>Finished!!! 20-Feb-2026</p>

#### Phase 5:
<p>Creating the app (Mobile Version)</p>
<p>The plan is to also turn this into a Mobile App using Cordova</p>