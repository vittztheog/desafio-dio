// Variáveis para armazenar o nome e a quantidade de experiência (XP) do herói
let nome = "Victor"; // Mudar o nome do herói
let xp = 8500; // Mudar o valor de XP

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível do herói baseado na quantidade de XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 6001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Diamante";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Ascendente";
} else if (xp >= 10001) {
    nivel = "Imortal / Radiante";
} else {
    nivel = "Indefinido"; // Caso o XP não se enquadre em nenhum dos critérios, o nível será indefinido
}

// Saída: Exibindo a mensagem com o nome do herói e o nível correspondente
console.log(`O herói de nome ${nome} está no nível de ${nivel}[]`);