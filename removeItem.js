function rmvIt(){
    var mylist = document.getElementById("courses");
    var selItm = mylist.options[mylist.selectedIndex];
    mylist.removeChild(selItm);
}
