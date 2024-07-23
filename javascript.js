function yes(){
    const val=document.getElementById("txt");
    const text=val.value;

    if(text=="What is typeof operator?" || text=="What is equality in JavaScript ?" || text=="What is the object type?" || text=="Explain is Scope in JavaScript?" || text=="Explain arrays in JavaScript")
    {
        alert("Submission Successful!");
    }
    else
    alert("Invalid Question")
}

function no() {
    document.getElementById("txt").value = "";
}