const knex = require('../database/index');
const { orWhereNotExists, update } = require('../database/index');

module.exports = {
    async index(request, response) {
        const results = await knex('passageiros');

        return response.json(results);
    },

    async create(request, response, next) {
        
        try {
            const { nome, 
                    nascimento, 
                    cpf, 
                    sexo 
                } = request.body;

            await knex('passageiros').insert({
                nome,
                nascimento, 
                cpf,
                sexo
            });

            return response.send();

        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            await knex('passageiros')
            .where({ id })
            .del();

            return response.send();

        } catch (error) {
            next(error);
        }
    }
};