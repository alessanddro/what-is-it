import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('auth', 'AuthController').apiOnly()
})
Route.group(() => {
  Route.resource('places', 'PlaceController').apiOnly()
  Route.resource('sponsors', 'SponsorsController').apiOnly()
  Route.resource('comments', 'CommentsController').apiOnly()
  Route.resource('users', 'UserController').apiOnly()
}).prefix('api/v1')
