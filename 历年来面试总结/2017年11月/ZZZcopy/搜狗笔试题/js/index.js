/**
 * Created by lenov on 2017/7/21.
 */

var oNavList = document.getElementById('nav-list');
var aLii = oNavList.getElementsByTagName('li');
for(var i=0; i<aLii.length; i++){
    aLii[i].index = i;
    aLii[i].onclick = function(){
        for(var i=0; i<aLii.length; i++){
            aLii[i].className = '';
        }
        this.className = 'select';
    };
}
var oTab = document.getElementById('tab');
var aLi = oTab.getElementsByTagName('li');//oTab.children;
var oVideoNotes = document.getElementById('video-notes');
var aDiv = oVideoNotes.getElementsByClassName('note');
for(var i=0; i<aLi.length; i++){
    aLi[i].index = i;
    aLi[i].onclick = function(){
        for(var i=0; i<aLi.length; i++){
            aLi[i].className = '';
            aDiv[i].className = 'note';
        }
        this.className = 'selected';
        aDiv[this.index].className = 'note selected';
    };
}
var aDis = document.getElementsByClassName('dis');
var str = aDis[0].innerHTML;
var aM = document.getElementById('m');
var oRight = document.getElementsByClassName('r');
var onOff = false;
var str1 = str;
if(str.length > 45){
    var str2 = str.slice(45, str.length);
    aDis[0].innerHTML = str.replace(str2, '......');
}else{
    aM.style.display = 'none';
    oRight[0].style.display = 'none';
}
aM.onclick = function(){
    onOff = !onOff;
    if(onOff == true) {
        aDis[0].innerHTML = str1;
        aM.innerHTML = 'pack';
    }else{
        aDis[0].innerHTML = str.replace(str2, '......');
        aM.innerHTML = 'more';
    }
}
