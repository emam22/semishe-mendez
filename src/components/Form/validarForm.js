import Swal from "sweetalert"

export const validarForm=(values)=>{
    

    if(values.nombre.length<4){
        Swal.fire({
            icon: 'error',
            title: 'Nombre invalido'
        })
        return false
    }
    if(values.apellido.length<4){
        Swal.fire({
            icon: 'error',
            title: 'Apellido invalido'
        })
        return false
    }
    if(values.email.length<7){
        Swal.fire({
            icon: 'error',
            title: 'Email invalido'
        })
        return false
    }

    return true
}