import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Participant from './Participant'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public participant_id: string

  @column()
  public payroll_amount: number

  @column()
  public remaining_amount: number

  @hasOne(() => Participant)
  public participants: HasOne<typeof Participant>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
