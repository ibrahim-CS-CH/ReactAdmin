import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  SimpleForm,
  TextInput,
  ReferenceInput,
  Edit,
} from "react-admin";
export const EditPost = () => (
    <Edit>
        <SimpleForm>
            {/* <ReferenceInput source="userId" reference="users" disabled /> */}
            <TextInput source="id" disabled/>
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}  />
        </SimpleForm>
    </Edit>
);

