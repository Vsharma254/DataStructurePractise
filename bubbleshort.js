function testMerge() {
    console.log("Module Started");

    function BubbleShort() {
        var arr = [6, 2, 3, 4, 5, 1]
        var l = arr.length;
        for (var i = 0; i <= l; i++) {
            var isSwpaped = false;
            for (var j = 0; j < l - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    isSwpaped = true;
                    console.log(i);
                }
            }
            if (!isSwpaped)
                break;
        }
        console.log(arr);
    }
    BubbleShort();
}
testMerge();
module.exports = testMerge;