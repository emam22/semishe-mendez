const callProductsCategory = (data, id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(data){
            resolve(data.find((prod) => prod.id >= (100)));
            }else{
            reject("Error420");
            }
            }, 2000)
    })
}
export default callProductsCategory;