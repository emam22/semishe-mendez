const callProductsCategory = (data, categoryId) => {
    return new Promise((resolve, reject) => {
            if(data){
            resolve(data.filter((prod) => prod.category !== categoryId ));
            }else{
            reject("Error420");
            }
        }
        )
    };
export default callProductsCategory;