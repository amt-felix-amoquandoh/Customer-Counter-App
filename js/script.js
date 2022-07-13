let customers = document.getElementById('numberOfCustomers');
let entries = document.getElementById('entries');

let count = 0;
 

function increaseCount(){
   count += 1;
   customers.textContent = count;
}


function saveEntry (){
    let saveCount = count +' - ';
    entries.textContent += saveCount;
    customers.textContent = 0;
    count = 0; 
}
