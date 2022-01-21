function reverseString(str) {
    var charList = str.split('');

    var reverseStr = charList.reverse();
    var reversedStr = reverseStr.join('');
    return reversedStr;

}



// console.log(reverseString(str));

function checkPalindrome(str) {
    var reversedStr = reverseString(str);
    if (str === reversedStr) {
        return true
    } else {
        return false
    }

}

//  console.log(checkPalindrome('oppo'));



function convertsDateFromNumberToString(date) {






    var dateStr = {
        day: '',
        month: '',
        year: ''
    };




    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;





}

// console.log(convertsDateFromNumberToString(date));







function dateVariations(date) {


    var dateStr = convertsDateFromNumberToString(date);


    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];



}
//   console.log(dateVariations(date));




function isPalindromeForAllDateVariations(date) {
    var listOfPalindromes = dateVariations(date);

    var flag = false;

    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (checkPalindrome(listOfPalindromes[i])) {
            flag = true;
            break;
        }
    }

    return flag;

}

//  console.log(isPalindromeForAllDateVariations(date));


function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }

}

//  console.log(isLeapYear(2020));





function incrementDates(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }

    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }


        if (month > 12) {
            month = 1;
            year++;
        }

        return {
            day: day,
            month: month,
            year: year
        }

    }

// console.log(incrementDates(date));






function getNextPalindromeDate(date) {
    var ctr = 0;
    var incrementDt = incrementDates(date);

    while (1) {
        ctr = ctr + 1;
        var checkP = isPalindromeForAllDateVariations(incrementDt);
        if (checkP) {
            break;
        }
        incrementDt = incrementDates(incrementDt);
    }

    return {ctr, incrementDt};

}


var date = {
    day: 11,
    month: 2,
    year: 2020
};




console.log(getNextPalindromeDate(date));