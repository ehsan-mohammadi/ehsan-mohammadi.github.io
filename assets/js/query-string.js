// Return value is assigned to QueryString
function queryString() {
    var i = 0, queryObj = {}, pair;
    var queryStr = window.location.search.substring(1);
    var queryArr = queryStr.split('&');
    for (i = 0; i < queryArr.length; i++) {
        pair = queryArr[i].split('=');
        // If first entry with this name
        if (typeof queryObj[pair[0]] === 'undefined') {
            queryObj[pair[0]] = pair[1];
            // If second entry with this name
        } else if (typeof queryObj[pair[0]] === 'string') {
            queryObj[pair[0]] = [queryObj[pair[0]], pair[1]];
            // If third or later entry with this name
        } else {
            queryObj[pair[0]].push(pair[1]);
        }
    }
    return queryObj;
}