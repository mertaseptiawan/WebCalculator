const firstname = prompt("siapa nama depanmu?");
const lastname = prompt("siapa nama belakangmu?");
const language = prompt("apa bahasamu?");

const user = {
    name: {
        first : firstname,
        last : lastname,
    },
    language: language
};

if (user.language === "english") {
    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "french") {
    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "japanese") {
    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
    alert("Senang bertemu dengan anda " + user.name.first + " " + user.name.last + "!")
}