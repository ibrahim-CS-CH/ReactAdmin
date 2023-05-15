import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  SimpleList,
  EditButton,
  TextInput,
  ReferenceInput,
  Loading,
  useGetList,
} from "react-admin";
import { useMediaQuery } from "@mui/material";
import { useDataProvider } from "react-admin";
import { useEffect, useState } from "react";

//create search input to make some feature for user
// const postFilter = [
//   <TextInput source="q" label={"saerch"} alwaysOn />,
//   <ReferenceInput source="userId" label="user" reference="users" />,
// ];

// export const PostList = () => {
//   const media = useMediaQuery((theme) => theme.breakpoints.down("sm"));
//   return (
//     <List filters={postFilter}>
//       {media ? (
//         <SimpleList
//           primaryText={(rec) => rec.title}
//           secondaryText={(rec) => rec.body}
//           tertiaryText={
//             <ReferenceField reference="users" source="userId">
//               <TextField source="name" color={"red"} padding={"10px 5px"} />
//             </ReferenceField>
//           }
//         />
//       ) : (
//         <Datagrid>
//           <TextField source="id" />
//           <ReferenceField source="userId" reference="users" />
//           <TextField source="title" />
//           <EditButton />
//         </Datagrid>
//       )}
//     </List>
//   );
// };


// try to use useDataProvider bro and useEffect to return your data by love (U can check dataProvider Methods Hooks to build something useful)
// export const ListPost = () => {
//   const [posts, setPosts] = useState();
//   const [err, setErr] = useState([]);
//   const dataProvider = useDataProvider();
// //   console.log(posts);
// //   console.log(err);
//   useEffect(() => {
//     dataProvider
//       .getList("posts", {
//         pagination: { page: 1, perPage: 10 },
//         sort: { field: "published_at", order: "DESC" },
//         filter: { status: "published" },
//       })
//       .then(({ data }) => setPosts(data))
//       .catch((error) => setErr(error));
//   }, []);
//   if (!posts) {
//     return <Loading />;
//   }
//   if (err.length) {
//     return <p>ERROR</p>;
//   }
//   return (
//     <ul>
//       {posts.map((e) => (
//         <li key={e.id}>{e.title}</li>
//       ))}
//     </ul>
//   );
// };

// try to use useGetList to get the same output but in these case we don't need useEffect let's try do this

export const ListPost = () =>{
    const { data, isLoading, error} = useGetList('posts',{
        pagination: {page:1, perPage: 10},
        sort: {field: "published_at", order: "DESC"},
        filter: {status: "published"}
    });
    if(isLoading) {return <Loading />}
    if(error) {return <p>ERROR</p>}
    return (
        <ul className="">
            {data.map((post)=>(
                <div key={post.id} className="border border-black my-2 p-2  " >
                    <li >{post.id}</li>
                    <li >{post.title}</li>
                    <li >{post.body}</li>
                </div>
            ))}
        </ul>
    )
}
