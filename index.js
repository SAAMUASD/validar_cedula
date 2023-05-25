
//debe aceptar solo numeros
//funcion para validar cedula
const validarCedula=()=>{
    input=document.getElementById('input').value
    console.log(input)
    
    c = input.split('');
    v = [1,2,1,2,1,2,1,2,1,2]
    let respuesta = 0 ; 
    let up;
    let oc ;
    for (i=0;i <10;i++){  
    up =c[i] * v[i];
    ab = up;
    
    if ( ab >= 10 ) {
        oc = ab.toString()
        .split('')
        .map(x => parseInt(x) )
        .reduce( (x, y) => x + y);
    }else {
        oc = ab;
    }
    respuesta = parseFloat(respuesta) + parseFloat(oc);   
    }
    dp = respuesta;
    ac = dp.toString().split('')[0] + '0';
    ac = parseInt(ac);
    uj = (ac / 10) * 10;
        if (uj < dp ) {
            dp = (uj + 10) - dp; 
        }   
        if (c[10] == dp) {             
            document.getElementById('respuesta').innerHTML = '<span>Cedula Validada</span>';
        } else {
            document.getElementById('respuesta').innerHTML = '<span>Lo siento, no se pudo validar la cedula </span>';
        }
}