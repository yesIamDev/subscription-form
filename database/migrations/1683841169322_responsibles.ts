import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'responsibles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      table.uuid('id').primary().notNullable()
      table.uuid('participant_id').references('id').inTable('participants').onDelete('CASCADE')
      table.string('name')
      table.string('postname')
      table.string('phone_number')

      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
