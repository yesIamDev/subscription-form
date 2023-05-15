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

    public async delete({request,response}:HttpContextContract){
        try{
        const {id} = request.param('id')
            const participant = await Participant.find(id)
            await participant?.delete()
            if( !participant ) {
                return response.notFound('Unavailable participant')
            }else{
                return response.ok(`${participant.name} deleted with succes`)
            }
        }catch(e){
            throw new Error(e)
        }
    }

    public async update({request,response}:HttpContextContract) {
        const {id} = request.param('id')
        const payload = await request.validate(ParticipantValidator)
        try{
            const participantFing = await Participant.find(id)
        }
    }

}
