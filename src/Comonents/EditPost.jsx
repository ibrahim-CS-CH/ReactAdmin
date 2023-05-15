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
  useRecordContext,
} from "react-admin";
 const PostTitle = () => {
    const record= useRecordContext();
    // console.log(record);
    return <span> post {record ? `"${record.title}"` : "sd"}</span>
};
export const EditPost = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            {/* <ReferenceInput source="userId" reference="users" disabled /> */}
            <TextInput source="id" disabled/>
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}  />
        </SimpleForm>
    </Edit>
);




