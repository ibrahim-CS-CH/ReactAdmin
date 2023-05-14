
//grid list user comp
// import React from 'react'
// import {List, Datagrid, TextField, EmailField} from 'react-admin'
// export const UserList = () => (
//   <List>
//     <Datagrid rowClick="edit">
//         <TextField source='id' />
//         <TextField source='name' />
//         <TextField source='username' />
//         <EmailField source='email' />
//         <TextField source='phone' />
//     </Datagrid>
//   </List>
// )

// import { List, SimpleList } from "react-admin";

// export const UserList = ()=>(
//   <List>
//     {/* to build rows instead of grid */}
//     <SimpleList
//       primaryText={(rec) => rec.name}
//       secondaryText={(rec) => rec.email}
//       tertiaryText={(rec) => rec.id}

//     />
//   </List>
// )

//change from grid sys to list useMediaQuery from @mui/material

import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField, EditButton } from "react-admin";
import MyUrlField from './Comonents/MyUrlField';
export const UserList = () => {

  const media = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
   
    <List>
      {media 
        ? (
            <SimpleList 
              primaryText={(rec) => rec.name}
              secondaryText={(rec) => rec.email}
              tertiaryText={(rec) => rec.id}
              />
          ) 
        : ( 
          <Datagrid>
            <TextField source='id'/>
            <EmailField source='email' />
            <TextField source='name'/>
            <TextField source='address.street'/>
            <TextField source='address.city' />
            <UrlField source='website'/>
            {/* if u want to create custom filed do these */}
            <MyUrlField source="website"/>
            <EditButton />
          </Datagrid>
        )
      }
    </List>
  )
}
