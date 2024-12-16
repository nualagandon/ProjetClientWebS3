const quizzData = [
    {
        question: "Quel est l'un des sujets de recherche de Anne-Marie KERMARREC ?",
        options: ["L'intelligence artificielle",
            "La cybersécurité",
            "Les algorithmes épidémiques",
            "Les algorithmes cryptographiques"],
        reponse: "C",
        details: "Anne-Marie KERMARREC a mené des recherches sur les systèmes distribués, les algorithmes pair à pair ainsi que les algorithmes épidémiques.",
        lien: "../pages/oeuvre.html",
    },
    {
        question: "Où Anne-Marie KERMARREC est-elle professeure actuellement ?",
        options: ["Ecole Polytechnique Fédérale de Lausanne (EPFL)",
            "Université Toulouse Jean-Jaurès (UT2J)",
            "Université de Rennes 1",
            "Vrije Universiteit"],
        reponse: "A",
        details: "Anne-Marie KERMARREC est maintenant professeure à l'École polytechnique fédérale de Lausanne (EPFL) en Suisse depuis 2020. ",
        lien: "../pages/biographie.html",
    },
    {
        question: "Pour quel blog a-t-elle écrit des tribunes ?",
        options: ["Presse-citron",
            "Fredzone",
            "Binaire du Monde",
            "Plénior"],
        reponse: "C",
        details: "Anne-Marie KERMARREC a écrit plusieurs tribunes pour le blog Binaire du Monde les 8 mars, date de la Journée internationale des femmes.",
        lien: "../pages/biographie.html",
    },
    {
        question: "Qu'est-ce qu'un algorithme pair à pair ?",
        options: ["Un algorithme qui sert à additionner des paires de nombres",
            "Un algorithme qui trie les nombres par paire croissante.",
            "Un algorithme qui nécessite une connexion permanente à un serveur principal",
            "Un algorithme qui organise les réseaux pair à pair"],
        reponse: "D",
        details: "Le algorithmes pair à pair sont des algorithmes qui ont pour objectif d'organiser les réseaux pair à pair.",
        lien: "../pages/oeuvre.html",
    },
    {
        question: "Qu'est-ce que Mediego ?",
        options: ["Un magazine Tech",
            "Une entreprise qui propose des systèmes de personnalisation",
            "Une plateforme e-commerce",
            "Un jeu vidéo"],
        reponse: "B",
        details: "Mediego est une startup qui commercialise des services de personnalisation de contenu en temps réel pour les médias en ligne.",
        lien: "../pages/oeuvre.html",
    },
    {
        question: "Quel prix ou distinction Anne-Marie KERMARREC n'a pas remporté ?",
        options: ["Prix de l'innovation Inria - Académie des Sciences - Dassault Systèmes et Trophée Femme Chef d'Entreprise",
            "Insignes de Chevalier de la Légion d'Honneur",
            "Fellow de l'Association for Computing Machinery (ACM)",
            "Prix Alan Turing Junior"],
        reponse: "D",
        details: "Anne-Marie KERMARREC n'a jamais remporté le Prix Alan Turing Junior car il n'existe pas !",
        lien: "../pages/biographie.html",
    },
    {
        question: "Quel ouvrage sur les femmes et le numérique Anne-Marie KERMARREC a-t-elle publié ?",
        options: ["Numérique, compter avec les femmes",
            "Les oubliées du numérique",
            "L'enjeu de mixité dans l'orientation vers les métiers du numérique",
            "La femme dans l'industrie du multimédia"],
        reponse: "A",
        details: "En 2021, Anne-Marie KERMARREC publie un livre aux éditions Odile Jacob : Numérique, compter avec les femmes. Elle est très engagée sur l'inclusion des femmes dans le domaine du numérique.",
        lien: "../pages/biographie.html",
    },
    {
        question: "Sous quelle forme se présente son livre Numérique, compter avec les femmes ?",
        options: ["Roman graphique",
            "Encyclopédie",
            "Essai",
            "Abécédaire"],
        reponse: "D",
        details: "Le livre prend la forme d'un abécédaire et se base sur ce qu'Anne-Marie KERMARREC a pu lire et observer au cours de sa carrière.",
        lien: "../pages/biographie.html",
    },
    {
        question: "En quelle année a-t-elle co-fondé Mediego ?",
        options: ["2016",
            "2015",
            "2019",
            "2004"],
        reponse: "B",
        details: "En 2015, Anne-Marie KERMARREC co-fonde la startup Mediego.",
        lien: "../pages/oeuvre.html",
    },
    {
        question: "Que modélise un algorithme épidémique ?",
        options: ["La reproduction des étoiles dans la galaxie",
            "La mutation des virus dans un environnement biologique",
            "La diffusion d'informations de noeud en noeud",
            "La migration des oiseaux entre continents"],
        reponse: "C",
        details: " Un algorithme épidémique fait circuler l'information de noeud en noeud, et leur fonctionnement est directement inspiré des propagations de maladies, d'où le nom de l'algorithme.",
        lien: "../pages/oeuvre.html",
    },
];

