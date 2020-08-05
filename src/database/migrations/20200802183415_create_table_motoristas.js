
exports.up = knex => {
    return knex.schema.createTable('motoristas', table => {
        table.increments('id').primary()
        table.string('nome').notNullable()
        table.date('nascimento').notNullable()
        table.string('cpf', 2).notNullable()
        table.string('modeloCarro').notNullable()
        table.string('status').notNullable()
        table.string('sexo').notNullable()
    })
};

exports.down = knex => knex.schema.dropTable('motoristas');