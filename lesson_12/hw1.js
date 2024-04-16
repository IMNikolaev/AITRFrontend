const getIntByIndexInArray = (arr, index) => {
    if (index >=0 && index < arr.length) {
        return arr[index];
    }
    else {
        console.log("No such index in array");
    }
}

let array = [1,2,3,4,5];
console.log(getIntByIndexInArray(array,2));
console.log(getIntByIndexInArray(array,734));