import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ParticipantValidator {

  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    
    name: schema.string({}, [ rules.alpha() ]),
    postname: schema.string({}, [rules.alpha() ]),
    age: schema.number(),
    sex: schema.string(),
    school: schema.string({}, [rules.alpha() ),
    option: schema.string({}, [rules.alpha() ),
    phone_number: schema.string({}, [
      rules.mobile(),
      rules.unique({ table: 'participants', column: 'phone_number' })
    ]),
    status: schema.boolean()

  })

  public messages: CustomMessages = {}
}
