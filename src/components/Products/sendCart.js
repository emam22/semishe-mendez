import producsjson from './products.json';

const sendCart = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(producsjson)
        }, 3000)
    })
}
export default sendCart;