import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.group(() => {
  Route.resource('places', 'PlaceController')
  Route.resource('sponsors', 'SponsorController')
  Route.resource('comments', 'CommentsController')
  Route.resource('users', 'UserController')
}).prefix('api/v1')
