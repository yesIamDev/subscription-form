import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Participant from 'App/Models/Participant'
import ParticipantValidator from 'App/Validators/ParticipantValidator'

export default class ParticipantsController {
    public async register( {request,response}: HttpContextContract ){
        
        try{
            const data = await request.validate(ParticipantValidator)
            const participant = Participant.create(data)
            return response.status(200).json(participant)
        }catch(e){
            throw new Error(e)
        }     
        
    }
    public async getAll( {response}: HttpContextContract ){
        try{
            const participants = await Participant.all()
            return response.status(200).json(participants)
        }catch(e){
            throw new Error(e)
        }
    }

}
