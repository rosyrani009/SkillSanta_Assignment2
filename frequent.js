function freq(){
    var i, j, b, c = 1, mostEle, count = 0;
    var arr = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
    for(i = 0; i < arr.length; i++){
        b = arr[i];
       j = i;         
        while (j < arr.length){
            if(b == arr[j]){
                count++;
            }
            if(c < count){
                c = count;
                mostEle = b;
            }
            j++;
        }
        count = 0;
    }
    document.getElementById('freq').innerHTML ='Most frequent Item is :- ' + mostEle + ' (' + c + ' times)';
}