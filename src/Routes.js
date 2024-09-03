import Articles from "./Pages/Articles/Articles";
import Courses from "./Pages/Courses/Courses";
import Infos from "./Pages/Infos/Infos";
import Users from "./Pages/Users/Users";

const Routes = [
    { path: "/Users", element: <Users></Users> },
    { path: "/Infos", element: <Infos></Infos> },
    { path: "/Courses", element: <Courses></Courses> },
    { path: "/Articles", element: <Articles></Articles> },


]
export default Routes