let genero = prompt("¿Cuántas calorías se deben ingerir por día? A continuacion indica tu genero M o H");
let edad = parseInt(prompt("A continuacion indica cuantos años tienes del 14 al 80"));

switch (genero) {
    case "M":
    case "m":
        if ((edad >= 14) && (edad <= 18)) {
            alert("Las mujeres de " + edad + " años deben consumir entre 1.800 y 2.400 kcal diarias");
        }
        else if ((edad >= 19) && (edad <= 30)) {
            alert("Las mujeres de " + edad + " años deben consumir entre 2.000 y 2.400 kcal diarias");
        }
        else if ((edad >= 31) && (edad <= 50)) {
            alert("Las mujeres de " + edad + " años deben consumir entre 1.800 y 2.200 kcal diarias");
        }
        else if ((edad >= 51) && (edad <= 80)) {
            alert("Las mujeres de " + edad + " años deben consumir 1800 kcal diarias");
        };
        break;

    case "h":
    case "H":

        if ((edad >= 14) && (edad <= 18)) {
            alert("Los hombres de " + edad + " años deben consumir entre 2.400 - 2.800 kcal diarias");
        }
        else if ((edad >= 19) && (edad <= 30)) {
            alert("Los hombres de " + edad + " años deben consumir entre 2.600 - 2800 kcal diarias");
        }
        else if ((edad >= 31) && (edad <= 50)) {
            alert("Los hombres de " + edad + " años deben consumir 2.400 - 2.600 kcal diarias");
        }
        else if ((edad >= 51) && (edad <= 80)) {
            alert("Los hombres de " + edad + " años deben consumir 2.200 kcal diarias");
        };
        break;
    default:
        alert("Lo sentimos, estas fuera del rango, mejor consultá con tu médico");
        break;
};

for (let i = 1; i <= 10; i++) {
    let listaCompra = prompt("Ingresa el alimento que quieres comprar");
       console.log(" N* "+i+" Nombre del alimento: "+listaCompra);
};
















