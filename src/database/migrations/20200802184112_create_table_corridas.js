
exports.up = knex => {
    return knex.schema.createTable('corridas', table => {
        table.increments('id_corrida').primary()

        table.integer('id_motorista')
            .notNullable()
            .references('id')
            .inTable('motoristas')

        table.integer('id_passageiro')
            .notNullable()
            .references('id')
            .inTable('passageiros')

        table.decimal('valor', 2).notNullable()
    })
};

exports.down = knex => knex.schema.dropTable('corridas');
