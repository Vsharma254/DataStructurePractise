function testCase() {
    console.log("Module Started");
    donQuick();

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