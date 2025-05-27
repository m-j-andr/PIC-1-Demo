# PIC 1 - Find and Replace




## Finding a secret image

There is a secret image hidden inside the following text.

```
HIHKJHHHIKIHHKIIHJJJKIHKIJJHHIHIIIKHHHHHHIIIJIHHHIHHJII
KJIKIHIPKJHHJIHHKHIJJKIIKHIKHJKJIHHKHIIIHIJHHIHIJIHHIKH
IIHHPNMLOBIKHKHHBONBIHIHHHJKIHIIKPMNMHJIIIKKKIIJHHJKHKH
HHJHLMAFLLBIHHHPMMMIJJJHIIHHHHIJLOHINJJHJHIJHHHHIHHIHIH
KHHHIIHBMNAHKIHMONCKHJHKIHJHHIJMOHPNIKIHHIJJIJIHJJIIKIK
JIIIKIJOMNHIKKPLLNIIIBMMLNAHIIKNOPMIIHINOMGAPBAHJHHKHIH
KIIKJHOLLAJIHHMLLHKKMNLCKDLAKIPNLLCKHOLNCKFMLLEHHIKIHIH
IIHHJDNNLHIJHHNLLKHMLOCIHNMJIIBLMCIHMMOIHHIMMOKKIKJJJKI
KJIIHDNOEJHJINMNLJPNNEJKHDKJPOCONAKHONNJJIPMLNIHIIHKJKK
HIHJIDNNOBHLLOLNNLLOLBJJIHPGMCKEOMPMLLLAIKBOMNIPMJKHKJK
HIKHHHDEOMNMMFDOOLCDELMLMNECIKHHELNNHFNLLNMCKOLOCHHHJJJ
KKHJKIKKIKHIJHIIIJHJIIHHKIIKHHHHHIJIIIIJHKIHKJJJKIIKJHJ
IIIJHIIHHIJHKKKKJJHKJJHHJIHJJJIIHIIIIKIHHKJIJHIJIHKKHIK
```

To decode it, perform the following "Find and Replace"s.
 - `A --> 9`
 - `B --> "`
 - `C --> d`
 - `D --> b`
 - `E --> .`
 - `F --> o`
 - `G --> '`
 - `H, I, J, K --> 8`
 - `L, M, N, O --> a single space`




## Applying a long mathematical formula to a particular situation

The following math equation shows you what a $4\times 4$ *matrix* looks like.
These mathematical objects show up all over the place in Data Science.

<div>
  \[M =
  \begin{pmatrix}
  a & b & c & d\\
  n & p & q & r\\
  s & t & u & v\\
  w & x & y & z
  \end{pmatrix}\]
</div>

