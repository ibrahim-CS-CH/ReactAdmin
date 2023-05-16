import { Datagrid, List, TextField, SimpleList, EditButton, SavedQueriesList, FilterList, FilterLiveSearch, FilterListItem } from 'react-admin';
import { Card, CardContent, useMediaQuery } from '@mui/material';
export const Comments = () => {
    // const media = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const media = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List aside={<FilterSidebar />}>
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


//structure to build aside bar in ReactAdmin 
const FilterSidebar = () => (
    <Card className='bg-red-200'>
        <CardContent className=' '>
            <SavedQueriesList />


            <FilterList label='search' >
                <FilterListItem label={"name"} value={{ 'comments':"name" }}  />
                <FilterListItem label={"no"} value={"asd"}  />
            </FilterList>

            <FilterList label='DSA'> 

            </FilterList>
        </CardContent>
    </Card>
)
