import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Participant from './Participant'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public participant_id: string
  
  @column()
  public name: string

  @column()
  public postname: string

  @column()
  public phone_number: string

  @hasMany(() => Participant)
  public participants: HasMany<typeof Participant>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
