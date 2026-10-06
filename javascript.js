document.addEventListener("DOMContentLoaded", function () {
// ==========================================
// QUIZ POKÉMON & ONE PIECE
// ==========================================


// ==========================================
// BANCO DE PERGUNTAS
// ==========================================

const questionBanks = {

    // ==========================================
    // 🟢 FÁCIL
    // ==========================================

    easy: [

        {
            question: "Qual é o Pokémon mais conhecido por acompanhar Ash na série de anime?",

            answers: [
                "Charizard",
                "Pikachu",
                "Bulbasaur",
                "Eevee"
            ],

            correct: 1
        },

        {
            question: "Qual é o nome do protagonista de One Piece?",

            answers: [
                "Roronoa Zoro",
                "Sanji",
                "Monkey D. Luffy",
                "Trafalgar Law"
            ],

            correct: 2
        },

        {
            question: "Qual é o tipo do Pokémon Squirtle?",

            answers: [
                "Fogo",
                "Água",
                "Planta",
                "Elétrico"
            ],

            correct: 1
        },

        {
            question: "Qual é o sonho de Luffy?",

            answers: [
                "Ser o Rei dos Piratas",
                "Ser o maior espadachim",
                "Encontrar a All Blue",
                "Ser um Almirante"
            ],

            correct: 0
        },

        {
            question: "Qual Pokémon é conhecido como o Pokémon Rato Elétrico?",

            answers: [
                "Raichu",
                "Pikachu",
                "Emolga",
                "Pachirisu"
            ],

            correct: 1
        },

        {
            question: "Qual é o nome do espadachim dos Chapéus de Palha?",

            answers: [
                "Usopp",
                "Franky",
                "Brook",
                "Roronoa Zoro"
            ],

            correct: 3
        },

        {
            question: "Qual é o Pokémon inicial de Fogo da primeira geração?",

            answers: [
                "Charmander",
                "Cyndaquil",
                "Torchic",
                "Chimchar"
            ],

            correct: 0
        },

        {
            question: "Qual é o nome do cozinheiro dos Chapéus de Palha?",

            answers: [
                "Sanji",
                "Jinbe",
                "Franky",
                "Usopp"
            ],

            correct: 0
        },

        {
            question: "Qual é o Pokémon que evolui de Magikarp?",

            answers: [
                "Lapras",
                "Gyarados",
                "Milotic",
                "Dragonite"
            ],

            correct: 1
        },

        {
            question: "Qual é o nome do navio atual dos Chapéus de Palha?",

            answers: [
                "Going Merry",
                "Red Force",
                "Thousand Sunny",
                "Oro Jackson"
            ],

            correct: 2
        }

    ],


    // ==========================================
    // 🟡 MÉDIO
    // ==========================================

    medium: [

        {
            question: "Qual é o tipo secundário de Gyarados?",

            answers: [
                "Dragão",
                "Voador",
                "Elétrico",
                "Água"
            ],

            correct: 1
        },

        {
            question: "Qual era o nome do irmão de Luffy que era filho de Gol D. Roger?",

            answers: [
                "Sabo",
                "Portgas D. Ace",
                "Koby",
                "Marshall D. Teach"
            ],

            correct: 1
        },

        {
            question: "Qual Pokémon evolui usando uma Pedra do Trovão?",

            answers: [
                "Pikachu",
                "Machoke",
                "Haunter",
                "Kadabra"
            ],

            correct: 0
        },

        {
            question: "Qual é o nome da organização formada por sete grandes piratas escolhidos pelo Governo Mundial?",

            answers: [
                "CP9",
                "Baroque Works",
                "Shichibukai",
                "Marinha"
            ],

            correct: 2
        },

        {
            question: "Qual é a habilidade de Gengar em Pokémon Scarlet e Violet?",

            answers: [
                "Levitate",
                "Cursed Body",
                "Pressure",
                "Shadow Tag"
            ],

            correct: 1
        },

        {
            question: "Qual é o nome do antigo navio dos Chapéus de Palha?",

            answers: [
                "Thousand Sunny",
                "Going Merry",
                "Moby Dick",
                "Polar Tang"
            ],

            correct: 1
        },

        {
            question: "Quais são os dois Pokémon pseudo-lendários da terceira geração?",

            answers: [
                "Salamence e Metagross",
                "Gardevoir e Flygon",
                "Blaziken e Sceptile",
                "Groudon e Kyogre"
            ],

            correct: 0
        },

        {
            question: "Quem foi o primeiro membro dos Chapéus de Palha recrutado por Luffy?",

            answers: [
                "Sanji",
                "Usopp",
                "Nami",
                "Roronoa Zoro"
            ],

            correct: 3
        },

        {
            question: "Qual é o nome da região onde se passam Pokémon Ruby, Sapphire e Emerald?",

            answers: [
                "Johto",
                "Sinnoh",
                "Hoenn",
                "Unova"
            ],

            correct: 2
        },

        {
            question: "Qual é o nome da Akuma no Mi de Trafalgar Law?",

            answers: [
                "Ope Ope no Mi",
                "Bara Bara no Mi",
                "Gura Gura no Mi",
                "Yami Yami no Mi"
            ],

            correct: 0
        }

    ],


    // ==========================================
    // 🔴 DIFÍCIL
    // ==========================================

    hard: [

        {
            question: "Qual Pokémon possui a maior estatística base de Ataque entre os Pokémon a seguir?",

            answers: [
                "Metagross",
                "Rayquaza",
                "Groudon",
                "Salamence"
            ],

            correct: 2
        },

        {
            question: "Qual era o nome do navio de Gol D. Roger?",

            answers: [
                "Red Force",
                "Oro Jackson",
                "Moby Dick",
                "Thousand Sunny"
            ],

            correct: 1
        },

        {
            question: "Qual é a combinação de tipos de Metagross?",

            answers: [
                "Aço/Psíquico",
                "Aço/Elétrico",
                "Psíquico/Rocha",
                "Aço/Lutador"
            ],

            correct: 0
        },

        {
            question: "Qual dessas pessoas NÃO fazia parte da Pior Geração?",

            answers: [
                "Eustass Kid",
                "Trafalgar Law",
                "Roronoa Zoro",
                "Smoker"
            ],

            correct: 3
        },

        {
            question: "Qual Pokémon possui o número 384 na Pokédex Nacional?",

            answers: [
                "Deoxys",
                "Rayquaza",
                "Salamence",
                "Groudon"
            ],

            correct: 1
        },

        {
            question: "Qual é o nome da Akuma no Mi de Marshall D. Teach, também conhecido como Barba Negra?",

            answers: [
                "Gura Gura no Mi",
                "Mera Mera no Mi",
                "Yami Yami no Mi",
                "Goro Goro no Mi"
            ],

            correct: 2
        },

        {
            question: "Qual destes Pokémon NÃO pertence ao grupo dos Regis introduzidos na terceira geração?",

            answers: [
                "Regirock",
                "Regice",
                "Registeel",
                "Regieleki"
            ],

            correct: 3
        },

        {
            question: "Qual é o nome da ilha onde Nico Robin nasceu?",

            answers: [
                "Ohara",
                "Water 7",
                "Dressrosa",
                "Sabaody"
            ],

            correct: 0
        },

        {
            question: "Qual Pokémon é conhecido como o Pokémon Artificial e foi criado a partir do DNA de Mew?",

            answers: [
                "Genesect",
                "Mewtwo",
                "Type: Null",
                "Porygon"
            ],

            correct: 1
        },

        {
            question: "Qual era o nome da ilha onde Gol D. Roger foi executado?",

            answers: [
                "Marineford",
                "God Valley",
                "Loguetown",
                "Wano"
            ],

            correct: 2
        }

    ]

};


// ==========================================
// VARIÁVEIS
// ==========================================

let questions = [];

let currentQuestion = 0;

let score = 0;

let answered = false;

let selectedDifficulty = "";


// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const difficultyScreen =
    document.getElementById("difficulty-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const progressText =
    document.getElementById("progress-text");

const progressFill =
    document.getElementById("progress-fill");

const nextButton =
    document.getElementById("next-btn");

const scoreElement =
    document.getElementById("score");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-btn");

const difficultyButtons =
    document.querySelectorAll(".difficulty-btn");


// ==========================================
// ESCOLHER DIFICULDADE
// ==========================================

difficultyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const difficulty =
            this.dataset.difficulty;

        // Verifica se a dificuldade existe
        if (!questionBanks[difficulty]) {

            console.error(
                "Dificuldade não encontrada:",
                difficulty
            );

            return;
        }

        selectedDifficulty = difficulty;

        questions =
            questionBanks[selectedDifficulty];

        currentQuestion = 0;

        score = 0;

        answered = false;


        // Troca de tela

        difficultyScreen.classList.add("hidden");

        resultScreen.classList.add("hidden");

        quizScreen.classList.remove("hidden");


        // Começa o quiz

        showQuestion();

    });

});


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function showQuestion() {

    answered = false;

    const current =
        questions[currentQuestion];


    if (!current) {

        showResult();

        return;

    }


    questionElement.textContent =
        current.question;


    answersElement.innerHTML = "";


    const letters = [
        "A",
        "B",
        "C",
        "D"
    ];


    current.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.classList.add("answer-btn");

            button.textContent =
                `${letters[index]}. ${answer}`;


            button.addEventListener(
                "click",
                function() {

                    selectAnswer(index);

                }
            );


            answersElement.appendChild(button);

        }
    );


    // Atualiza progresso

    progressText.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;


    const progress =
        (currentQuestion / questions.length) * 100;


    progressFill.style.width =
        `${progress}%`;


    // Texto do botão

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "Finalizar Quiz 🏆";

    } else {

        nextButton.textContent =
            "Próxima →";

    }

}


