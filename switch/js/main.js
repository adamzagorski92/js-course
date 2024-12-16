console.log("Conditional instructions: switch");

/* 

switch (wyrazenie (najczęsciej jakaś zmienna)) {

case wartosc1:
        ...instrukcja JS, gdy wyrażenie ma 'wartosc1
        [break;] (break kończy insruckję switch case)

        ...
        ...
        ...

    case wartoscN:
        ...instrukcja JS, gdy wyrażenie ma 'wartoscN
        [break;]

    [default:
        ...instrukcja JS, gdy żadne z powyższych wartości nie pasuje do wyrażenia
        [break;]
    ]
}

*/



 let city = "Warszawa";
 switch (city) {
    case "Szczecin":
        console.log("Wybrano Szczecin");
        break;
    case "Warszawa":
        console.log("Wybrano Warszawę");
        break;
    case "Katowice":
        console.log("Wybrano Katowice");
        break;
    default:
        console.log("Nie wybrano miasta");
        break;
 }

 // Jeśli nie wstawię break , to instrukcje wykonują się dalej tak długo, aż napotkają na break lub skończy się kod. Pod warunkiem jednak, że warunek po drodze zostanie spełniony. Dzieje się to po pierwszym spełnionym warunku z case, aż do break.

 // Spróbujmy napisac menu: home, about us, portfolio, price, contact
 // za pomocą switch możnaby dodać animacje menu po najechaniu na odpowiedni kafelek. Trzebaby wtedy stworzyć elementy li, i przypisać eventListenera, który po najechaniu myszą będzie sterował CSS'em. Możnaby też zrobić tak, że jeśli przejdzie się na jakąś stronę, to switch utrzymuje podświetlny odpowiedni kafelek menu.
 // 
 
 let menu = "contact";

 switch (menu) {
    case "home":
        console.log("Home")
        break;
    case "about us":
        console.log("about us")
        break;
    case "portfolio":
        console.log("portfolio")
        break;
    case "price":
        console.log("price")
        break;
    case "contact":
        console.log("contact")
        break;
 }

 