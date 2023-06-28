
import Home from '@Pages/Home'
import User from '@Pages/User'

const routes = [
  {
    path: '/user/:id',
    children: <User />
  },
  {
    path: '/',
    children: <Home />
  },
]

export default routes;
