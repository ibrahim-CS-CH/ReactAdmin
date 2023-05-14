import { Datagrid, List, ReferenceField, TextField, SimpleList, EditButton } from 'react-admin';
import { useMediaQuery } from '@mui/material';

export const PostList = () => {
    const media = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {media 
                ? (
                    <SimpleList 
                        primaryText={(rec) => rec.title} 
                        secondaryText={(rec) => rec.body}
                        tertiaryText={
                            <ReferenceField reference='users' source='userId'>
                                <TextField source='name' color={"red"} padding={"10px 5px"} />
                            </ReferenceField>
                        }
                    />
                ) 
                : (
                    <Datagrid>
                        <TextField source="id" />
                        <ReferenceField source="userId" reference="users" />
                        <TextField source="title" />
                        <EditButton />
                    </Datagrid>
                )
            }
            
        </List>
    );
}