const debutQuizz = document.getElementById("debut-quizz");
const questionsQuizz = document.getElementById("questions-quizz");
const reponsesQuizz = document.getElementById("reponses-quizz");
const scoreQuizz = document.getElementById("score-quizz");
const texteQuestions = document.getElementById("texte-question");
const compteurQuestions = document.querySelector("h2");
const formulaireReponse = document.getElementById("formulaire-quizz");
const texteReponse = document.getElementById("reponses-texte");
const lienReponse = document.getElementById("reponses-lien");
const boutonQuestionSuivante = document.getElementById("question-suivante");
const afficherScore = document.getElementById("afficher-score")
const scoreFinal = document.getElementById("score-final");
const scoreTexte = document.getElementById("score-texte");

let indexQuestion = 0;
let score = 0;

document.querySelector(".demarrer-quizz").addEventListener("click", () => {
    debutQuizz.classList.add("hidden");
    questionsQuizz.classList.remove("hidden");
    chargerQuestion();
});

function chargerQuestion() {
    const questionActuelle = quizzData[indexQuestion];
    texteQuestions.textContent = questionActuelle.question;
    compteurQuestions.textContent = `Question ${indexQuestion + 1} / ${quizzData.length}`;

    formulaireReponse.innerHTML = "";

    questionActuelle.options.forEach((option, index) => {
        const idInput = `reponse${String.fromCharCode(65 + index)}`;

        const divOption = document.createElement("div");
        divOption.classList.add("option");

        const input = document.createElement("input");
        input.type = "radio";
        input.id = idInput;
        input.name = "reponse";
        input.value = String.fromCharCode(65 + index);

        const label = document.createElement("label");
        label.setAttribute("for", idInput);
        label.textContent = option;

        divOption.appendChild(input);
        divOption.appendChild(label);

        formulaireReponse.appendChild(divOption);
    });

    const boutonEnvoyer = document.getElementById("soumettre-reponse");
    boutonEnvoyer.disabled = true;

    const radios = formulaireReponse.querySelectorAll("input[type='radio']");
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            boutonEnvoyer.disabled = false;
        });
    });
}

document.getElementById("soumettre-reponse").addEventListener("click", () => {
    
    const optionChoisie = [];
    const checkboxes = formulaireReponse.querySelectorAll("input");
    let fauxOuJuste = false;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            optionChoisie.push(checkboxes[i].value);
        }
    }

    const reponseCorrecte = quizzData[indexQuestion].reponse;

    if (optionChoisie.includes(reponseCorrecte)) {
        score++;
        fauxOuJuste = true;
    }
    
    // Colorer rouge si la réponse est fausse et vert réponse correcte
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked){
            if (fauxOuJuste) {
                const label = document.querySelector(`label[for="${checkboxes[i].id}"]`);
                label.classList.add("vert");
            } else {
                const wrong = document.querySelector(`label[for="${checkboxes[i].id}"]`);
                wrong.classList.add("rouge");
                
                for (let j = 0; j < checkboxes.length; j++) {
                    if (checkboxes[j].value == reponseCorrecte) {
                        const correct = document.querySelector(`label[for="${checkboxes[j].id}"]`);
                        correct.classList.add("vert");
                    }
                }
            }
        }
    }

    reponsesQuizz.classList.remove("hidden");
    texteReponse.textContent = quizzData[indexQuestion].details;
    lienReponse.href = quizzData[indexQuestion].lien;
    lienReponse.classList.remove("hidden");
    document.getElementById("soumettre-reponse").classList.add("hidden");
});

boutonQuestionSuivante.addEventListener("click", () => {
    document.getElementById("soumettre-reponse").classList.remove("hidden");
    indexQuestion++;
    if (indexQuestion === quizzData.length - 1) {
        boutonQuestionSuivante.classList.add("hidden");
        afficherScore.classList.remove("hidden");
        reponsesQuizz.classList.add("hidden");
        questionsQuizz.classList.remove("hidden");
        chargerQuestion();
        
    } else {
        reponsesQuizz.classList.add("hidden");
        questionsQuizz.classList.remove("hidden");
        chargerQuestion();
    }
});

afficherScore.addEventListener("click", () => {
    document.getElementById("soumettre-reponse").classList.remove("hidden");
    reponsesQuizz.classList.add("hidden");
    questionsQuizz.classList.add("hidden");
    scoreQuizz.classList.remove("hidden");
    scoreFinal.textContent = `${score} / ${quizzData.length}`;
    scoreTexte.textContent = score > 7
        ? "Excellent travail ! Vous avez une très bonne connaissance."
        : score > 4
        ? "Bon score ! Vous avez une bonne compréhension."
        : "Essayez à nouveau, vous pouvez faire mieux !";
});

document.getElementById("recommencer-quizz").addEventListener("click", () => {
    indexQuestion = 0;
    score = 0;
    scoreQuizz.classList.add("hidden");
    debutQuizz.classList.remove("hidden");
    boutonQuestionSuivante.classList.remove("hidden");
    afficherScore.classList.add("hidden");
});