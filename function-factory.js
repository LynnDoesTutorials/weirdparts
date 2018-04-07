function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === 'en') {
      console.log('Hello' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
      console.log('Hola' + firstname + ' ' + lastname);
    }

    if (language === 'fr') {
      console.log('Bonjour' + firstname + ' ' + lastname);
    }
  }
}

let greetEnglish = makeGreeting('en');
let greetSpanish = makeGreeting('es');
let greetFrench = makeGreeting('fr');

greetEnglish('Lynn', 'Krogseng');
greetFrench('Lynn', 'Aslaug');