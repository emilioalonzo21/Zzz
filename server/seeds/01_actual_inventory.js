/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('actual_inventory').del()
  await knex('actual_inventory').insert([
    {id: 1, idpk: 'number'},
    {id: 2, userId: 'number'},
    {id: 3, itemName: 'apples'},
    {id: 4, description: 'fruit'},
    {id: 5, quantity: 10 }
  ]);
};
