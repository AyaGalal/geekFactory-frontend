function addTask(){
    var category = document.getElementById('category').value;
    var title = document.getElementById('title').value;
    var priority = document.getElementById('priority').value;
    var estimate = document.getElementById('estimate').value;
    if(category && title && priority && estimate){
    var tbody = document.getElementById('tbody');
    var row = tbody.insertRow();
    row.innerHTML ='<tr><td>'+category+'</td><td>'+title+'</td><td>'+priority+'</td><td>'+estimate+'</td><td></td><td>'+estimate+'</td><td></td></tr>';
    }
}

