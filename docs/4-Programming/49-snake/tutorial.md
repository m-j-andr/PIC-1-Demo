# PIC 1 - Snake Tutorial




## Snake


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
 - A snake moves around the screen and grows when it eats an apple.
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
   - Valid arguments we can use when calling the function are `"left"`, `"right"`, `"up"`, and `"down"`.
 - `snake`
   - This parameter records the current position of the snake as a *list*.
   - Valid list arguments will store the coordinates that comprise a snake.
     Each pair of coordinates will be stored as a *tuple* of two *int*s.
 - `apple`
   - This parameter records the current position of the apple
     as a *tuple* of two *int*s.


The quickest way to demonstate what this function needs to do is
to specify the output that some code using the function must produce.
However, we will need to talk carefully about this code so that
you can see why the function needs to perform this way,
and how it fits into the whole jigsaw that makes Snake work.
The following code and its output will originally look overwhelming,
but once we have explained step-by-step what it will accomplish
during the playing of the game, it will seem much less intimidating.


**Code using `update_snake`.**
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

**Necessary output produced by the code using `update_snake`.**
```
                                                [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6), (7, 7)]
                                        [[0, 4], (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6)]        (7, 7)      (0, 5)
                                [[0, 5], [0, 4], (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6)]         None       (0, 5)
                        [[1, 5], [0, 5], [0, 4], (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]                (7, 6)      (1, 7)
                [[2, 5], [1, 5], [0, 5], [0, 4], (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]                        (7, 5)      (1, 7)
                        [[1, 5], [0, 5], [0, 4], (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5)]
                [[1, 6], [1, 5], [0, 5], [0, 4], (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]                        (7, 5)      (1, 7)
        [[1, 7], [1, 6], [1, 5], [0, 5], [0, 4], (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5)]                         None       (1, 7)
[[1, 8], [1, 7], [1, 6], [1, 5], [0, 5], [0, 4], (0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5)]                                (6, 5)      (7, 0)
```

Okay. That looks a little hectic! Bear with me. Let's explain what is going on...




## The first six lines of code

The first line of the code says...
```
snake = [(0, 3), (1, 3), (2, 3), (2, 4), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (7, 6), (7, 7)]
```

<canvas id="snake-1">This should be a canvas describing Snake.</canvas><br><br>




## The remain lines of code

<canvas id="snake-2">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-3">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-4">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-5">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-6">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-7">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-8">This should be a canvas describing Snake.</canvas><br><br>
<canvas id="snake-9">This should be a canvas describing Snake.</canvas><br><br>
<script src="snake-draw-frame.js" defer></script>
<script src="snake-examples.js" defer></script>

