import { Datagrid, List, ReferenceField, TextField, SimpleList, EditButton, TextInput, ReferenceInput } from 'react-admin';
import { useMediaQuery } from '@mui/material';
//create search input to make some feature for user
const postFilter = [
    <TextInput source='q' label={"saerch"} alwaysOn/>,
    <ReferenceInput source='userId' label='user' reference='users'/>
];

export const PostList = () => {
    const media = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={postFilter}>
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