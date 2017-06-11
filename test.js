function testCase() {
    console.log("Module Started");
    doneMerge();

    function doneMerge() {
        var arr = [12, 11, 13, 5, 6, 7];
        DivideMerge(arr, 0, 6);
        console.log(arr);

        function DivideMerge(arr, l, r) {
            if (l < r) {
                var m = l + (r - l) / 2;
                console.log(m);
                DivideMerge(arr, l, m);
                DivideMerge(arr, m + 1, r)
                mergeArray(arr, l, m, r);
            }
        }

        function mergeArray(arr, l, m, r) {
            var i, k, k;
            var l1lenght = m - l + 1;
            var l2lenght = r - m;
            var L = [];
            var R = [];
            for (i = 0; i < l1lenght; i++) {
                L[i] = arr[l + i];
            }
            for (j = 0; j < l2lenght; j++) {
                L[j] = arr[m + 1 + j];
            }
            i = 0;
            j = 0;
            k = l;
            while (i < l1lenght && j < l2lenght) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
            }
            while (i < l1lenght) {
                arr[k] = L[i];
                i++;
                k++;
            }

            /* Copy the remaining elements of R[], if there
               are any */
            while (j < l2lenght) {
                arr[k] = R[j];
                j++;
                k++;
            }

        }
    }


    //donQuick();
    function donQuick() {
        var arr = [10, 40, 12, 25, 90, 80, 60, 100, 30];
        quickSortExc(arr, 0, 8);
        console.log("partition called /n" + arr);

        function quickSortExc(arr, low, high) {
            if (low < high) {
                var pi = PartitionWorkDo(arr, low, high);
                quickSortExc(arr, low, pi - 1);
                quickSortExc(arr, pi + 1, high);
            }
        }

        function PartitionWorkDo(arr, low, high) {
            var i = low - 1;
            for (var j = low; j <= high - 1; j++) {
                if (arr[j] <= arr[high]) {
                    i++;
                    var temp = arr[j];
                    console.log(temp);
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
            var tempHigh = arr[high];
            arr[high] = arr[i + 1];
            arr[i + 1] = tempHigh;
            return (i + 1);
        }
    }
}
testCase();
module.exports = testCase;