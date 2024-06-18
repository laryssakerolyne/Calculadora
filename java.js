// JavaScript Document

//Acciones tras cargar la página
window.onload = function(){ 
    mostrarEnPantalla=document.getElementById("textoPantalla"); 
    document.onkeydown = teclado; 
    }
    
    /*La pantalla de inicio muestra un 0 y solo permitirá la entrada de los 
    dígitos del teclado de la calculadora a los que hemos llamado 'numero'*/
    x="0"; 
    
    /*Se inician las variales en la pantalla: 1 es un número escrito por primera 
    vez, mientras que 0 son las cifras que completan nuestro número*/
    x1=1; 
    
    /*La opción de añadir un decimal. El 0 significará que el número es entero 
    y el 1 indicará que no lo es*/
    punto=0; 
    
    //Función numero para registar la escritura en pantalla
    function numero(xx) {  
             // Si x es igual a 0 el número que se muestra en pantalla es igual a 1.
             if (x=="0" || x1==1  ) { 
                mostrarEnPantalla.innerHTML=xx; 
                //Con esta variable se guarda el número y se continua con este
                x=xx; 
                }
             /*Esta operación se hace mediante una cadena de texto para que el 
               número tan solo se añada y no se sume al anterior*/
             else { 
                mostrarEnPantalla.innerHTML+=xx; 
                x+=xx; 
                }
                x1=0 
             }
             
    //Función para registrar el decimal
    function numero(xx) { 
             if (x=="0" || x1==1  ) { 
                mostrarEnPantalla.innerHTML=xx; 
                x=xx;
                
                /*Empezamos con el mismo condicional anterior pero en este caso estipulamos que si escribimos el punto al principio del número, este se pondrá después del 0, quedando como resultado 0.*/
                if (xx==".") { 
                   mostrarEnPantalla.innerHTML="0."; 
                   x=xx; 
                   punto=1; 
                   }
               }
              
               /*Si los numeros son iguales al decimal 'punto', es decir, si hemos introducido en la pantalla un punto; el punto que es igual a 0 cambia su estado para convertirse en 1 y de ese modo no permitir que el usuario introduzca dos puntos 
               en una cifra*/
               else { 
                   if (xx=="." && punto==0) { 
                       mostrarEnPantalla.innerHTML+=xx;
                       x+=xx;
                       punto=1;  
                   }
                 
                   else if (xx=="." && punto==1) {} 
                 
                   //Resto de casos: escribir un número del 0 al 9 	 
                   else {
                       mostrarEnPantalla.innerHTML+=xx;
                       x+=xx
                   }
                }
                x1=0 
             }
                         
    /*Incorporamos dos nuevas variables, la primera de ella nos servirá para guardar el primer número de la operación, al cual llamaremos 'número en espera'; mientras que la segunda variable si tenemos una operación en curso*/
    pendiente=0; 
    enCurso="no"; 
            
    //El sistema lleva a cabo las operaciónes matemáticas simples 
    function calcular(s) {
             pendiente=x 
             enCurso=s; 
             x1=1; 
             }
                  
    //Mediante la tecla de igual se muestra el resultado	 
    function igual() {
             if (enCurso=="no") { 
                mostrarEnPantalla.innerHTML=x;	
                }
            
             //Con una operación pendiente resolvemos
             else { 
                 //Escribimos la operación en cadena
                solucion=pendiente+enCurso+x; 
                
                //Convertimos esta cadena en un código y lo resolvemos
                solucion=eval(solucion)
                
                //Se muestra la solución 
                mostrarEnPantalla.innerHTML=solucion 
                
                //Guardamos la solución
                x=solucion; 
                
                //Terminada la operación ya no hay más pendientes
                enCurso="no"; 
                
                //Se reinicia la pantalla
                x1=1; 
                }
            }
                
    /*Ahora lo que vamos a llevar a cabo son operaciones encadenadas que se irán 
    resolviendo sin necesidad de pulsar la tecla igual*/ 
    function calcular(s) {
             igual(); 
             pendiente=x; 
             enCurso=s; 
             x1=1; 
             }
             
    /*Para hacer operaciones matemáticas de mayor envergadura hay que usar la 
    función 'Math.sqrt'*/ 
    function raiz() {
             x=Math.sqrt(x) 
             mostrarEnPantalla.innerHTML=x; 
             enCurso="no"; 
             x1=1;  
             }
             
    /*Para hallar de porcentaje, en esta ocasión he eliminado la visualización
    en pantalla para no mostrar el resultado del porcentaje por el cual se quiere multiplicar x, haciendo más directa de esta modo la operación*/
    function porcentaje() { 
             x=x/100 
             igualar() 
             x1=1 
             }
    
    /*Con esta función damos vida a la tecla CE que será la encargada de borrar la
    cifra que tengamos en pantalla, pero no toda la operación matemática*/
    function borradoParcial() {
           
            //Borrado de pantalla
            mostrarEnPantalla.innerHTML=0; 
           
            //Borrado indicador número pantalla
            x=0; 
        
            //Reiniciamos la opción del decimal
            punto=0; 					
            }
    
    //En esta función solo borraremos la última cifra que puesta en la pantalla
    function borradoUltimaCifra(){ 
        
             //Con 'length' podemos localizar la última cifra
             cifras=x.length; 
        
             //Una vez localizada puede ser borrada
             borrar=x.substr(cifras-1,cifras) 
             x=x.substr(0,cifras-1) 
             
             //Si ya no quedan caracteres, aparecerá el 0
             if (x=="") {x="0";} 
           
             //Si hemos quitado el decimal, se permite escribirlo de nuevo.
             if (borrar==".") {punto=0;} 
             mostrarEnPantalla.innerHTML=x;  
             }
    
    //Borrados toda la operación matemática poniendo todas las opciones a 0
    function borradoTotal() {
             mostrarEnPantalla.innerHTML=0; 
             x="0"; 
             punto=0;  
             pendiente=0 
             enCurso="no" 
             }