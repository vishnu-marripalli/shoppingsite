async function dispalycards() {
let a= await fetch(`/cartitems.json`)
let response=await a.json();

console.log(response.items[0])



let cards;

cards=document.querySelector(".cardcontainer")
for(i=0;response.items[i]!="";i++){
let item
  if(response.items[i]=="iphone"){
    
  item=response.iphone
    console.log(item.title)
  }
  else{
     item=response.laptop
    console.log(item.title)
  }

  cards.innerHTML=cards.innerHTML+`<div class="col">
  <div class="card mb-4 rounded-3 shadow-sm">
  <div class="card-header py-3">
  <h4 class="my-0 fw-normal">${item.title}</h4>
  </div>
  <div class="card-body">
  <div class="my-2">
  <img class="cardimg" src="${item.imgsrc}" alt="" srcset="">
  </div>
  <h1 class="card-title pricing-card-title">$${item.price}<small class="text-body-secondary fw-light">/mo</small></h1>
  <ul class="list-unstyled mt-3 mb-4">
  <li>${item.spec1}</li>
  <li>${item.spec2}</li>
  <li>${item.spec2} </li>
  <li>${item.spec3}</li>
  
  </ul>
  <button type="button" class="w-100 btn btn-lg btn-dark addtocart" onclick="addtocart(${item.price},'${item.title}')">Add to cart</button>
  </div>
  </div>
  </div>
  `
}
  console.log(cards)
  
  // Array.from(document.getElementsByClassName("addtocart")).forEach(e=>{
  //   e.addEventListener("click",()=>{
  //         console.log("added to cart")
  //       })
        
  //   })
    
}
let prices=[]
let pnames=[]
function addtocart(e,pn){
  
  prices.push(e)
  console.log(prices)
  localStorage.setItem("price",JSON.stringify(prices))
  pnames.push(pn)
  console.log(pnames)
  localStorage.setItem("name",JSON.stringify(pnames))
  
}
function main(){
 
  
  dispalycards();
}
main()
