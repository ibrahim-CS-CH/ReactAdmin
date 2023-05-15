import { SimpleForm, TextInput, Edit } from "react-admin";
export const EditUsers = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name"/>
            <TextInput source="email" />
            <TextInput source="address.street" />
        </SimpleForm>
    </Edit>
)
