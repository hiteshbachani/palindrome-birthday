function reverseString(str) {
    var charList = str.split("");

    var reverseStr = charList.reverse();
    var reversedStr = reverseStr.join('');
    return reversedStr;

}

function checkPalindrome(str) {
    var reversedStr = reverseString(str);
{}
    if (str === reversedStr) {
        console.log("yay! it's a palindrome");
    } else {
        console.log("nah! it's not a palindrome");
    }

}

function convertsDateFromNumberToString() {
    

    var dateInStr = {
        day: '',
        month: '',
        year: ''
    };

    
 

    if (date.day < 10) {
        dateInStr.day = '0' + date.day;
    } else {
        dateInStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateInStr.month = '0' + date.month;
    } else {
        dateInStr.month = date.month.toString();
    }

    dateInStr.year = date.year.toString();

    return dateInStr;



}

var date = {
    day: 1,
    month: 2,
    year: 1998
};



function dateVariations(date) {

    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yymmdd = date.year.slice(-2) + date.month + date.day;

   var returnedVariations =  [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];

   return returnedVariations;

}


var dateAsStr = convertsDateFromNumberToString();
console.log(dateVariations(dateAsStr));


function isPalindromeForAllDateVariations(date) {
    var listOfPalindromes =  dateVariations(date);

    var flag = false;

    for(var i=0; i<listOfPalindromes.length; i++) {
        if(checkPalindrome(listOfPalindromes[i])) {
            flag = true;
            break;
        }
    }

    return flag;

}