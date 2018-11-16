# calculator

## [Try it](osiasjmp.github.io/calculator)

### *Known Bugs:*

- When reproduced right, a number can have multiple decimal separator.

> Example:
> 2.22.222
> 311.0.0.0

Steps to reproduced:
1. Input a digit with a decimal
> 2.22
2. Input an operator
> 2.22 ÷
3. Remove the operator using CE
> 2.22
4. Input a decimal separator
> 2.22.
