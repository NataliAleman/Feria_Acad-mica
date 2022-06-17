var letra = {
    "GUSTOS" : {
         "General: Manejar motocicleta" : {
            "Pasiones: Salir a rodar y ser programadora" : {
                "Juegos: Free fire, Call Of Duty, Halo" : {
                    "Otro" : "Estudiar"
                }
            }
        }
    },
    "INFORMACION PERSONAL" : {
        "No. Telefono : 5561315654" : {
            "Edad: 17 Años" : {
                "Estado civil: Soltera" : {
                    "Lugar de origen" : "San Luis Tecuahutitlan"         
                }
            }
        }
    },
    "MATERIAS PREFERIDAS" : {  
        "Materia 1: Expresion oral y escrita" : {
            "Materia 2: Algoritmos" : {
                "Materia 3: Matematicas discretas" : {
                    "Materia 4" : "Ingles"
                }
            }
        }
    },
    "PASATIEMPOS" : {
        "PASATIEMPO 1: Dormir" : {
            "PASATIEMPO 2: Salir a bailar" : {
                "PASATIEMPO 3: Salir de fiesta con mis amigos" : {
                    "PASATIEMPO 4" : "Jugar futbol"
                }
            }
        }
    },
    "LUGARES" : {
        "LUGAR 1: Marquelia" : {
            "LUGAR 2: Queretaro" :{
                "LUGAR 3: Oaxaca" : {
                    "LUGAR 4" : "Cuernavaca"
                }
            }
        }
    }
}
var eleccion = parseInt(prompt("Que informacion deseas consutal de NATALI" + "Presiona 1 = GUSTOS, 2 = INFORMACION PERSONAL, 3 = MATERIAS PREFERIDAS, 4 = PASATIEMPOS, 5 = LUGARES QUE LE GUSTAN"));
var n = eleccion;
switch(n){
    case 1:
        console.log(letra["GUSTOS"]);
        break;
    case 2:
        console.log(letra["INFORMACION PERSONAL"]);
        break;
    case 3:
        console.log(letra["MATERIAS PREFERIDAS"]);   
        break;
    case 4 :
        console.log(letra["PASATIEMPOS"]);
        break;
    case 5:
        console.log(letra["LUGARES"]);
        break;
}