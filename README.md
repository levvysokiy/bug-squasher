# BUG SQUASHER

The solution is a SPA written on React.js.
For comfortable navigation i have created 3 routes using react-router-dom:

**'/'** - Home page. Contains a button to start a game.  
**'/game'** - Game page. Main game logic.  
**'/score'** - Score page. The page with results of the game.

**Design patterns:**

- _Provider (React Context)_ - to share data between components and avoid props drilling;
- _Hooks_ - to move some complex logic from components to make them more simple and readable;
- _Memoization_ - to optimize the object or function creations, decrease the number of rerenders;

Also, I used requestAnimationFrame to make bug movement animation because it helps to provide stable FPS (60 frames per second).

**Trade-offs:**

- _Css isolation._ Because the app is very small I neglected css isolation and used BEM methodology. For larger apps there are a lot of better decisions to avoid CSS classes collisions. For example, CSS modules.
- _Tests._ I didn't write tests, because of lack of time, but I would add unit and e2e tests.

**Additional features:**

- _Countdown_. Timer from 5 to 0 when user pressed a start button to get ready to squash;
- _Leaderboard._ A list of top squashers. This feature needs a simple backend with user authorization.
- _Bug squash animation._ Animate click on the bug, for example with splash.
