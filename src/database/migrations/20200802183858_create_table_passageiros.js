
exports.up = knex => {
    return knex.schema.createTable('passageiros', table => {
        table.increments('id').primary()
        table.string('nome').notNullable()
        table.date('nascimento').notNullable()
        table.string('cpf', 2).notNullable()
        table.string('sexo').notNullable()
    })
};

exports.down = knex => knex.schema.dropTable('passageiros');
