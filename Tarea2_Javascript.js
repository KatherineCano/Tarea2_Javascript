//variable con let
let Portugal = 10;
let España = 12;
let Italia = 14;
let Colombia = 7;
let Argentina = 20;


//variables con const
const Noche = "Night";
const Dia = "Day";
const Nombre = "Name";
const Apellido = "Lastname";
const Edad = "Years old";

//Funciones tipo flecha sin parametros
const Mostrarpais = () => "Colombia";

const mostrarHoraYPais = () => {
    const pais = "México";
    const horaActual = new Date().toLocaleTimeString(); 
    
    return `En ${pais}, la hora actual es: ${horaActual}`;
};


//Funciones tipo flecha con un parametro
const verificarSiEsParOImpar = (numero) => {
    
    if (numero % 2 === 0) {
      return `El número ${numero} es par`;
    } else {
      return `El número ${numero} es impar`;
    }
  };



//Funciones tipo flecha con más parametros
const calcularOperacionConParOImpar = (a, b, operacion) => {
    const resultado = (() => {
      switch (operacion) {
        case "suma":
          return a + b;
        case "resta":
          return a - b;
        case "multiplicacion":
          return a * b;
        case "division":
          return a / b;
        default:
          return "Operación no válida";
      }
    })();
  
    const esPar = (numero) => numero % 2 === 0;
  
    if (typeof resultado === "number") {
      return {
        resultado,
        aEsPar: esPar(a),
        bEsPar: esPar(b),
        resultadoEsPar: esPar(resultado)
      };
    } else {
      return resultado;
    }
  };
  