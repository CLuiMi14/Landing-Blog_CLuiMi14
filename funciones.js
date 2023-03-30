let boto=null;
console.log(boto);
const btn =document.getElementById("boton");
boto =document.getElementById("botn");
const btn3 =document.getElementById("boton3");
const btn4 =document.getElementById("boton4");
let opcion=null

console.log(btn)
console.log(boto)
console.log(btn)
//const text="Desea salir de la página ?"//
btn.onclick=function(){
if (boton.value="true") {
    let opcion = confirm("Desea salir de la página?")
    console.log(opcion)
    if((opcion)==true) { 
        window.open("https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol")
    }
    }
}

boto.onclick=function(){
if (botn.value="true") {
    let opcion = confirm("Desea salir de la página?")
    console.log(opcion)
    if((opcion)==true) { 
        window.open("https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol")
    }
    }
}

btn3.onclick=function(){
if (boton.value="true") {
    let opcion = confirm("Desea salir de la página?")
    console.log(opcion)
    if((opcion)==true) { 
        window.open("https://www.bibliotecanacional.gob.cl/noticias/la-seleccion-chilena-en-los-mundiales#:~:text=En%20su%20historia%20la%20selecci%C3%B3n,Sud%C3%A1frica%202010%20y%20Brasil%202014.")
    }
    }
}


btn4.onclick=function(){
if (boton.value="true") {
    let opcion = confirm("Desea salir de la página?")
    console.log(opcion)
    if((opcion)==true) { 
        window.open("https://es.wikipedia.org/wiki/Chile_en_la_Copa_Mundial_de_F%C3%BAtbol#Tabla_estad%C3%ADstica")
    }
    }
}

/*function funciones(){
    let text="Seguro desea salir de la página?"
    if(confirm(text)==true) {
        window.open("https://es.wikipedia.org/wiki/Copa_Mundial_de_F%C3%BAtbol");
    }
}*/