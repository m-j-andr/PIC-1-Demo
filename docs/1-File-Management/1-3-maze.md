# An Amazing Maze of Paths




## Setup

 - Download [maze.zip](./maze.zip) and unzip it to obtain a folder called `maze`.

 - Four text files with the extension `.txt` are contained within `maze`'s subfolders.

 - Three of the four files are named after gemstones.




## Your tasks

 1. Find each of the four text files. Write down their relative file path **starting from the `maze` folder**.

    As a reminder of how relative paths specify locations on your computer,
    you could look inside the folder with relative path `./e/8/5/k/1` to see that
    there is **not a file** whose relative path is `./e/8/5/k/1/gemstone.txt`.

    <textarea id="relative_path" rows="1" cols="48" style="font-family:monospace"></textarea>
    <input type="button" value="Check the correctness of a relative path" id="submit_relative_path">
    <script>
      function respond_to_relative_path_submission() {
        const submission = document.getElementById('relative_path').value.replaceAll(' ', '').replaceAll('\n', '');
        if (submission === './y/o/u/a/r/ruby.txt'     ||
            submission === './e/s/u/p/e/topaz.txt'    ||
            submission === './r/w/o/n/d/sapphire.txt' ||
            submission === './e/r/f/u/l/what-is-the-real-treasure.txt') {
          alert('You specified one of the relative paths correctly - well done!');
        }
        else if (submission === '/y/o/u/a/r/ruby.txt'     ||
                 submission === '/e/s/u/p/e/topaz.txt'    ||
                 submission === '/r/w/o/n/d/sapphire.txt' ||
                 submission === '/e/r/f/u/l/what-is-the-real-treasure.txt') {
          alert('You are very close. Remember that the relative paths listed so far all start with a period.');
        }
        else if (submission.includes('/y/o/u/a/r/ruby.txt')     ||
                 submission.includes('/e/s/u/p/e/topaz.txt')    ||
                 submission.includes('/r/w/o/n/d/sapphire.txt') ||
                 submission.includes('/e/r/f/u/l/what-is-the-real-treasure.txt')) {
          alert('Lots of the path you specified is correct, but are you giving the path **relative to** the folder called "maze"???');
        }
        else {
          alert('Try again.');
        }
      }
      document.getElementById('submit_relative_path').addEventListener('click', respond_to_relative_path_submission);
    </script>

 2. **After opening and reading the text files...** What is the secret word?

    <textarea id="secret_word" rows="1" cols="48" style="font-family:monospace"></textarea>
    <input type="button" value="Submit secret word" id="submit_secret_word">
    <script>
      function respond_to_secret_word_submission() {
        const submission = document.getElementById('secret_word').value.replaceAll(' ', '').replaceAll('\n', '').toLowerCase();
        alert(submission === 'enigma' ? 'Correct - well done!' : 'Try again.');
      }
      document.getElementById('submit_secret_word').addEventListener('click', respond_to_secret_word_submission);
    </script>

 3. **After opening and reading the text files...** What is the secret phrase?

    <textarea id="secret_phrase" rows="1" cols="48" style="font-family:monospace"></textarea>
    <input type="button" value="Submit secret path" id="submit_secret_phrase">
    <script>
      function respond_to_secret_phrase_submission() {
        const submission = document.getElementById('secret_phrase').value.replaceAll(' ', '').replaceAll('\n', '').toLowerCase();
        alert(submission === 'youaresuperwonderful' ? 'Correct - well done!' : 'Try again.');
      }
      document.getElementById('submit_secret_phrase').addEventListener('click', respond_to_secret_phrase_submission);
    </script>




## Up next

Next, you will learn about the power of [find and replace](1-4-find-replace.md).

