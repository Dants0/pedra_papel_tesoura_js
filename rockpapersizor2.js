const randomNumber1 = Math.floor(Math.random() * 3);
const randomNumber2 = Math.floor(Math.random() * 3);
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

class Bot {
    constructor(name){
        this.name = name;
    }

    startBot(number){
        let jogada = "";

        const botPlay = [
          {
            id: 0,
            play: "Pedra",
          },
          {
            id: 1,
            play: "Papel",
          },
          {
            id: 2,
            play: "Tesoura",
          },
        ];
      
        for (let i = 0; i < botPlay.length; i++) {
          if (botPlay[i].id == number) {
            jogada = botPlay[i].play;
          }
        }
        return jogada;
    }
}

const bot_1 = new Bot("Alis")
const bot_2 = new Bot("C3-P0")

function defineWinner(botPlayed1, botPlayed2){

    let winner = "";

    if(botPlayed1 == "Pedra" && botPlayed2 == "Papel"){
        winner = `${bot_2.name} venceu`
    }
    if(botPlayed1 == "Pedra" && botPlayed2 == "Tesoura"){
        winner = `${bot_1.name} venceu`
        
    }
    if(botPlayed1 == "Pedra" && botPlayed2 == "Pedra"){
        winner = "Empatou"
    }



    if(botPlayed1 == "Papel" && botPlayed2 == "Papel"){
        winner = "Empatou"
    }
    if(botPlayed1 == "Papel" && botPlayed2 == "Tesoura"){
        winner = `${bot_1.name} venceu`
    }
    if(botPlayed1 == "Papel" && botPlayed2 == "Pedra"){
        winner = `${bot_2.name} venceu`
    }
    
    if(botPlayed1 == "Tesoura" && botPlayed2 == "Papel"){
        winner = `${bot_1.name} venceu`
    }
    if(botPlayed1 == "Tesoura" && botPlayed2 == "Tesoura"){
        winner = "Empatou"
    }
    if(botPlayed1 == "Tesoura" && botPlayed2 == "Pedra"){
        winner = `${bot_2.name} venceu`
    }
    return winner
}

function loadGame() {
    try {
        const data = fs.readFileSync('./rockGame/RockPaperSizor.json', 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error loading data:", error);
        return [];
    }
}

let dataGame = loadGame();

function saveGame(game) {
    try {
        const id = uuidv4();
        const roundResult = {
            id: id,
            bot1Play: bot_1.startBot(randomNumber1),
            bot2Play: bot_2.startBot(randomNumber2),
            winner: defineWinner(bot_1.startBot(randomNumber1), bot_2.startBot(randomNumber2))
        };

        game.push(roundResult);

        const data = JSON.stringify(game, null, 2);
        fs.writeFileSync('./rockGame/RockPaperSizor.json', data);
        console.log("Data saved successfully.");
    } catch (error) {
        console.error("Error saving data:", error);
    }
}

function game() {
    const jogadaBot1 = bot_1.startBot(randomNumber1);
    const jogadaBot2 = bot_2.startBot(randomNumber2);
    const winner = defineWinner(jogadaBot1, jogadaBot2);
    console.log(`Jogada Bot 1: ${jogadaBot1} | Jogada Bot 2: ${jogadaBot2} | Quem venceu? ${winner}`);

    saveGame(dataGame);
}

game();