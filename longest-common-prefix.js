
var longestCommonPrefix = function(strs) {
    let count = 0;
    strs.sort();
    let firstStr = strs[0];
    let lastStr = strs[strs.length - 1];
    let minLen = Math.min(firstStr.length, lastStr.length);

    let i = 0;
    while(i < minLen && firstStr[i] === lastStr[i]){
        i++;
    }
    return firstStr.substring(0, i);
};


const arr = ["flower","flow","flight"];
console.log(longestCommonPrefix(arr)); // Output: "fl"