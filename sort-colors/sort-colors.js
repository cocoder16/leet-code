var mergeSort = function (arr, helper, low, high) {
    if (arguments.length === 1) {
        if (typeof arr === 'object') {
            helper = new Array(arr.length);
            mergeSort(arr, helper, 0, arr.length - 1);
        } else {
            return;
        }
    } else {
        if (low < high) {
            var middle = Math.floor((low + high) / 2);
            mergeSort(arr, helper, low, middle);
            mergeSort(arr, helper, middle+1, high);
            merge(arr, helper, low, middle, high);
        }
    }
};

var merge = function (arr, helper, low, middle, high) {
    for (var i = low; i <= high; i++) {
        helper[i] = arr[i];
    }
    
    var helperLeft = low;
    var helperRight = middle + 1;
    var cur = low;
    
    while (helperLeft <= middle && helperRight <= high) {
        if (helper[helperLeft] <= helper[helperRight]) {
            arr[cur] = helper[helperLeft];
            helperLeft++;
        } else {
            arr[cur] = helper[helperRight];
            helperRight++;
        }
        cur++;
    }
    
    var remaining = middle - helperLeft;
    
    for (var j = 0; j <= remaining; j++) {
        arr[cur + j] = helper[helperLeft + j];
    }
};

var sortColors = function(nums) {
    mergeSort(nums);
};