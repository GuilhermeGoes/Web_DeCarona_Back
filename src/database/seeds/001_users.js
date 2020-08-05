
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('motoristas').del()
    .then(function () {
      // Inserts seed entries
      return knex('motoristas').insert([
        { nome: 'João', nascimento: '01/01/1990', cpf: '12345678910',
          modeloCarro: 'versa', status: 'Ativo', sexo: 'Masculino'},
        { nome: 'Mario', nascimento: '02/02/1990', cpf: '12348528910',
          modeloCarro: 'Gran Siena', status: 'Inativo', sexo: 'Masculino'}
      ]);
    });
};