// ==========================================
// SELECIONAR RESPOSTA
// ==========================================

function selectAnswer(selectedIndex) {

    if (answered) {

        return;

    }


    answered = true;


    const correctIndex =
        questions[currentQuestion].correct;


    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(
        function(button, index) {

            button.disabled = true;


            if (
                index ===
                correctIndex
            ) {

                button.classList.add("correct");

            }


            if (
                index === selectedIndex &&
                selectedIndex !== correctIndex
            ) {

                button.classList.add("wrong");

            }

        }
    );


    // Acertou

    if (
        selectedIndex ===
        correctIndex
    ) {

        score++;

    }


    // Passa automaticamente depois de 1 segundo

    setTimeout(
        function() {

            nextQuestion();

        },
        1000
    );

}


// ==========================================
// PRÓXIMA PERGUNTA
// ==========================================

function nextQuestion() {

    if (!answered) {

        return;

    }


    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        showQuestion();

    } else {

        showResult();

    }

}


// ==========================================
// BOTÃO PRÓXIMA
// ==========================================

nextButton.addEventListener(
    "click",
    function() {

        nextQuestion();

    }
);


// ==========================================
// MOSTRAR RESULTADO
// ==========================================

function showResult() {

    progressFill.style.width =
        "100%";


    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    scoreElement.textContent =
        `${score} / ${questions.length}`;


    const percentage =
        (score / questions.length) * 100;


    if (percentage === 100) {

        resultMessage.textContent =
            "🏆 Incrível! Você é um verdadeiro Mestre Pokémon e Rei dos Piratas!";

    }

    else if (percentage >= 80) {

        resultMessage.textContent =
            "🔥 Excelente! Você conhece muito bem Pokémon e One Piece!";

    }

    else if (percentage >= 60) {

        resultMessage.textContent =
            "⚔️ Muito bom! Você está no caminho para se tornar uma lenda dos animes!";

    }

    else if (percentage >= 40) {

        resultMessage.textContent =
            "⚡ Nada mal! Continue treinando seus conhecimentos!";

    }

    else {

        resultMessage.textContent =
            "☠️ Parece que você precisa assistir mais Pokémon e One Piece!";

    }

}


// ==========================================
// REINICIAR QUIZ
// ==========================================

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    answered = false;

    selectedDifficulty = "";

    questions = [];


    resultScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    difficultyScreen.classList.remove("hidden");


    progressFill.style.width =
        "0%";

}


// ==========================================
// BOTÃO REINICIAR
// ==========================================

restartButton.addEventListener(
    "click",
    function() {

        restartQuiz();

    }
);
});