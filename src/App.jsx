import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./UserList";
import { PostList } from "./Comonents/PostList";
import { EditPost } from "./Comonents/EditPost";
import { EditUsers } from "./Comonents/EditUsers";
import { Comments } from "./Comonents/Comments";
import { EditComment } from "./Comonents/EditComment";
import { PostCreate } from "./Comonents/PostCreate";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import CommentIcon from '@mui/icons-material/Comment';
import { Dashboard } from "./Pages/Dashboard";
import { authProvider } from "./Auth/authProvider";


const App = () => (
  //put these line as an att authProvider={authProvider }
  <Admin dataProvider={dataProvider} dashboard={Dashboard} >
    <Resource name="users" list={UserList} recordRepresentation={"name"} edit={EditUsers} icon={UserIcon}/>
    <Resource name="posts" list={PostList} edit={EditPost} create={PostCreate} icon={PostIcon}/>
    <Resource name="comments" list={Comments} edit={EditComment} icon={CommentIcon}/>
  </Admin>
)

export default App;