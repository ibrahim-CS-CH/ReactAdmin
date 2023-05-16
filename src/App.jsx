import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./UserList";
import { ListPost } from "./Comonents/PostList";
import { EditPost } from "./Comonents/EditPost";
import { EditUsers } from "./Comonents/EditUsers";
import { Comments } from "./Comonents/Comments";
import { EditComment } from "./Comonents/EditComment";
import { PostCreate } from "./Comonents/PostCreate";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import CommentIcon from '@mui/icons-material/Comment';
import { Dashboard } from "./Pages/Dashboard";
// import { authProvider } from "./Auth/authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  //put these line as an att authProvider={authProvider }
  <Admin dataProvider={dataProvider} dashboard={Dashboard} >
    <Resource name="users" list={UserList} recordRepresentation={"name"} edit={EditUsers} icon={UserIcon}/>
    <Resource name="posts" list={ListPost} edit={EditPost} create={PostCreate} icon={PostIcon}/>
    <Resource name="comments" list={Comments} edit={EditComment} icon={CommentIcon}/>

    {/* if U want to put something without your component you can make these line below */}
    {/* <Resource name="comments" list={ListGuesser} edit={EditGuesser} icon={CommentIcon} show={ShowGuesser}/> */}

    
  </Admin>
)

export default App;