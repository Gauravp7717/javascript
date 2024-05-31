// rearrange the binary code in first zeros and ones order in arr


function bitRarrange(arr){
    let left  = 0;
    let right =  arr.length-1;

    while(left<=right){
        if(arr[left]===1  && arr[right]===0){
            let temp = arr[left];
            arr[left] = arr [right]
            arr[right] = temp;
        }
        if(arr[left]==0)
        left++;
        if(arr[right]==1)
        right--;
    }

}


let arr = [1,1,1,1,1,1,1,0,0,0,0];


bitRarrange(arr);

console.log(arr)