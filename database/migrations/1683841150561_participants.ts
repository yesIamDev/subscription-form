import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'participants'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      table.uuid('id').primary().notNullable()
      table.string('name').notNullable()
      table.string('postname').notNullable()
      table.integer('age')
      table.string('sex')
      table.string('school')
      table.string('class')
      table.string('option')
      table.string('phone_number')
      table.boolean('status').notNullable()

      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
