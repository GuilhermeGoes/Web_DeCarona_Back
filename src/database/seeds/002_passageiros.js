
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('passageiros').del()
    .then(function () {
      // Inserts seed entries
      return knex('passageiros').insert([
        { nome: 'Carlos', nascimento: '01/03/1990', cpf: '12375348910',
          sexo: 'Masculino'},
        { nome: 'Maria', nascimento: '02/02/1990', cpf: '79648528910',
          sexo: 'Feminino'}
      ]);
    });
};
