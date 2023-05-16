import { useEffect, useState } from 'react'
import { Loading, useDataProvider } from 'react-admin';
import { List, Datagrid, TextField } from 'react-admin';


export const Categories = () => {
    const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await dataProvider.getList('categories');
        const { data } = response;
        setPosts(data); // Store the fetched posts in state
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  if (posts.length === 0) {
    return <div>No Category yet</div>;
  }

//     const [posts, setPosts] = useState([]);
//     const [err, setErr] = useState([]);
//     const dataProvider = useDataProvider();
//   //   console.log(posts);
//   //   console.log(err);
//   const fetchPosts = async () => {
//     await dataProvider.getList('categories')
//     .then( (res)=> setPosts(res.data)  )    
    
//   };

//   console.log( posts );

//     useEffect(() => {
//         fetchPosts();
//     //   dataProvider
//     //     .getList("categories", {
//     //       pagination: { page: 1, perPage: 10 },
//     //     //   sort: { field: "published_at", order: "DESC" },
//     //     //   filter: { status: "published" },
//     //     })
//     //     .then(({ data }) => setPosts(data))
//     //     .catch((error) => setErr(error));
//     }, [  ]);
    // if (!posts) {
    //   return <Loading />;
    // }
    // if (err.length) {
    //   return <p>ERROR</p>;
    // }
    // console.log(posts);
    // console.log(props);

    return (
        <List>
                     {posts.length > 0?  (
                        <Datagrid data={posts} >
                        <TextField source='id'/>
                        <TextField source='name'/>
                        <TextField source='desctription'/>
                    </Datagrid>
                     ): <Loading />}
                 </List>
    );
};


// export const Categories = () => {
//     const provider = useDataProvider();
//     console.log(provider);
//     return (
//         <List>
//             <Datagrid rowClick="edit">
//                 <TextField source='name'/>
//                 <TextField source='id'/>
//                 <TextField source='desctription'/>
//             </Datagrid>
//         </List>
//     )

// }