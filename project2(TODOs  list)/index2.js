function getAndUpdate(){
    console.log("Updating list...");
    let tit = document.getElementById('title').value
    let desc = document.getElementById('discription').value
    if (localStorage.getItem('itemsJSON')==null){
    itemJSONarray = [];
    itemJSONarray.push([tit,desc]);
    localStorage.setItem('itemsJSON',JSON.stringify(itemJSONarray));
}
else{
    itemJSONarraystr = localStorage.getItem('itemsJSON')
    itemJSONarray = JSON.parse(itemJSONarraystr)
    itemJSONarray.push([tit,desc]);
    localStorage.setItem('itemsJSON',JSON.stringify(itemJSONarray));
}  
    update();
}
function update(){
    if (localStorage.getItem('itemsJSON')==null){
    itemJSONarray = [];
    localStorage.setItem('itemsJSON',JSON.stringify(itemJSONarray));
}
else{
    itemJSONarraystr = localStorage.getItem('itemsJSON')
    itemJSONarray = JSON.parse(itemJSONarraystr)
}  
    let tablebody = document.getElementById("tablebody")
    let str = ""
    itemJSONarray.forEach((element,index) => {
        str += `
        <tr>
        <th scope = "row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class = "delete" onclick ="deleted(${index})" >Delete</button></td>
        </tr>`;
    });
    tablebody.innerHTML = str;

}
add = document.getElementById("add")
add.addEventListener("click",getAndUpdate);
update();
function deleted(itemindex){
    console.log("Deleted",itemindex)
    itemJSONarraystr = localStorage.getItem('itemsJSON')
    itemJSONarray = JSON.parse(itemJSONarraystr)
    itemJSONarray.splice(itemindex,1)
    localStorage.setItem('itemsJSON',JSON.stringify(itemJSONarray));
    update()

}
function reset2(){                
    if (confirm("Do you areally want to clear ?")){
    localStorage.clear()
    update()
}
}
// let remove = document.getElementsByClassName("delete")
// remove.addEventListener("click",localStorage.getItem('itemsJSON').pop())