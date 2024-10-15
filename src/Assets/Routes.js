import Home from "../Pages/Home/Home"
import Menu from '../Pages/Menu/Menu'
import About from '../Pages/About/About'
import Food from "../Components/Food/Food"
const Routes = [
    {path:"/" , element:<Home/>},
    {path:"/menu/*" , element:<Menu/> , children:[
        {path:":FoodId" , element:<Food/>},
    ]},
    {path:"/about" , element:<About/>},

]
export default Routes