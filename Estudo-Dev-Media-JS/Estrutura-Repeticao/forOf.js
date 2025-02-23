/**
 * A estrutura de repeticao for..of, permite iterar todos os valores de uma colecao de dados.
 *
 */
let emails_alunos = [
  "mblabla.sm2101@mail.com",
  "Antonio545l2@mail.com",
  "roberto222@mail.com",
  "francisco@mail.com",
  "joana@mail.com",
  "maiara@mail.com",
];

for (let email of emails_alunos) {
    console.log(`Emails: ${email}`);
}

/**
 * A estrutura for..of, nao precisa de um contador para iterar valores de um array
 * diferente de while,do..while, for
 */