The *determinant* of the matrix $M$ is given by the following horrifically long formula.
```
+ a p u z - a p v y - a q t z + a q v x
+ a r t y - a r u x - b n u z + b n v y
+ b q s z - b q v w - b r s y + b r u w
+ c n t z - c n v x - c p s z + c p v w
+ c r s x - c r t w - d n t y + d n u x
+ d p s y - d p u w - d q s x + d q t w
```
Here, `a p u z` means `a` times `p` times `u` times `z`.

 - Make Sublime Text store a valid arithmetic expression,
   only involving numbers (no alphabetic characters),
   for the determinant of the following matrix.

   <div>
     \[A =
     \begin{pmatrix}
     3 & 1 & 4 & 1 \\
     2 & 5 & 1 & 1 \\
     1 & 1 & 2 & 3 \\
     2 & 1 & 2 & 3
     \end{pmatrix}\]
   </div>

 - Finally, use an online calculator like
   [Desmos Scientific Calculator](https://www.desmos.com/scientific){:target="_blank"}
   to find the determinant of the matrix $A$
   by copying and pasting your arithmetic expression into the calculator.




## Formatting UIDs

 - Download [grades.csv](./1-4-find-replace/grades.csv)

 - This file consists of a table with the following headings:
   `last name, first name, uid, hw1, hw2, hw3, hw4, hw5, exam1, exam2, final`.

 - This file was (fictionally) downloaded from a university's grading platform.
   The grading platform is somewhat silly because
   it has produced a file where University IDs (UIDs) contain dashes,
   and yet it will not allow one to upload a file where UIDs contain dashes!

 - Remove all the dashes from the UIDs in the `uid` column.

 - Watch out! Many student names contain dashes and
   the grading platform will not recognize students
   unless the dashes in their name are correct.




## Chemical reaction

Consider the following large piece of text which attempts to describe some important chemical reactions.

```
     N_9 H_11 CO_2  +  3 O_2  +                       N_6 H_8 O_6  +  2 N_9 H_15 C_5 O_3  +  N_15 H_22 C_6 O_5 Na
-->  N_9 H_11 CO_3  +  2 O_2  +    H_2 O  +           N_6 H_8 O_6  +    N_9 H_15 C_5 O_3  +  N_15 H_22 C_6 O_5 Na  +    N_9 H_13 C_5 O_3
-->  N_9 H_11 CO_4  +    O_2  +  2 H_2 O  +           N_6 H_8 O_6  +                         N_15 H_22 C_6 O_5 Na  +  2 N_9 H_13 C_5 O_3
-->  N_8 H_11 CO_2  +    O_2  +  2 H_2 O  +  NO_2  +  N_6 H_8 O_6  +                         N_15 H_22 C_6 O_5 Na  +  2 N_9 H_13 C_5 O_3
-->  N_8 H_11 CO_3  +            3 H_2 O  +  NO_2  +  N_6 H_6 O_6  +                         N_15 H_22 C_6 O_5 Na  +  2 N_9 H_13 C_5 O_3
-->  N_9 H_13 CO_3  +            3 H_2 O  +  NO_2  +  N_6 H_6 O_6  +                         N_14 H_20 C_6 O_5 Na  +  2 N_9 H_13 C_5 O_3
-->  N_9 H_13 CO_3  +            2 H_2 O  +  NO_2  +  N_6 H_6 O_6  +    N_4 H_9 C O_2 Na   +  N_10 H_13 C_5 O_4    +  2 N_9 H_13 C_5 O_3
```

The person recording the reactions has made some mistakes.
 - Each occurrence of Nitrogen (`N`) should really be a Carbon (`C`).
 - Each occurrence of Carbon (`C`) should be a Nitrogen (`N`).
 - Each occurrence of Sodium (`Na`) should really be a Sulphur (`S`).

Fix the mistakes!




## DNA and RNA sequences






## Fixing the McLaren and RedBull logos

 - Download [logo.bmp](./1-4-find-replace/logo.bmp).

 - Open the file and observe that
   the McLaren logo uses red
   and the RedBull logo uses orange.

   > **"No, Mikey. No, no, Mikey. That was so not right."** *Toto Wolff*

   We need to swap the colors!

 - Open the file with Sublime Text.
   The simplest way to do this is to drag the file icon
   onto an open Sublime Text window.

 - Right-click or two-finger tap and select "Reopen File as Text".

 - Click "Find" and "Replace...".
   Select the icon $.^*$.
   This enables the finds and replaces to recognize `\n` as "newline".

 - Now perform the following "Find and Replace"s.
   - `a single space --> no characters at all`.
     This will take a few seconds since there are many spaces to delete.
   - `2d1cea --> xxyyzz`
   - `2d\n1cea --> xx\nyyzz`
   - `2d1c\nea --> xxyy\nzz`
   - `0080ff --> 2d1cea`
   - `00\n80ff --> 2d\n1cea`
   - `0080\nff --> 2d1c\nea`
   - `xxyyzz --> 0080ff`
   - `xx\nyyzz --> 00\n80ff`
   - `xxyy\nzz --> 0080\nff`

 - Save the edited file.

 - Reopen the file with your normal image-viewing program.
   If you did everything correctly, then the colors will be correct
   (except that McLaren's orange is a little darker these days).




## Up next

Your first homework assignments are posted [here](1-5-homework.md).
Some of the content that you have learned so far is documented [here](../0-docs.md).
