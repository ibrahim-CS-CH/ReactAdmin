import { SimpleForm, TextInput, Edit, useRecordContext } from "react-admin"
const CommentTitle = () => {
  const record = useRecordContext();
  // console.log(record);
  return <span>comment {record ? `${record.name}` : ""} </span>

}
export const EditComment = () => {
  return (
    <Edit title={<CommentTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" />
            <TextInput source="body" />
            
        </SimpleForm>
    </Edit>
  )
}
