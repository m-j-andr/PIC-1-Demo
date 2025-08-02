# Weighted Averages and a Trip to the Museum


## Motivating Weighted Averages

A museum has the following exhibitions.
 - Ancient Greek Artefacts
 - Middle Eastern Mosaics
 - South American Sculptures
 - Polynesian Paintings

The items in the Ancient Greek Artefacts exhibition
account for 17% of all of the museum's items.
The following table records similar
statistics for all of the exhibitions.

|                Exhibition | Fraction of museum |
| ------------------------: | :----------------: |
|   Ancient Greek Artefacts |         17%        |
|    Middle Eastern Mosaics |         26%        |
| South American Sculptures |         19%        |
|      Polynesian Paintings |         38%        |

You visit this museum and you look around the exhibitions,
but you only manage to see a fraction of each.
The following table details your visit.

|                Exhibition | Fraction of exhibition visited |
| ------------------------: | :----------------------------: |
|   Ancient Greek Artefacts |               62%              |
|    Middle Eastern Mosaics |               85%              |
| South American Sculptures |               55%              |
|      Polynesian Paintings |               22%              |

What fraction of the museum's items have you seen?
It might be tempting to calculate

<div>
  \[\frac{62\ +\ 85\ +\ 55\ +\ 22}{4}\ =\ 56\]
</div>

and claim that you visited 56% of the items in the museum.

 - **This is incorrect.**
 - This calculation *weights*
   each of the fractions
   62%, 85%, 55%, and 22% equally.
 - However, since Polynesian paintings
   account for more of the museum items
   than the other exhibitions,
   the fraction 22% should
   carry more importance than $\frac{1}{4}$.
 - **We need to calculate a *weighted average*.**

The correct calculation is as follows.

<div>
  \[
    \left(\frac{17}{100}\times\frac{62}{100}\right)\ +\ 
    \left(\frac{26}{100}\times\frac{85}{100}\right)\ +\ 
    \left(\frac{19}{100}\times\frac{55}{100}\right)\ +\ 
    \left(\frac{38}{100}\times\frac{22}{100}\right)\ =\ \frac{51.45}{100}
  \]
</div>

Said another way...

<div>
  \[
    17\% \times 62\%\ +\ 
    26\% \times 85\%\ +\ 
    19\% \times 55\%\ +\ 
    38\% \times 22\%\ =\ 51.45\%
  \]
</div>

 - We have *weighted* 62%, the fraction of the Ancient Greek artefacts that we visited,
   by 17%, the fraction of the items in the museum that they account for.
 - We have *weighted* 85%, the fraction of the Middle Eastern mosaics that we visited,
   by 26%, the fraction of the items in the museum that they account for.
 - We have *weighted* 55%, the fraction of the South American sculptures that we visited,
   by 19%, the fraction of the items in the museum that they account for.
 - We have *weighted* 22%, the fraction of the Polynesian paintings that we visited,
   by 38%, the fraction of the items in the museum that they account for.

Our *weights* are given by the fraction of the items in the museum that each exhibition accounts for.
Our *weighted average* is calculated by the following formula.

<div>
  \[
    \text{weighted average}\ =\ \text{weight}_1 \times \text{fraction}_1\ +\ 
                                \text{weight}_2 \times \text{fraction}_2\ +\ 
                                \text{weight}_3 \times \text{fraction}_3\ +\ 
                                \text{weight}_4 \times \text{fraction}_4
  \]
</div>

We visited 51.45% of the museum's items.


## Calculating Weighted Averages in Google Sheets

Create the following table in Google Sheets.

|                Exhibition | Fraction of museum (weight) | Fraction of exhibition visited | Fraction of museum visited |
| ------------------------: | :-------------------------: | :----------------------------: | :------------------------: |
|   Ancient Greek Artefacts |             17%             |               62%              |                            |
|    Middle Eastern Mosaics |             26%             |               85%              |                            |
| South American Sculptures |             19%             |               55%              |                            |
|      Polynesian Paintings |             38%             |               22%              |                            |
|                     Total |                             |                                |                            |

 - Make the following column headings.
   - Exhibition
   - Fraction of museum (weight)
   - Fraction of exhibition visited
   - Fraction of museum visited
 - Use a table as before.
   - Highlight from `A1` to `D6`.
   - Select `Format > Convert to table` from the top menu.
   - Click at the top of the table (dark green)
     where it says `Table1` and edit it to say `Museum`.
   - Now use the arrows in the column headings.
     - Select `Exhibition > Edit column type > Text`.
     - Select `Fraction of museum (weight) > Edit column type > Number > Percent`.
     - Select `Fraction of exhibition visited > Edit column type > Number > Percent`.
     - Select `Fraction of museum visited > Edit column type > Number > Percent`.
     - Select `"Upon"s per 10,000 characters > Edit column type > Number > Percent`.
 - Type in the values indicated for the first three columns.
