function countDuplicatesWithCount(array) {
    let counts = {};
    let duplicatesCount = 0;
    let duplicatesWithCount = {};

    // Count occurrences of each element
    array.forEach(element => {
        counts[element] = (counts[element] || 0) + 1;
    });

    // Count duplicates and store counts
    for (let key in counts) {
        if (counts.hasOwnProperty(key)) {
            if (counts[key] > 1) {
                duplicatesCount++;
                duplicatesWithCount[key] = counts[key] - 1;
            }
        }
    }

    return { totalDuplicates: duplicatesCount, duplicatesWithCount };
}

function paynow(){
    localStorage.clear()
}




let price = []
async function dispalylist() {
    let names = []
    price = JSON.parse(localStorage.getItem("price"));
    console.log(price)
    names = JSON.parse(localStorage.getItem("name"));
    console.log(names)
    const result = countDuplicatesWithCount(names);
    console.log(result.duplicatesWithCount)
    console.log(result.duplicatesWithCount.Iphone + 1)
    let list = document.querySelector(".listcontainer")
    for (let index = 0; index < price.length; index++) {

        list.innerHTML = `<li class="list-group-item d-flex justify-content-between lh-sm">
    <div>
    <h6 class="my-0">${names[index]}</h6>
    <small class="text-body-secondary">Quantity : 1 </small>
    </div>
    <span class="text-body-secondary">$${price[index]}</span>
    </li>`+ list.innerHTML
    }
    dispalytotal(price);
}
async function dispalytotal(price){
    let total =document.getElementById("Total")
    let badge=document.getElementById("nfp")
    badge.innerHTML=price.length
    let sum=0;
    for (let index = 0; index < price.length; index++) {
        sum=sum+price[index]
    }
    console.log(sum)
    sum=sum-5
    total.innerHTML="$"+ sum
}
dispalylist();