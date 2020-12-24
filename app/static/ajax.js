window.onload = InitAll;

var savereg;
function InitAll(){
    savereg = document.getElementById('savereg');
    savereg.onclick = saveregister;
}
function saveregister(){
    var name=document.getElementById('id_name').value;
    var email=document.getElementById('id_email').value;
    var url = '/save?name='+name+'&email='+email;
    var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     alert(req.responseText);
    }
  };
  req.open("GET", url, true);
  req.send();
}
// ---------------------------------------------------- views ----
function viewe(){
  var url = '/view';
  var req = new XMLHttpRequest();
req.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = eval(req.responseText);
    var div = document.getElementById('showregistaer');

    var table = document.createElement('TABLE');
    
    // var row = table.insertRow(i);
    // var name = row.insertCell(0);
    // var email = row.insertCell(1);
    // var clickdelete = row.insertCell(2);

    // name.innerHTML="Name";
    // email.innerHTML="Email";
    // clickdelete.innerHTML="Delete";

    for(var i=0;i<data.length;i++){
      var row = table.insertRow(i);
      var name = row.insertCell(0);
      var email = row.insertCell(1);
      var deleterow = row.insertCell(2);

      name.innerHTML=data[i].name;
      email.innerHTML=data[i].email;
      deleterow.innerHTML="&times;";
      deleterow.style.color="red";
        deleterow.style.fontSize="25px";
        deleterow.style.cursor="pointer";
        deleterow.className="delete";
        deleterow.id=data[i].id;
//------------------------------------------------ delete row ----
        deleterow.onclick=function(){
          var obj =this;
          var id = this.id; 
          var url = '/deletereg?id='+id;
          var req = new XMLHttpRequest();
          req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              if(req.responseText == 'true'){
                table.deleteRow(obj.parentNode.rowIndex);
              }
            }
          };
          req.open("GET", url, true);
          req.send();
        }
//------------------------------------------------ delete row end ----
    }
    table.className="table";
    div.appendChild(table);  
   
  }
};
req.open("GET", url, true);
req.send();
}
// ---------------------------------------------------- views end ----
// ---------------------------------------------------- search ----
function searchsub(){
var search = document.getElementById('search').value;

var url = '/search?name='+search;
var req = new XMLHttpRequest();
req.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    if(req.responseText == 'true'){
      alert(req.responseText);
    }
  }
};
req.open("GET", url, true);
req.send();
}
