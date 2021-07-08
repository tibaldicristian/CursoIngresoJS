/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
	var precio3;
    var total;

    precio1=parseInt(document.getElementById('txtIdPrecioUno').value);
    precio2=parseInt(document.getElementById('txtIdPrecioDos').value);
    precio3=parseInt(document.getElementById('txtIdPrecioTres').value);

    total=precio1+precio2+precio3;
    alert("El total es: "+total);
}

function Promedio () 
{
	var precio1;
    var precio2;
	var precio3;
    var subTotal;
    var total;

    precio1=parseInt(document.getElementById('txtIdPrecioUno').value);
    precio2=parseInt(document.getElementById('txtIdPrecioDos').value);
    precio3=parseInt(document.getElementById('txtIdPrecioTres').value);

    subTotal=precio1+precio2+precio3;
    total=subTotal/3
    alert("El total es: "+total);
}

function PrecioFinal () 
{
	var precio1;
    var precio2;
	var precio3;
    var subTotal;
    var iva;
    var total;

    precio1=parseInt(document.getElementById('txtIdPrecioUno').value);
    precio2=parseInt(document.getElementById('txtIdPrecioDos').value);
    precio3=parseInt(document.getElementById('txtIdPrecioTres').value);

    subTotal=precio1+precio2+precio3;
    iva=subTotal*0.21
    total=subTotal+iva;

    alert("El total con el 21 % del iva incluido es: "+total);
}