var viccek = 
[
    "-Mi az a speciális eszköz amivel átlátsz a betonfalon? -Ablak.",
    "vicc2",
    "vicc3",
    "vicc4",
    "vicc5" 
]

 var kepek = [
     "0.jpg",
     "1.jpg",
     "2.jpg",
     "3.jpg",
     "4.jpg",

     
 ]


function rvicc()
{
    let veletlen_szam = Math.floor(Math.random() * viccek.length);
    console.log(veletlen_szam)
    document.getElementById("vicc_helye").innerHTML=viccek[veletlen_szam]
    document.getElementById("kep_helye").src=veletlen_szam[veletlen_szam]
}

rvicc()