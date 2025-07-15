# Google Sheets - Tables, Types, and Filters




## Opening a CSV File

 - Download [this file](???.csv)
 - Save to `/Users/YOUR_NAME/Documents/UCLA-Classes/PIC-1/3-Spreadsheets/???.csv`
 - `Sheets`
 - `Blank spreadsheet`
 - `File > Open`
 - `Upload > Browse`
 - Select the file just downloaded




## Converting to a Table and Specifying Types

 - `Format > Convert to table`

 - Click where it says `Table1` and edit it to say `Tutoring`.

 - `Name > Edit column type > Text`
 - `Course > Edit column type > Text`
 - `UID > Edit column type > Number > Number`
 - `Time (minutes) > Edit column type > Number > Number`
 - `Timestamp > Edit column type > Date > Date time`

 - Select columns `A` to `E`. `Format > Alignment > Center`




## Sorting a Column

 - `Name > Sort Column > Sort A to Z`
 - `Time (minutes) > Sort Column > Sort Z to A`
    - Notice that times are sorted in decreasing order
    - Notice that names are still sorted for each time
 - `Timestamp > Sort Column > Sort A to Z`




## Quick Summary of Selected Values or Columns

 - Highlight `D2` to `D8`
   At the bottom-right it shows `Count: 7`
 - Highlight `E2` to `E8`
   At the bottom-right one can select between Sum, Avg, Min, Max, Count, and Count Numbers
 - Highlight all of column `E`.
   Compare Count and Count Numbers
 - Highlight `A2` to `A8`
   At the bottom-right one can select between Min, Max, Count, and Count Numbers




## Some Questions About The Data

 - How many times did Ahmed Ibrahim attend tutoring?
 - What was the total time they attended tutoring for?
 - What was their longest tutoring session?
 - Which course did they receive the most tutoring sessions for?
 - Which course did they dedicate the most time to during their tutoring sessions?




## Filters - What They Are For?

To answer the last two questions it was helpful to
 - sort the `Course` column from A to Z
 - sort the `Name` column from A to Z

This way Ahmed Ibrahim's information is shown at the top
and their different courses are grouped together.
We can see they attended tutoring for Art 3C
more than any other course (4 times).
By selecting `E2` to `E5`, `E6`, `E7` to `E8`, `E9` to `E11`,
and looking at the sum recorded at the bottom-right,
we can see they dedicated the most time to Engr 7
(175 minutes).

This was not too tricky,
but if our data set was larger,
you can imagine that these questions
could become tedious to answer.
*Filters* and *Pivot Tables* help us
to answer such questions more easily.
A filter does so
by allowing us to focus
on a subset of our data.

Suppose for a minute
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

 - Click on calculator to the right of where it says `Tutoring`
   (where it used to say `Table1`).
 - Click `Create filter view`.
 - Click `Save view`.
 - Name the *view* as `Carlos Mensah`.
 - Click `Save`.




## Filtering By Value

 - Click the filter icon next to `Name`.
 - Click `Clear`.
 - Type `Carlos` in the search box.
 - Click on the `Carlos Mensah` search result.
 - Click `OK`.

Conveniently, you can see just the information associated with Carlos Mensah.




## Exiting a Filter View

 - Click on the calculator to the right of where it says `Tutoring`
   (where it used to say `Table1`).
 - Click `Exit view`.




## Filtering By Condition

 - Create another Filter View called `Long sessions`.
   - Click on calculator to the right of where it says `Tutoring`
     (where it used to say `Table1`).
   - Click `Create filter view`.
   - Click `Save view`.
   - Name the *view* as `Long sessions`.
   - Click `Save`.

 - Click the filter icon next to `Time (Minutes)`.
 - Click `Filter by condition`
 - Click on the box below and select `Greater than`.
 - Type `90` in the box.
 - Click `OK`.

Notice that "greater than" is different
to "greater than or equal to":
90-minute sessions are excluded.




## Deleting a Filter View

 - Click on the calculator to the right of where it says `Tutoring`
   (where it used to say `Table1`).
 - You can now see the views `Carlos Mensah` and `Long sessions`
   are easily available.
 - Let's delete the `Carlos Mensah` view.
 - Select it.
 - `Data > View options > Delete view` will delete it.
   Take note of other useful options that are available.




## Some Questions About The Data

Using filters, sorting and selecting columns,
answer the following questions.

 - How many students who attended tutoring are called Elena?
 - Which Elena spent the most time at tutoring sessions?
 - What was the total time this Elena attended tutoring for?
 - How many students who attended tutoring are called Amina?
 - Which Amina attended the most tutoring sessions?
 - What was the total number of tutoring sessions this Amina attended?
 - Which three students are tied for attending the most tutoring sessions greater than 90 minutes long?
