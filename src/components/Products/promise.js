const callProducts = (data, id) => {
    return new Promise((resolve, reject) => {
        setTimeout(( ) => {
            if (data) {
                resolve(data.find((prod) => prod.id === parseInt(id)));
            } else {
                reject("Error");
            }
        }, 1500)
    })
}
export default callProducts;
