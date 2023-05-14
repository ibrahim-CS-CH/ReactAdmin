import { Admin, EditGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./UserList";
import { PostList } from "./Comonents/PostList";
import { EditPost } from "./Comonents/EditPost";
import { EditUsers } from "./Comonents/EditUsers";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} recordRepresentation={"name"} edit={EditUsers}/>
    <Resource name="posts" list={PostList} edit={EditPost}/>
  </Admin>
)

export default App;