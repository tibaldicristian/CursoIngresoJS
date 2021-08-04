function mostrar()
{
    var continente;
    var medioPago;
    var dias;
    var oferta;
    var descuento;
    var precioFinal;
    var recargo;
    
    dias=prompt("Ingrese el el número de días que utilizará el servicio:");

    continente=document.getElementById('selecContinente').value;
    medioPago=document.getElementById('selecPago').value;
    

    oferta=dias*100;
    
    switch(continente)
    {
        case "America":
            {
                switch (medioPago)
                {
                    case "Crédito":
                    case "Efectivo":
                    case "MercadoPago":
                    case "Cheque":
                    case "Leliq":
                        {
                            descuento=(oferta*15)/100;
                            precioFinal=oferta-descuento;
                            alert("Precio final: "+precioFinal);
                            break;
                        }
                    case "Débito":
                        {
                            descuento=(oferta*25)/100;
                            precioFinal=oferta-descuento;
                            alert("Precio final: "+precioFinal);
                            break;
                        }
                
                }
                break;
            }
        case "África":
        case "Oceania":
            {
                switch (medioPago)
                {
                    case "Crédito":
                    case "Débito":
                    case "Cheque":
                    case "Leliq":
                        {
                            descuento=(oferta*30)/100;
                            precioFinal=oferta-descuento;
                            alert("Precio final: "+precioFinal);
                            break;
                        }
                    case "MercadoPago":
                    case "Efectivo":
                        {
                            descuento=(oferta*45)/100;
                            precioFinal=oferta-descuento;
                            alert("Precio final: "+precioFinal);
                            break;
                        }
                }
                break;
            } 
        case "Europa":
            {
                switch (medioPago)
                {
                    case "Crédito":
                    case "Efectivo":
                    case "Cheque":
                    case "Leliq":
                        {
                            descuento=(oferta*25)/100;
                            precioFinal=oferta-descuento;
                            alert("Precio final: "+precioFinal);
                            break;
                        }
                    case "Débito":
                        {
                            descuento=(oferta*35)/100;
                            precioFinal=oferta-descuento;
                            alert("Precio final: "+precioFinal);
                            break;
                        }
                    case "MercadoPago":
                        {
                            descuento=(oferta*30)/100;
                            precioFinal=oferta-descuento;
                            alert("Precio final: "+precioFinal);
                            break;
                
                        }  
                }  
                break;
            }     
        default:
        {
            switch (medioPago)
            {
                case "Débito":
                case "Crédito":
                case "Efectivo":
                case "MercadoPago":
                case "Leliq":
                    {
                        recargo=(oferta*20)/100;
                        precioFinal=oferta+recargo;
                        alert("Precio final: "+precioFinal);
                        break;
                    }
                case "Cheque":
                    {
                        recargo=(oferta*35)/100;
                        precioFinal=oferta+recargo;
                        alert("Precio final: "+precioFinal);
                        break;
                    }
            }
            
        }
    }
}
