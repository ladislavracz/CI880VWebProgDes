let arr = [4166716, 1, 997, 12412, 151351, 1521];

function bubble(arr) {
    var swapped;
    for (var i = 0; i < arr.length; i++) {
        swapped = false;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    console.log(arr);
    return arr;
}

bubble(arr);