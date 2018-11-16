# [calculator↗](https://osiasjmp.github.io/calculator)

## Known Bugs:

### Decimal Separator Bug
A number can have multiple decimal separator. (e.g. 2.22.22.00)

**Steps to reproduced:**
1. Input a digit with a decimal
    > 2.22
2. Input an operator
    > 2.22 x
3. Remove the operator using CE
    > 2.22
4. Input a decimal separator
    > 2.22.
