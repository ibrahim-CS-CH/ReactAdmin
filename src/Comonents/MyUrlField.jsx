import { useRecordContext } from "react-admin"
import LinkIcon from '@mui/icons-material/Link';
import { Link } from "@mui/material";

const MyUrlField = ({ source }) => {
  const record = useRecordContext();
    return record ? (
        <Link href={record[source]} sx={{ textDecoration: "none" }}>
            {record[source]}
            <LinkIcon sx={{ fontSize: 15, ml: 1 }}/>
        </Link>
    ) : null
}
export default MyUrlField;