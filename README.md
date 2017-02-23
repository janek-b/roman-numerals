# _Roman Numerals_

#### _Convert numbers into roman numerals, 2-23-2017_

#### By _**Janek Brandt, Christian Martinez**_

## Description
_This program will take a number as an input and return it's corresponding roman numerals_


## Specifications

| Behavior                   | Input Example     | Output Example    |
| -------------------------- | -----------------:| -----------------:|
| When given a number that has a roman numeral symbol, return the symbol | 5 | V |
| When given a number, return the largest numeral that's smaller or equal to the number | 6 | 5 |
| When given a number, return the next largest numeral of the number | 8 | 10 |
| Find the largest numeral of the difference between a number and it's largest numeral | 7 | 1 |
| Return the difference divided by it's largest numeral | 7 | 2 |
| If the returned value is less than or equal to 3, return the largest numeral of the number and the largest numeral of the difference *n* times. where *n* is the returned value | 7 | 5, 1, 1 |
| If the returned value is greater than 3, return the largest numeral of the difference 5 - *n* times and the next largest numeral of the number | 9 | 1, 10 |
| When given a number separate it into ones, tens, hundreds, thousands. | 152 | 100, 50, 2 |
| Find the roman numerals of the separated numbers and concat them together| 100, 50, 2 | CLII |

## Setup/Installation Requirements

* _Clone the repository_
* _Open index.html file in web browser to view the project locally_
* _Use web server of your choice to host the website_

### License

Copyright (c) 2017 **_Janek Brandt & Christian Martinez_**

This software is licensed under the MIT license.
