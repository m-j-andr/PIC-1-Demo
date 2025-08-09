# PIC 1 - Snake




## A Brief History of Snake


You might have played the game
[Snake](https://en.wikipedia.org/wiki/Snake_(video_game_genre)#/media/File:Snake_can_be_completed.gif){:target="_blank"}.
It was difficult to talk to a 12-year-old in 2000 because they would be playing Snake on
"The Unbreakable" [Nokia 3310](https://en.wikipedia.org/wiki/Nokia_3310){:target="_blank"}.
Coding this game from scratch is challenging because
one has to handle both the logic of the game and the graphics.
The way that all the pieces fit together is a bit like a jigsaw.
In this exercise, someone has put together most of the pieces for you.
However, they have purposefully left out one of the most important pieces
so that you can experience the satisfaction of coding it yourself
to finish the creation of a fully working game of Snake.


The idea of the version of Snake you will code is simple to describe.
 - A snake moves around the screen and grows whenever it eats an apple.
 - The snake is not allowed to hit the walls or eat itself;
   doing so leads to "GAME OVER".
 - The goal is to direct the snake around the playing area
   so that it grows until there is no more room to play.




## Your Task


Your task is to correctly write a function called `update_snake`
that performs a crucial calculation during the gameplay.
This function has three parameters.

 - `direction`
   - This parameter is a *string* which records the direction the snake is supposed to move.
   - We can use the values `"left"`, `"right"`, `"up"`, and `"down"` when calling the function.
 - `snake`
   - This parameter records the current position of the snake as a *list*.
   - Valid list arguments store the coordinates that comprise a snake.
     Each pair of coordinates is stored as a *tuple* of two *ints*.
 - `apple`
   - This parameter records
     the current position of the apple
     as a *tuple* of two *ints*.


The quickest way to demonstate what this function needs to do is
to specify the output that some code using the function must produce.
However, we will need to talk carefully about this code so that
you can see why the function needs to perform this way,
and how it fits into the whole jigsaw that makes Snake work.
The following code and its output will originally look overwhelming,
but once we have explained step-by-step what it will accomplish
during the playing of the game, it will seem much less intimidating.


<br>


### Code using `update_snake`.
```python
snake = [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6), (7, 7)]

print(" " * 48, snake)

apple = (0, 5)
direction = "down"

popped = update_snake(direction, snake, apple);  print(" " * 40, snake, " " *  6, popped, " " * 4, apple)
popped = update_snake(direction, snake, apple);  print(" " * 32, snake, " " *  7, popped, " " * 5, apple)

apple = (1, 7)
direction = "right"

popped = update_snake(direction, snake, apple);  print(" " * 24, snake, " " * 14, popped, " " * 4, apple)
popped = update_snake(direction, snake, apple);  print(" " * 16, snake, " " * 22, popped, " " * 4, apple)

snake.append(popped); snake.pop(0);              print(" " * 24, snake)

direction = "down"

popped = update_snake(direction, snake, apple);  print(" " * 16, snake, " " * 22, popped, " " * 4, apple)
popped = update_snake(direction, snake, apple);  print(" " *  8, snake, " " * 23, popped, " " * 5, apple)

apple = (7, 0)

popped = update_snake(direction, snake, apple);  print(" " *  0, snake, " " * 30, popped, " " * 4, apple)
```


<br>


### The output that should be produced by the code using `update_snake`.
```
                                                [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6), (7, 7)]
                                        [(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6)]        (7, 7)      (0, 5)
                                [(0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6)]         None       (0, 5)
                        [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]                (7, 6)      (1, 7)
                [(2, 5), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]                        (7, 5)      (1, 7)
                        [(1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]
                [(1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]                        (7, 5)      (1, 7)
        [(1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]                         None       (1, 7)
[(1, 8), (1, 7), (1, 6), (1, 5), (0, 5), (0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]                                (6, 5)      (7, 0)
```

That looks a little hectic! Bear with me. Let's explain what is going on...




## The first six lines of code: how game states are stored


### The variable `snake`

The first line of the code says...
```
snake = [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6), (7, 7)]
```
This *list* corresponds to the snake in the following image.

<canvas id="snake-1">This should be a canvas describing Snake.</canvas>

 - The list contains 12 *tuples* and you can see 12 blue dots in the snake.
 - The playing area is built on an 8-by-8 grid.
   - `x`-coordinates on the grid go from `0` to `7` and take us from left to right.
   - `y`-coordinates on the grid go from `0` to `7` and take us down the image.
   - The top-left position in the grid is described by the *tuple* `(0, 0)`.
   - The bottom-right position in the grid is described by the *tuple* `(7, 7)`.
 - The first element in the list is `(0, 3)`.
   - Start at the top-left.
   - Move down by 3 grid positions.
   - You are now at the *head* of the snake.
 - The last element in the list is `(7, 7)`.
   - Go to the bottom-right.
   - You find the *tail* of the snake.
 - The grid points between the head and the tail are described by
   `(1, 3)`, `(2, 3)`, `(2, 4)`, `(2, 5)`, `(3, 5)`,
   `(4, 5)`, `(5, 5)`, `(6, 5)`, `(7, 5)`, `(7, 6)`.
   You should check that all these points make sense to you.
 - As another example consider `(6, 5)`.
   - Start at the top-left.
   - Move right by 6 grid positions.
   - Move down by 5 grid positions.
   - You find yourself within the snake.
   - There are three blue points to the right.
     That is because `(7, 5)`, `(7, 6)`, `(7, 7)`
     come after `(6, 5)` in `snake`.

The first line of output comes from `print(" " * 48, snake)`.
This prints `snake` together with some leading spaces.
The spaces that are printed throughout the code are
only there to make the output easier to read.


### The variable `apple`

The next non-empty line of code says `apple = (0, 5)`.
Looking back to the previous image,
you can see the apple
by starting at the top-left
and moving down by 5 grid positions.


### The variable `direction`

The next non-empty line of code says `direction = "down"`.
If we are to move the snake,
we need to know in which direction!




## The first use of `update_snake` and its main responsibility

 - The snake's current position is described by
   ```
   [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6), (7, 7)]
   ```
 - The position of the apple is given by `(0, 5)`.
 - The snake should move down because `direction` stores `"down"`.

This is enough information to deduce the next position of the snake.
The next position is shown in the following image.

<canvas id="snake-1">This should be a canvas describing Snake.</canvas>
<canvas id="snake-2">This should be a canvas describing Snake.</canvas>

**One responsibility of `update_snake(direction, snake, apple)`
is to change `snake` from one snake position to the next.**

You should check carefully that
the new position is described
by the following *list*.
```
[(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6)]
```
Therefore, `update_snake("down", snake, (0, 5))` needs to change
`snake` from the first line displayed below to the second line.
```
        [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6), (7, 7)]
[(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6)] 
```

We see that
there are two **changes that
`update_snake("down", snake, (0, 5))`
needs to make to `snake`.**
 - It needs to insert `(0, 4)` at the start of the `snake`, that is, create a new *head* position.
 - It needs to remove `(7, 7)` from the end of the `snake`, that is, delete the old *tail* position.

Together, these operations preserve the length of `snake`.
This is appropriate because the snake has not eaten the apple.




## The first use of `update_snake` and its other responsibility

We have just seen that `update_snake("down", snake, (0, 5))` needs to change
`snake` from the first line displayed below to the second line.
```
        [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6), (7, 7)]
[(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6)] 
```
**It also needs to return the old tail position `(7, 7)`**.
This is to give the other code that uses your code
(the other pieces of the jigsaw you are completing)
permission to use this grid position for apples.
If you define `update_snake` correctly except for this part,
players will be able to "complete" Snake without truly completing it:
zig-zagging through all of the playing area and
eating just a few apples will lead to the message "YOU WON!"




## The first use of `update_snake` and the corresponding output

The output corresponding to the code
```python
popped = update_snake(direction, snake, apple);  print(" " * 40, snake, " " *  6, popped, " " * 4, apple)
```
(ignoring the leading spaces) should be as follows.
```
[(0, 4), (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6)]        (7, 7)      (0, 5)
```
This shows the newly edited value of `snake`,
the returned value of `(7, 7)`,
and the fact that `apple` is unchanged and still has the value `(0, 5)`.




## The remaining lines of code


<canvas id="snake-3">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-4">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-5">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-6">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-7">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-8">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-9">This should be a canvas describing Snake.</canvas><br><br>
<script src="snake-draw-frame.js" defer></script>
<script src="snake-examples.js" defer></script>
