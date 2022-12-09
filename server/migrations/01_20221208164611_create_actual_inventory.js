/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('actual_inventory', table => {
        table.increments();
        table.string('userId', 250); //number
        table.string('itemName'); //number
        table.string('description') //string
        table.integer('quantity') //number
        table.timestamps(true, true); // adds created_at and updated_at
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('actual_inventory');
};
