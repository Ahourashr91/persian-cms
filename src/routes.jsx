import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Comments from './pages/comments/Comments'
import Users from './pages/users/Users'
import Orders from './pages/orders/Orders'
import Offs from './pages/offs/Offs'

const routes = [
    { path: "/", element: <Home /> },
    { path: "products", element: <Products /> },
    { path: "comments", element: <Comments /> },
    { path: "users", element: <Users /> },
    { path: "orders", element: <Orders /> },
    { path: "offs", element: <Offs /> },
]

export default routes