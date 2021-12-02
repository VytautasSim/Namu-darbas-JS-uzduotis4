// Ketvirta užduotis
// - Išsaugokite įvestus skaičius į skaiciuMasyvas
// - Atspausdinkite tokį rezultatą:

// Skaičių suma: x
// Skaičių vidurkis: x
// Didžiausias skaičius: x
// Mažiausias skaičius: x


// P.S.
// Kad surasti sumą - panaudokite for / while ciklą. 
// To pačio ciklo viduje taip pat galite ieškoti didžiausio/mažiausio 
// skaičiaus ir jį saugoti.

const masyvas = []; //Masyvo pavadinimas

for (var number = 0; number <= 5; number++) //Ciklas skaiciams i masyva irasyti
{
    var number = prompt("Iveskite skaiciu");
    var number = Number(number);
    number = masyvas.push(number);
}    
console.log(masyvas); //Atvaizduojamas visas masyvas

//Sumuojame skaicius masyve. Su for ciklu
//Ieskome didziausio ir maziausio skaiciu

let suma = 0;
let average = 0;
var largest = masyvas[0];
var smalest = masyvas[0];

for (let number = 0; number < masyvas.length; number++)
{
    suma += masyvas[number]; //Sumuojame

    average = suma / masyvas.length; //skaiciuojame vidurki

    if (masyvas[number] > largest) //Ieskome maziausio ir didziausio
    {
        largest = masyvas[number];
    }
    else if (masyvas[number] < smalest)
    {
        smalest = masyvas[number]
    }
}
    console.log("Skaičių suma = " + suma);
    console.log("Skaičių vidurkis = " + average);
    console.log("Didžiausias skaičius = " + largest);
    console.log("Mažiausias skaičius = " + smalest);
