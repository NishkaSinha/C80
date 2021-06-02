var names=[];
function submit(){
var displaynames=[];
for(var i=1; i<=4; i++){
    var name=document.getElementById("name_of_the_student_"+i).value;
    names.push(name);
}
console.log(names);
var length_array=names.length;
for(var j=0; j<length_array;j++){
    displaynames.push("<h4>name- "+names[j]+"</h4>");
}
document.getElementById("display_name_with_commas").innerHTML=displaynames;
var removecommas=displaynames.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecommas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

 function sorting(){
     names.sort();
     var displaynames_sort=[];
     var length_array=names.length;
for(var j=0; j<length_array;j++){
    displaynames_sort.push("<h4>name- "+names[j]+"</h4>");
}

var removecommas=displaynames_sort.join(" ");
document.getElementById("display_name_without_commas").innerHTML=removecommas;
 }
