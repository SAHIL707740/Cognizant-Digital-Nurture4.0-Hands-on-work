# Financial Forecasting Using Recursion

Step 1: Understand Recursive Algorithms

Recursion means a method calls itself to solve a smaller version of the same problem. In this program, it increases the value each year by the growth rate and reduces the year count until it reaches zero.
It makes the code simple and easy to follow when the pattern repeats. But recursion must always have a clear stopping condition to avoid errors.

Step 4: Analysis

The time complexity is O(n), as it runs once for each year. It works well for small inputs, but for large values, it can be slower and use more memory.
This can be improved by using a loop instead of recursion, or by storing values already calculated. For basic forecasting, recursion is fine, but loops are better for performance in bigger programs.
