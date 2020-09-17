class Listicle {
    constructor(name, subtitle, summary, image) {
        this.name = name;
        this.subtitle = subtitle;
        this.summary = summary;
        this.image = image;
        this.nome = document.createElement("H1");
        this.nome.innerText = name;
        this.nome.id = "item_nome";
        this.subtitulo = document.createElement("H2");
        this.subtitulo.innerText = subtitle;
        this.subtitulo.id = "item_subtitulo";
        this.sinopse = document.createElement("P");
        this.sinopse.innerText = summary;
        this.sinopse.id = "item_sinopse";
        this.figura = document.createElement("IMG");
        this.figura.src = image;
        this.figura.id = "item_imagem";
        this.listaTopicos = document.getElementById("listaMangas");
        this.listaItems = document.createElement("DIV")
        this.listaItems.id = "item_lista";
        this.listaItems.appendChild(this.nome)
        this.listaItems.appendChild(this.subtitulo)
        this.listaItems.appendChild(this.sinopse)
        this.listaItems.appendChild(this.figura)
        this.listaTopicos.appendChild(this.listaItems)
    }
}

topico1 = new Listicle("The New Gate", "Kazanami, Shinogi & Miwa, Yoshiyuki (Arte)",
                      "The New Gate, um jogo online que havia se transformado em um jogo de morte, e que graças aos esforços de Shin, um dos jogadores mais antigos, dezenas de milhares de jogadores que haviam sido arrastados para esse jogo foram libertados. Mas depois que ele derrotou o último chefe e libertou a todos, ele foi engolido por uma luz estranha e se viu dentro do mundo do jogo 500 anos no futuro.",
                      "imagens/gate.jpg");


topico2 = new Listicle("One Punch-Man", "ONE & Murata, Yusuke (Arte)",
                       "A história segue o dia-a-dia de um herói normal que está infeliz por ser forte o bastante para derrotar todos os seus oponentes com apenas um soco, já que isso não lhe traz mais a sensação de adrenalina ao enfrentar um inimigo poderoso.",
                       "imagens/punch.jpg");

topico3 = new Listicle("Shokugeki no Souma", "Jang Sung-Lak",
                       "O sonho de Souma Yukihira é se tornar um chef de primeira no restaurante de seu pai e superar suas habilidades de culinária, mas assim que se gradua no ensino fundamental, seu pai, Jouichirou Yukihira, fecha o restaurante para cozinhar nos Estados Unidos. Embora oprimido, o espírito de luta de Souma se reacende pelo desafio de Jouichirou no qual é sobreviver numa escola de culinária de elite onde apenas 10% dos estudantes se graduam. Poderá Souma sobreviver?",
                       "imagens/souma.jpg")
