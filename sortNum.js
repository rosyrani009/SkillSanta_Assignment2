function sortnm(){
    var myArr = [3,8,7,6,5,-4,-3,2,1];
    var tmp;
    for(var j = 0; j < 9 ; j++){
        for(var i = 0; i < myArr.length; i++){
            if(myArr[i]>myArr[i + 1]){
                tmp=myArr[i];
                myArr[i]=myArr[i + 1];
                myArr[i + 1]=tmp;
                console.log(myArr[i]);
            } else {
                console.log(myArr[i]);
                    }
         }
    }
    document.getElementById('sortnm').innerText = 'Sorted numbers of array:- myArr = [' + myArr + ']';
}