class Products{
    constructor(picture, id, garment, size, price){
        this.picture=picture
        this.id=id
        this.garment=garment
        this.size=size
        this.price=price
    }
}

const newProducts=[]

function loadDataAP(){

        let idElement=parseInt(document.querySelector("#idProductAP").value)
        let UserPicture=document.querySelector("#pictureAP").value
        let garmentValue = document.querySelector("#garmentSelectorAP");
        let selectGarment = garmentValue.options[garmentValue.selectedIndex].text;
        let UserSize=document.querySelector("#sizeAP").value
        let UserPrice=parseInt(document.querySelector("#priceAP").value)

        const messageRetry=document.querySelector("#retryIdMessage")

        if(newProducts.some((id)=>id.id==idElement)){
           
            messageRetry.innerHTML="<strong class='messageRetry'>ID repetido</strong>"
        }else{
            messageRetry.innerHTML="<strong class='messageRetry'></strong>"
            newProducts.push(new Products(UserPicture, idElement, selectGarment, UserSize, UserPrice))
        }
}








