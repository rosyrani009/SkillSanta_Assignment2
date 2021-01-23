function rmvDp(){
    var i, j, count = 0;
    var k=0;
    var ar = Array();
    var arr = [3,'a','a','A',2,3,'a',3,'a',2,4,9,3];
    for(i = 0; i < arr.length; i++){
        j = i;         
        while (j < arr.length){
            if(arr[i] == arr[j]){
                count++;
            }
            if(count>1){
                arr[j]=null;
                count--;
            }
            j++;
            
        }
        count = 0;
        if(arr[i] != null){
            ar[k] = arr[i];
            k++;
        }
    }
    document.getElementById('rmvdup').innerHTML = 'Array after removing duplicate items :- [' + ar + ']';
}