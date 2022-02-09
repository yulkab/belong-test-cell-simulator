# Belong Code Test – Frontend Engineer

## Cell Simulator

The aim is to demonstrate how you approach thinking about problems and translating them to code. 
Create a repository to your own, spend your allocated time working on a solution and then submit it  back to us. Please include a README with installation and usage instructions. 

## Challenge: Cell Simulator 
The "game" is a zero-player game, meaning that its evolution is determined by its initial state,  requiring no further input. One interacts with the Cell Simulator by creating an initial configuration  and observing how it evolves. 


### Acceptance criteria 
• At initial state, User should see an empty board. <br />
• User can make Cells "alive". <br />
• User can make Cells "dead". <br />
• User can trigger "next generation". <br />
• User can trigger a "reset" to the initial state. <br />

### Next generation 
• When the next generation is running: <br />
o A Cell with fewer than two live neighbours dies of under-population. <br />
o A Cell with 2 or 3 live neighbours lives on to the next generation. <br />
o A Cell with more than 3 live neighbours dies of overcrowding. <br />
o An empty Cell with exactly 3 live neighbours "comes to life". <br />
o A Cell who "comes to life" outside the board should wrap at the other side of the  board. <br />
• Once the next generation is done, User can trigger "next generation" again. <br />

### Requirements
• Use React and TypeScript. <br />
• Please include some attempt at testing your code. <br />
• While not mandatory, a meaningful git history will be looked upon favourably.<br />
