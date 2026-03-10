import "dotenv/config";
import express from "express";

const app = express();

const citacoes = [
    { autor: "Albert Einstein", citacao: "A imaginação é mais importante que o conhecimento." },
    { autor: "Isaac Newton", citacao: "Se vi mais longe, foi por estar sobre os ombros de gigantes." },
    { autor: "Marie Curie", citacao: "Nada na vida deve ser temido, apenas compreendido." },
    { autor: "Charles Darwin", citacao: "Não é o mais forte que sobrevive, mas o que melhor se adapta." },
    { autor: "Stephen Hawking", citacao: "A inteligência é a capacidade de se adaptar à mudança." },
    { autor: "Carl Sagan", citacao: "Alegações extraordinárias exigem evidências extraordinárias." },
    { autor: "Nikola Tesla", citacao: "O presente é deles; o futuro, pelo qual eu realmente trabalhei, é meu." },
    { autor: "Richard Feynman", citacao: "O que eu não posso criar, eu não entendo." },
    { autor: "Ada Lovelace", citacao: "A imaginação é a faculdade da descoberta." },
    { autor: "Galileu Galilei", citacao: "A matemática é o alfabeto com o qual Deus escreveu o universo." },
    { autor: "Louis Pasteur", citacao: "A sorte favorece a mente preparada." },
    { autor: "Thomas Edison", citacao: "Gênio é 1% inspiração e 99% transpiração." },
    { autor: "Rosalind Franklin", citacao: "A ciência e a vida cotidiana não podem e não devem ser separadas." },
    { autor: "Johannes Kepler", citacao: "Onde há matéria, há geometria." },
    { autor: "Max Planck", citacao: "A ciência não pode resolver o mistério final da natureza." },
    { autor: "Niels Bohr", citacao: "Um especialista é alguém que cometeu todos os erros possíveis em um campo muito estreito." },
    { autor: "Jane Goodall", citacao: "O que você faz faz diferença, e você tem que decidir que tipo de diferença quer fazer." },
    { autor: "Rachel Carson", citacao: "Na natureza nada existe sozinho." },
    { autor: "Alan Turing", citacao: "Às vezes são as pessoas de quem ninguém imagina nada que fazem as coisas que ninguém pode imaginar." },
    { autor: "Francis Bacon", citacao: "Conhecimento é poder." },
    { autor: "Gregor Mendel", citacao: "Minha hora ainda vai chegar." },
    { autor: "Antoine Lavoisier", citacao: "Na natureza nada se cria, nada se perde, tudo se transforma." },
    { autor: "Dmitri Mendeleev", citacao: "Não há nada no mundo que não possa ser explicado." },
    { autor: "Werner Heisenberg", citacao: "O que observamos não é a natureza em si, mas a natureza exposta ao nosso método de questionamento." },
    { autor: "Linus Pauling", citacao: "A melhor maneira de ter uma boa ideia é ter muitas ideias." },
    { autor: "Enrico Fermi", citacao: "Se o resultado confirma a hipótese, você fez uma medição. Se não, você fez uma descoberta." },
    { autor: "Barbara McClintock", citacao: "Se você sabe que está no caminho certo, você tem esse conhecimento interior." },
    { autor: "Edwin Hubble", citacao: "O homem explora o universo e o chama de Ciência." },
    { autor: "Robert Hooke", citacao: "A ciência é o conhecimento das causas." },
    { autor: "Blaise Pascal", citacao: "O conhecimento é como uma esfera; quanto maior, mais contato com o desconhecido." }
];

app.get("/", (req, res) => {
  res.send("Servidor rodando! Use /random, /dado ou /citacoes.");
});

app.get("/random", (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.json({ numero: num });
});

app.get("/dado", (req, res) => {
    const dado = Math.floor(Math.random() * 6) + 1;
    res.json({ valor: dado });
});

app.get("/citacoes", (req, res) => {
    const indice = Math.floor(Math.random() * citacoes.length);
    res.json(citacoes[indice]);
});

export default app;