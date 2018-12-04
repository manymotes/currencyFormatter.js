formatPrice(number) {
    //number needs to be in the following 2 decemal format: 10000.00
    var numberString = number.toString();
    var loc = number.toString().length - 1; 
    print (loc);
    var newNum = numberString.substr(loc, 3);
    // Logic to add thousands seperator after every 3 digits
    var count = 1;
    for (var i = loc - 1; i >= 0; i--) {
        if (count != 0 && count % 3 == 0) {
            newNum = numberString.substr(i, 1) + ',' + newNum;
        } else {
            newNum = numberString.substr(i, 1) + newNum;
        }
        count++;
    }
    return '$' + newNum;
}
