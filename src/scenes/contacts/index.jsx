import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {field: "registrarId", headerName: "Registrar ID"},
        //Add flex 1 to grow (large Column), No flex for small Column
        { field: "name", 
          headerName: "Name",
          flex: 1, 
          cellClassName: "name-column--cell", 
          minWidth: 150,
        },
        { field: "age", 
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        { field: "phone", 
          headerName: "Phone Number",
          flex: 1,
          minWidth: 150,
        },
        { field: "email", 
          headerName: "Email",
          flex: 1,
          minWidth: 150,
        },
        { field: "address", 
          headerName: "Address",
          flex: 1,
          minWidth: 150,
        },
        { field: "city", 
          headerName: "City",
          flex: 1,
          minWidth: 150,
        },
        { field: "zipcode", 
          headerName: "Zipcode",
          flex: 1,
          minWidth: 150,
        },
        
    ];

    return (
      //Section for MUI datagrid style
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts" />
            <Box
             m="40px 0 0 0"
             height="75vh"
             sx={{
               "& .MuiDataGrid-root": {
                 border: "none",
               },
               "& .MuiDataGrid-cell": {
                 borderBottom: "none",
               },
               "& .name-column--cell": {
                 color: colors.greenAccent[400],
               },
               "& .MuiDataGrid-columnHeaders": {
                 backgroundColor: colors.blueAccent[700],
                 borderBottom: "none",
               },
               "& .MuiDataGrid-virtualScroller": {
                 backgroundColor: colors.primary[400],
               },
               "& .MuiDataGrid-footerContainer": {
                 borderTop: "none",
                 backgroundColor: colors.blueAccent[700],
               },
               "& .MuiCheckbox-root": {
                 color: `${colors.greenAccent[200]} !important`,
               },
               "& .MuiDataGrid-toolbarContainer ,MuiButton-text": {
                color: `${colors.grey[100]} !important`,
               }
             }}
            >
                <DataGrid checkboxSelection 
                rows={mockDataContacts} 
                columns={columns} 
                components={{ Toolbar: GridToolbar }}/> 
            </Box>
        </Box>
    );
};

export default Contacts;