function testMerge() {
    console.log("Module Started");
    console.log('start');
    mergeSort([1, 12, 5, 26, 7, 14, 3, 7, 2])
        // console.log(mergeSort([51, 95, 66, 72, 42, 38, 39, 41, 15]));
        // console.log(mergeSort([2, 4, 1, 6, 8, 5, 3, 7]));

    function merge(leftArray, rightArray, arr) {

        var lenLeft = leftArray.length,
            lenRight = rightArray.length,
            i = 0,
            j = 0,
            k = 0;

        while (i < lenLeft && j < lenRight) {
            if (leftArray[i] <= rightArray[j]) {
                arr[k] = leftArray[i];
                i++;
            } else {
                arr[k] = rightArray[j];
                j++;
            }
            k++;
        }
        while (i < lenLeft) {
            arr[k] = leftArray[i];
            i++;
            k++;
        }
        while (j < lenRight) {
            arr[k] = rightArray[j];
            j++;
            k++;
        }
    }

    function mergeSort(arr) {
        if (arr.length < 2) return arr;
        else {
            var p = 0,
                r = arr.length - 1;
            var mid = (p + r) / 2 | 0;

            var left = arr.slice(0, mid + 1),
                right = arr.slice(mid + 1, arr.length);
            console.log(' Left array: ' + left);
            mergeSort(left);
            console.log(' Reft array: ' + right);
            mergeSort(right);
            console.log(' Main array: ' + arr);
            merge(left, right, arr);
        }
        return arr;
    }


}
testMerge();
module.exports = testMerge;