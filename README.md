# Belong Code Test – Frontend Engineer

## Cell Simulator

The aim is to demonstrate how you approach thinking about problems and translating them to code. 
Create a repository to your own, spend your allocated time working on a solution and then submit it  back to us. Please include a README with installation and usage instructions. 

## Challenge: Cell Simulator 
The "game" is a zero-player game, meaning that its evolution is determined by its initial state,  requiring no further input. One interacts with the Cell Simulator by creating an initial configuration  and observing how it evolves. 


## Acceptance criteria 
# At initial state, User should see an empty board. 
# User can make Cells "alive". 
# User can make Cells "dead". 
# User can trigger "next generation". 
# User can trigger a "reset" to the initial state. 

## Next generation 
• When the next generation is running: 
# A Cell with fewer than two live neighbours dies of under-population. 
# A Cell with 2 or 3 live neighbours lives on to the next generation. 
# A Cell with more than 3 live neighbours dies of overcrowding. 
# An empty Cell with exactly 3 live neighbours "comes to life". 
# A Cell who "comes to life" outside the board should wrap at the other side of the  board. 
# Once the next generation is done, User can trigger "next generation" again. 

## Requirements
# Use React and TypeScript. 
# Please include some attempt at testing your code. 
# While not mandatory, a meaningful git history will be looked upon favourably.
