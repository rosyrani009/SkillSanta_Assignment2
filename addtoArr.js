let ar = Array();
let u = 0;
function addar(adde){
        var adde = adde.value;
        ar[u] = adde;
        u++;
        
}
function displayar(){
    document.getElementById("arEle").innerHTML = '';
    for(var i = 0; i < ar.length;i++){
        document.getElementById("arEle").innerHTML +='Element ' + i + ' = ' + ar[i] + '<br>';
    }
}