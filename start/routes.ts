import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.group(() => {
  Route.resource('places', 'PlaceController')
  Route.resource('sponsors', 'SponsorController')
}).prefix('api/v1')
