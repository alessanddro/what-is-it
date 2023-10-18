import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlaceController {
  public async index({ request, response }) {
    return response.status(200).json({ message: 'OK' })
  }
}
