let dataAlvo = new Date("2025-04-07T13:00:00").getTime();

        function atualizarContagem() {
            let agora = new Date().getTime();
            let diferenca = dataAlvo - agora;

            if (diferenca > 0) {
                let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
                let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
                let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

                document.getElementById("contador").innerHTML = 
                    `${dias} dias ${horas} horas <br> ${minutos} minutos e  ${segundos} segundos`;
            } else {
                document.getElementById("contador").innerHTML = "Tempo esgotado!";
                clearInterval(intervalo);
            }
        }

        let intervalo = setInterval(atualizarContagem, 1000);
        atualizarContagem(); 

function criarEmoji() {
            const emojiLista = ["💗"];
            const emoji = document.createElement("div");
            emoji.innerText = emojiLista[Math.floor(Math.random() * emojiLista.length)];
            emoji.classList.add("emoji");

            let tamanho = Math.random() * 2 + 1; // Varia entre 1rem e 3rem
            emoji.style.fontSize = `${tamanho}rem`;

            emoji.style.left = Math.random() * 100 + "%"; // Posição aleatória
            emoji.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duração entre 2s e 5s

            document.body.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 5000); // Remove após 5s
        }

        setInterval(criarEmoji, 300);

        document.addEventListener("DOMContentLoaded", function () {
            const button = document.querySelector(".button");
            const fresk = document.querySelector(".fresk");
        
            button.addEventListener("click", function () {
                fresk.classList.toggle("hidden"); // Alterna entre visível e invisível
            });
        });
        