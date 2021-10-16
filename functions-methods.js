// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

// bepaal op welk indexnummer het apenstaartje staat
// knip alles ná het apenstaartje van het emailadres af


    function getEmailDomain(emailaddress) {
        const indexOfDomain = emailaddress.indexOf("@");
        const domain = emailaddress.substring(indexOfDomain + 1);
        return domain;
}

    const domainFirst = getEmailDomain("n.eeken@novi-education.nl");
    const domainSecond = getEmailDomain("t.mellink@novi.nl");
    const domainThird = getEmailDomain("a.wiersma@outlook.com");

    console.log(domainFirst, domainSecond, domainThird);



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


    function typeOfEmail(emailaddress) {
    const indexOfApenstaartje = emailaddress.indexOf('@');
    const domain = emailaddress.substring(indexOfApenstaartje + 1);
    console.log(domain);

    //  switch statement met returns
//      switch (domain) {
//         case "novi-education.nl":
//             return "Student";
//         case "novi.nl":
//             return "Medewerker";
//         default:
//             return "Extern";
//     }
// }


    if (domain === "novi-education.nl") {
         return "Student";
    }
    else if (domain === "novi.nl") {
        return "Medewerker";
    }
    else if (domain === "outlook.com") {
        return "Extern";
    }
    else {
        return "Extern";
        }

    }

    const typeFirst = typeOfEmail("n.eeken@novi-education.nl")
    const typeSecond = typeOfEmail("t.mellink@novi.nl");
    const typeThird = typeOfEmail("novi.nlaapjesk@outlook.com");
    const typeFourth = typeOfEmail("a.wiersma@outlook.com");

    console.log(typeFirst, typeSecond, typeThird, typeFourth);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in



    function checkEmailValidity(emailaddress) {

    const containsApenstaartje = emailaddress.includes('@');
    const containsComma = emailaddress.includes(',');

    const indexOfLastDot = emailaddress.lastIndexOf('.');
    const containsNoDotAtEnd = indexOfLastDot !== emailaddress.length - 1;

    if (containsApenstaartje && !containsComma && containsNoDotAtEnd) {
        return true;
    } else {
        return false;
    }

}

    const validFirst = checkEmailValidity("n.eeken@novi.nl");
    const validSecond = checkEmailValidity("tessmellink@novi.nl");
    const validThird = checkEmailValidity("n.eekenanovi.nl");
    const validFourth = checkEmailValidity("n.eeken@novinl.");
    const validFifth = checkEmailValidity("tessmellink@novi,nl");

    console.log(validFirst, validSecond, validThird, validFourth, validFifth);