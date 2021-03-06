/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.string('title', 80).notNullable();
      table.decimal('price').notNullable();
      table.jsonb('properties').notNullable();
      table
        .integer('type_id')
        .notNullable()
        .unsigned();
      table
        .integer('user_id')
        .notNullable()
        .unsigned();
      table.timestamps();
      table.foreign('user_id').references('users.id');
      table.foreign('type_id').references('types.id');
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductSchema;
