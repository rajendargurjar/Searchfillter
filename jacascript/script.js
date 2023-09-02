const search = () =>{
    const searchbox = document.getElementById("serach_iteam").value.toUpperCase();
    const storeitem = document.getElementById("product_list")
    const product = document.querySelectorAll(".product")
    const productname = document.getElementsByTagName("h2")

    for(i=0;i<=productname.length;i++){
        let match = product[i].getElementsByTagName("h2")[0];

        if(match){
            let textvalue=  match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }

}