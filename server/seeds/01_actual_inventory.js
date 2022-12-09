/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE actual_inventory CASCADE')
  await knex('actual_inventory').del()
  await knex('actual_inventory').insert([
    {id: 1, userId:'Blade', itemName:'fruit', description:'apples, bananas, grapes', quantity: 20},
    {id: 2, userId:'Laser', itemName:'meat', description:'ck, steak, pork', quantity: 15},
    {id: 3, userId:'Taser', itemName:'home tools', description:'hammers, tape, wrench', quantity: 20}
  ]);
};
