/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('login_info').del()
  await knex('login_info').insert([
    {id: 1, firstName: 'Blade', lastName:'Doe', userName:'blade.doe69', password:'password'},
    {id: 2, firstName: 'John', lastName:'Kelly', userName:'john.kelly69', password:'password'},
    {id: 3, firstName: '', lastName:'Doe', userName:'blade.doe69', password:'password'},


  ]);
};
