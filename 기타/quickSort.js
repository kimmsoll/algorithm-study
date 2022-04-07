function quickSort(arr, start, end) {
    if (start >= end) return;
    let pivot = start;
    let left = start + 1;
    let right = end;
    let temp;

    while (left <= right) {
        while (left <= end && arr[left] <= arr[pivot]) {
            left++;
        }
        while (right > start && arr[right] >= arr[pivot]) {
            right--;
        }
        if (left > right) {
            temp = arr[right];
            arr[right] = arr[pivot];
            arr[pivot] = temp;
        } else {
            temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
        }
    }

    quickSort(arr, start, right - 1);
    quickSort(arr, right + 1, end);

    return arr;
}