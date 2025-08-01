# Google Sheets - Tables, Types, and Filters




## Why Google Sheets?

Spreadsheets enable the organization, analysis,
and storage of data in tabular form.
The most popular spreadsheet editors are
[Microsoft Excel](https://en.wikipedia.org/wiki/Microsoft_Excel){:target="_blank"},
[Numbers](https://en.wikipedia.org/wiki/Numbers_(spreadsheet)){:target="_blank"},
and [Google Sheets](https://en.wikipedia.org/wiki/Google_Sheets){:target="_blank"}.

 - A free, web-based version of Excel is
   available through Microsoft's website,
   but its functionality is inferior to 
   the full, desktop version of Excel,
   which is not free.
 - Numbers is only available for Mac users.
 - [Google Sheets](https://docs.google.com/spreadsheets){:target="_blank"}
   is part of the free,
   web-based Google Docs Editors.
   Moreover, it is compatible with
   Microsoft Excel file formats.




## Opening a CSV File

 - Download [this file](./data/tutoring.csv).
   As you will see shortly,
   this CSV file contains data
   regarding the use of a tutoring service at a school.
   The data is made-up: a fictitious school with fictitious students.
 - Save the file in the folder `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/3-Spreadsheets`.
 - Through your g.ucla.edu email,
   open [Google Sheets](https://docs.google.com/spreadsheets){:target="_blank"}.
   - Click on the icon with 9 dots, next to UCLA, in the top-right.
   - Select `Sheets`.
 - Click on `Blank spreadsheet`.
 - Select `File > Open`.
 - Select `Upload > Browse`.
   ![File > Open, Upload > Browse](./sheets-screenshots/01.png)
 - Open the file that you just downloaded.




## Converting to a Table and Specifying Types

 - Select `Format > Convert to table` from the top menu.
 - Click at the top of the table (dark green)
   where it says `Table1` and edit it to say `Tutoring`.
 - Now use the arrows in the column headings.
   - Select `Name > Edit column type > Text`.
   - Select `Course > Edit column type > Text`.
   - Select `UID > Edit column type > Number > Number`.
   - Select `Time (Minutes) > Edit column type > Number > Number`.
   - Select `Timestamp > Edit column type > Date > Date time`.
   - These selections specified the most appropriate *datatype* for each column.
 - Select columns `A` to `E` and then
   select `Format > Alignment > Center` from the top menu.
 - If your table looks like the following screenshot, well done!
   ![Titled table with correct datatypes and nice alignment](./sheets-screenshots/02.png)




## Sorting a Column

We can sort columns by
using the arrows in the column headings again.

 - Select `Name > Sort Column > Sort A to Z`.
 - Select `Time (Minutes) > Sort Column > Sort Z to A`.
    - Notice that the times (not timestamps) are sorted in decreasing order.
    - Notice that the names are still sorted for each time (not timestamp).
    - Notice that the screenshot below shows rows 46 to 65.
   ![Table sorted by times and names](./sheets-screenshots/03.png)
 - Select `Timestamp > Sort Column > Sort A to Z`.
 - Notice that it is a little strange that the options always say
   "Sort A to Z" and "Sort Z to A" even when we are sorting
   numbers and dates.




## Quick Summary of Selected Values or Columns

Quick summaries of cells' data can be useful.
There are different options for Text, Numbers, and Dates.

 - Highlight `D2` to `D8`.
   At the bottom-right, it shows `Count: 7`.
 - Highlight `E2` to `E8`.
   At the bottom-right, one can select between Sum, Avg, Min, Max, Count, and Count Numbers.
 - Highlight all of column `E`.
   Compare Count and Count Numbers.
   ![Quick summary options for numbers; count versus count numbers](./sheets-screenshots/04.png)
   "Count" includes the column heading, whereas "Count Numbers" does not.
 - Highlight `A2` to `A8`.
   At the bottom-right, one can select between Min, Max, Count, and Count Numbers.




## Some Questions About The Data

 - How many times did Ahmed Ibrahim attend tutoring?
   - <textarea id="ahmed_1" rows="1" cols="18"></textarea>
 - What was the total time Ahmed attended tutoring for?
   - <textarea id="ahmed_2" rows="1" cols="18"></textarea>
 - What was Ahmed's longest tutoring session?
   - <textarea id="ahmed_3" rows="1" cols="18"></textarea>
 - Which course did Ahmed receive the most tutoring sessions for?
   - <textarea id="ahmed_4" rows="1" cols="18"></textarea>
 - Which course did Ahmed dedicate the most time to during their tutoring sessions?
   - <textarea id="ahmed_5" rows="1" cols="18"></textarea>
 - <input type="button" value="Submit solutions" id="ahmed_submit">
   - <span id="comment"><br><br></span>
   <script>
     function respond_to_ahmed_submission() {
       const submission_1 = document.getElementById('ahmed_1').value.replaceAll(' ', '').replaceAll('\n', '');
       const submission_2 = document.getElementById('ahmed_2').value.replaceAll(' ', '').replaceAll('\n', '');
       const submission_3 = document.getElementById('ahmed_3').value;
       const submission_4 = document.getElementById('ahmed_4').value.replaceAll(' ', '').replaceAll('\n', '').toLowerCase();
       const submission_5 = document.getElementById('ahmed_5').value.replaceAll(' ', '').replaceAll('\n', '').toLowerCase();
       let correct = true;
       if (!submission_1.startsWith('10'))   { correct = false;  alert('Your first answer is incorrect.'); }
       if (!submission_2.startsWith('490'))  { correct = false; alert('Your second answer is incorrect.'); }
       if ( submission_3        === '')      { correct = false;  alert('Your third answer is incorrect.'); }
       if ( submission_4        !== 'art3c') { correct = false; alert('Your fourth answer is incorrect.'); }
       if ( submission_5        !== 'engr7') { correct = false;  alert('Your fifth answer is incorrect.'); }
       if (correct) {
         document.getElementById('comment').innerHTML = 'You got it --- well done!';
         document.getElementById('new-lines').remove();
       }
     }
     document.getElementById('ahmed_submit').addEventListener('click', respond_to_ahmed_submission);
   </script>

<span id="new-lines">
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</span>




## Filters - What Are They For?

To answer the last two questions, it was helpful to...
 - sort the `Course` column from A to Z;
 - sort the `Name` column from A to Z.

This way Ahmed Ibrahim's information is shown at the top
and their different courses are grouped together.
We can see they attended tutoring for Art 3C
more than any other course (4 times).
By selecting `E2` to `E5`, `E6`, `E7` to `E8`, `E9` to `E11`,
and looking at the sum recorded at the bottom-right,
we can see they dedicated the most time to Engr 7
(175 minutes).

![Table sorted by course and names with a quick summary for Engr 7](./sheets-screenshots/05.png)

This was not too tricky,
but if our data set was larger,
you can imagine that these questions
could become tedious to answer.
*Filters* and *Pivot Tables* help us
to answer such questions more easily.
A filter does so
by allowing us to focus
on a subset of our data.
Suppose, for a minute,
that we had asked the questions
about Carlos Mensah.
 - You would have had
   to scroll all the way down to row 167.
 - When selecting the data,
   you would have had to be careful
   not to accidentally record data from
   Carlos Chen and Carlos Romano.

A filter will allow us to restrict to only
the entries that involve Carlos Mensah.




## Creating and Saving a Filter View

 - Click on the calculator to the right of where it says `Tutoring`
   (where it used to say `Table1`).
 - Click `Create filter view`.
   ![Create filter view](./sheets-screenshots/06.png)
 - Click `Save view`.
   ![Save view](./sheets-screenshots/07.png)
 - Name the *view* as `Carlos Mensah`.
   ![Name view](./sheets-screenshots/08.png)
 - Click `Save`.




## Filtering By Value

 - Click the filter icon to the right of where it says `Name`.
   It is supposed to look like a [funnel](https://en.wikipedia.org/wiki/Funnel#/media/File:Kitchen_Funnel.jpg){:target="_blank"}.
   ![Filter icon](./sheets-screenshots/09.png)
 - Click `Clear`.
 - Type `Carlos` in the search box.
 - Click on the `Carlos Mensah` search result.
   ![Creating a filter](./sheets-screenshots/10.png)
 - Click `OK`.
 - Conveniently, you can now see just the information associated with Carlos Mensah,
   and the filter icon looks even more like a funnel!
   ![Carlos Mensah](./sheets-screenshots/11.png)



## Exiting a Filter View

 - Click on the calculator to the right of where it says `Tutoring`
   (where it used to say `Table1`).
 - Click `Exit view`.
   ![Exit view](./sheets-screenshots/12.png)




## Filtering By Condition

 - Create another Filter View called `Long sessions`.
   - Click on the calculator to the right of where it says `Tutoring`
     (where it used to say `Table1`).
   - Click `Create filter view`.
   - Click `Save view`.
   - Name the view as `Long sessions`.
   - Click `Save`.

 - Click the filter icon next to `Time (Minutes)`.
 - Click `Filter by condition`
 - Click on the box below that says `None` and select `Greater than`.
 - Type `90` in the box below.
   ![Filtering by condition](./sheets-screenshots/13.png)
 - Click `OK`.
 - Notice that "greater than" is different
   to "greater than or equal to":
   90-minute sessions are excluded.
   ![No 90-minute sessions](./sheets-screenshots/14.png)




## Deleting a Filter View

 - Click on the calculator to the right of where it says `Tutoring`
   (where it used to say `Table1`).
 - You can now see that the views `Carlos Mensah` and `Long sessions`
   are easily available.
 - Let's delete the `Carlos Mensah` view.
 - Select the `Carlos Mensah` view.
 - `Data > View options > Delete view` will delete this view.
   Take note of other useful options that are available.
   ![Deleting a view](./sheets-screenshots/15.png)




## Some Questions About The Data

**Using filters, sorting, and selecting columns,**
answer the following questions.

 - How many students who attended tutoring are called Elena?
 - Which Elena spent the most time at tutoring sessions?
 - What was the total time this Elena attended tutoring for?
 - How many students who attended tutoring are called Amina?
 - Which Amina attended the most tutoring sessions?
 - What was the total number of tutoring sessions this Amina attended?
 - Which three students are tied for attending the most tutoring sessions greater than 90 minutes long?




<br><br>


On to [Pivot Tables](3-2-pivot.md)!!
