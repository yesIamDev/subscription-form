import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      
      table.uuid('id').primary().notNullable()
      table.uuid('participant_id').references('id').inTable('Participants')
      table.integer('payroll_amount')
      table.integer('remaining_amount')
   
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
