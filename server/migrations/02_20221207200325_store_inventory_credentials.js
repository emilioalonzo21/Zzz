/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('login_info', table => {
        table.increments();
        table.string('firstName', 250);
        table.string('lastName');
        table.string('password')
        table.string('userName');
        table.timestamps(true, true); // adds created_at and updated_at

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('login_info');
};
