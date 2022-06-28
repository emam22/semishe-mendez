const callProductsCategory = (data, categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(
                    categoryId
                    ? data.filter((prod) => prod.category === categoryId)
                    : data
                );
            } else {
                reject("Error");
            }
        }, 1500);
    });
};
export default callProductsCategory;