# Key concepts

This document is arranged so that every major concept has a heading associated with it
which begins with `concept::`. For example, if you want to learn about `if` statements,
then you can search for `concept::if`. When a concept involves more than one word,
the words are separated-by-dashes. For example, if you want to learn about `for` loops,
then you can search for `concept::for-loop`. Multiple headings are often given so
that your searches are more likely to succeed. Headings list words in singular, so
searching for `concept::directory` is better than searching for `concept::directories`.

All coding concepts are approached through the Python coding language.


## concept::filename-extension, concept::file-extension, concept::extension

Most filenames end with a period and
a sequence of one or more characters,
e.g. `.pdf`, `.jpg`, and `.mp3`.
These suffixes to the names of computer files are called *filename extensions*.
They are often used to indicate characteristics of the file and/or its intended use,
and so it is always helpful for us to be able to see them...

### Viewing file extensions on MacOS
 - Go to Finder.
 - Choose "Finder > Settings".
 - Click "Advanced".
 - Select "Show all filename extensions".

### Viewing file extensions on Windows 10
 - Go to File Explorer.
 - Choose the "View" tab.
 - Select "File name extensions" (in the "Show/hide" group).

### Viewing file extensions on Windows 11
 - Go to File Explorer and maximize the window.
 - Select "View".
 - Select "Show > File name extensions".


## concept::txt, concept::csv, concept::bmp, concept::jpg, concept::png, concept::pdf, concept::wav, concept::aiff, concept::flac, concept::mp3, concept::m4a, concept::mp4, concept::mov, concept::html, concept::py, concept::ipynb

Here are some common file extensions.
Do not worry if you have not encountered them all.

| Extension               | Purpose                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
|  `.txt`                 | Text file consisting of plain text (no formatting)                                                      |
|  `.csv`                 | Text file containing tabular data where columns are separated by commas                                 |
|  `.bmp`, `.jpg`, `.png` | Image file                                                                                              |
|  `.pdf`                 | Nicely formatted documents which can include text and images                                            |
|  `.wav`                 | Uncompressed audio (originated on Microsoft Windows)                                                    |
|  `.aiff`                | Uncompressed audio (originated on Apple Macintosh)                                                      |
|  `.flac`                | Compressed (lossless) audio file                                                                        |
|  `.mp3`                 | Compressed (lossy) audio file                                                                           |
|  `.m4a`                 | A container for audio files allowing storage of ALAC (lossless compression) and AAC (lossy compression) |
|  `.mp4`                 | Digital multimedia container format (video and audio)                                                   |
|  `.mov`                 | QuickTime file format (originated on Apple Macintosh)                                                   |
|  `.html`                | Document designed to be displayed in a web browser                                                      |
|  `.py`                  | Python script file                                                                                      |
|  `.ipynb`               | Interactive Python NoteBook file                                                                        |
|  `.zip`                 | An archive file format that supports lossless data compression                                          |


## concept::directory, concept::folder

Files on your computer are organized into *directories*.
For example, it is common for computers to have directories called
`Documents`, `Music`, `Pictures`, and `Downloads` within a directory
associated with the user of the computer.

It is possible to navigate through these directories using the
the Terminal on Mac or the Command Prompt on Windows. However,
you are most familiar with navigating through them using Finder
on Mac or the File Explorer on Windows. In this case, they appear
graphically as *folders* which you can double-click on to view
their contents.


## concept::path, concept::file-path, concept::filepath, concept::absolute-path, concept::relative-path

Given a file on your computer. You can repeatedly ask:

> "In what directory does this exist?"

Eventually, the answer to this question will be:

> "The root directory."

This is the top-most directory in a computer's filesystem.
The *path* of the original file stores the answers to all these questions.

 - Suppose the file is called `solutions.txt`,
 - that it is contained in a directory called `HW-1`,
 - that this directory is contained in a directory called `0-Homework-Assignments`,
 - that this directory is contained in a directory called `PIC-1`,
 - that this directory is contained in a directory called `UCLA-Classes`,
 - that this directory is contained in a directory called `Documents`,
 - that this directory is contained in a directory called `YOUR_NAME`,
 - that this directory is contained in a directory called `Users`,
 - and that this directory is contained in the root directory.

Then the path of your file is `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/0-Homework-Assignments/HW-1/solutions.txt`.
Similarly, the folder `HW-1` has the path `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/0-Homework-Assignments/HW-1`.
Both of these are *absolute paths* because they start at the root directory.

