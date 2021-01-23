var myColor = ['Red','Green','White','Black'];
var jmyClr = Array();
var j = 0;
function joinStr(){
    
    while(j <= 2){
        jmyClr[j] = '\"';
        for(var i = 0; i < myColor.length; i++){
            
            if(i == myColor.length - 1){
                jmyClr[j] = jmyClr[j] + myColor[i]  ;
            }
            else if(j == 2){
                jmyClr[j] = jmyClr[j] + myColor[i] + '+';
            }
            else{
                jmyClr[j] = jmyClr[j] + myColor[i] + ',';
            }

        }
        document.getElementById('joinst').innerHTML +=  jmyClr[j] + '\"' + "<br>";
        j++;
    }
}