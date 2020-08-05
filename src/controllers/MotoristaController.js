const knex = require('../database/index');
const { orWhereNotExists, update } = require('../database/index');

module.exports = {
    async index(request, response) {
        const results = await knex('motoristas');

        return response.json(results);
    },

    async create(request, response, next) {
        
        try {
            const { nome, 
                    nascimento, 
                    cpf, 
                    modeloCarro, 
                    status, 
                    sexo 
                } = request.body;

            await knex('motoristas').insert({
                nome,
                nascimento, 
                cpf, 
                modeloCarro, 
                status, 
                sexo
            });

            return response.send();

        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {

        try {
            const { status } = request.body;
            const { id } = request.params;

            await knex('motoristas')
            .update({ status })
            .where({ id });

            return response.send();

        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            await knex('motoristas')
            .where({ id })
            .del();

            return response.send();

        } catch (error) {
            next(error);
        }
    }
};