When using Finder on Mac or File Explorer on Windows,
your *current working directory* is listed at the top.
It can be convenient to give *relative paths*
relative to this current working directory.
For example, if we are working within the `PIC-1` directory, then
the path of the file `solutions.txt` relative to `PIC-1` is `./0-Homework-Assignments/HW-1/solutions.txt` and
the path of the directory `HW-1` relative to `PIC-1` is `./0-Homework-Assignments/HW-1`.

By analogy, you might like to imagine giving
your best alien friend the directions
to the In-N-Out closest to us:
`/Observable Universe/Laniakea Supercluster/Virgo Supercluster/Local Group/Milky Way Galaxy/Orion Arm/Solar System/Planet Earth/North America/United States of America/California/Los Angeles/Westwood/Gayley Ave/922`.
If they call you and tell you that they are already in Los Angeles,
you can give them directions from `Los Angeles` instead:
`./Westwood/Gayley Ave/922`.
If you believe that addresses are useful,
then you understand why paths are useful!


## concept::find, concept::replace, concept::find-and-replace, concept::find-and-replace-options

Find and Replace are two particularly useful features of Sublime Text (and other text editors).
 - We can use *find* on a piece of text to jump to particular parts of it and
   to count how many times a specified piece of text shows up.
    - Either select "Find > Find..."
    - or use the keyboard shortcut "command + F" on MacOS or "ctrl + F" on Windows.
 - We can use *replace* to change any found text
   to some other specified text.
    - Either select "Find > Replace..."
    - or use the keyboard shortcut "command + option + F" on MacOS or "ctrl + H" on Windows.
 - We can use *replace all* to change
   all occurrences of some looked-for text
   to some other specified text.

Sublime Text provides various find and replace options using the buttons at the bottom,
next to where you type what you would like to find.
 - `.*` enables searching for
   *[regular expressions](https://en.wikipedia.org/wiki/Regular_expression){:target="_blank"}*. 
   These provide clever ways to match text. As examples...
    - `uc[u,c,a,g]` allows one to search for
      `ucu`, `ucc`, `uca`, and `ucg`
      simultaneously using a single search.
    - `\n` allows one to search for the new line character;
    - `.{3}` allows one to search for groups of three characters.

 - `Aa` enables *case sensitivity*.
   ```
   The cat on the mat by the window saw the bird on the branch of the tree in the garden.
   ```
   - Turned off, `the` will be found seven times in the sentence above.
   - Turned on, `the` will be found six times in the sentence above
     since the first occurence has a capital `T`.

 - The quotes enable searching for *whole words*.
   ```
   Yesterday, there was a cat on the mat by the window.
   ```
   - Turned off, `the` will be found three times in the sentence above.
   - Turned on, `the` will be found two times in the sentence above
     since the first occurence is part of the word `there`.

 - One can specify whether to *wrap*
   (go back to the first result
   after the last result) and
   whether to *highlight matches*.

 - The *in selection* option does not work very well
   and I suggest that you ignore it.

 - When replacing, one can select `AB` to *preserve cases*.
   ```
   Test test
   ```
   - With case sensitivity turned off
     and preserve cases turned off,
     finding `test` and replacing all with
     `tester` gives `tester tester`.
   - With case sensitivity turned off
     and preserve cases turned on,
     finding `test` and replacing all with
     `tester` gives `Tester tester`.




## concept::string

## concept::charset

## concept::print


## concept::int

## concept::arithmetic

## concept::comparison


## concept::list

## concept::index

## concept::len, concept::length-of-a-list, concept::length-of-list


## concept::assignment, concept::assign, concept::=


## concept::bool, concept::boolean

## concept::equals, concept::equal-to, concept::==

## concept::and, concept::or, concept::not


## concept::control, concept::control-flow

## concept::if, concept::if-statement

## concept::while, concept::while-loop

## concept::for, concept::for-loop

## concept::range


## concept::float, concept::int-division, concept::float-division

## concept::floating-point-imprecision


## concept::function, concept::method

## concept::sort, concept::sorted


## concept::dictionary

## concept::set

## concept::comprehension, concept::list-comprehension, concept::dictionary-comprehension, concept::set-comprehension


## concept::numpy

## concept::scipy

## concept::fitting, concept::line-fitting, concept::curve-fitting

## concept::matplotlib, concept::plotting, concept::plt

