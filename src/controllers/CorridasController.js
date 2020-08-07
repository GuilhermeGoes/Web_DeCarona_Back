const knex = require('../database/index');
const { orWhereNotExists, update } = require('../database/index');

module.exports = {
    async index(request, response) {
        const results = await knex('corridas')
            .join('motoristas', 'corridas.id_motorista', '=', 'motoristas.id')
            .join('passageiros', 'corridas.id_passageiro', '=', 'passageiros.id')
            .select('corridas.id', 'motoristas.nome as nome_motorista', 
                    'passageiros.nome as nome_passageiro', 'corridas.valor');
        const { page = 1 } = request.query;
        const query = knex('corridas')
            .limit(5)
            .offset((page - 1) * 5);

        return response.json(results);
    },

    async create(request, response, next) {
        
        try {
            const { id_motorista,
                    id_passageiro,
                    valor
                } = request.body;

            await knex('corridas').insert({
                id_motorista,
                id_passageiro,
                valor
            });

            return response.send();

        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            await knex('corridas')
                .where({ id })
                .del();

            return response.send();

        } catch (error) {
            next(error);
        }
    }
};