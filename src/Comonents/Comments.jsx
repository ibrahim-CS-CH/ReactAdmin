import { Datagrid, List, ReferenceField, TextField, SimpleList, EditButton } from 'react-admin';
import { useMediaQuery } from '@mui/material';
export const Comments = () => {
    // const media = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const media = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
        {media ? 
            (
                <SimpleList 
                    primaryText={(rec)=>rec.name}
                    secondaryText={(rec)=> rec.body}
                    tertiaryText={(rec)=>rec.eamil}    
                />
            ) 
            : (
            <Datagrid>
                <TextField source='id' />
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="body" />
                <EditButton />

            </Datagrid>)}
    </List>
  )
}
