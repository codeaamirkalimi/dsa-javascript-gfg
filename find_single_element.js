/**
 * JavaScript program to find the array
 * element that appears only once
 * let ar = [2, 3, 5, 4, 5, 3, 4];
 * @param arr
 */
function find_single_element(arr) {
    // using nested for loop
    let single = [];
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                single.push(arr[i])
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(!single.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}
let ar = [2, 3, 5, 4, 5, 3, 4];
console.log(find_single_element(ar))

function find_single_element_map(arr) {
    let map = {};
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    for(let i in map) {
        if(map[i] == 1) {
            result.push(i);
        }
    }
    return result;
}

console.log(find_single_element_map(ar))

function find_single_element_xor(arr) {
    let res = arr[0];
    for (let i = 1; i < arr.length; i++)
        res = res ^ arr[i];

    return res;
}

console.log(find_single_element_xor(ar))