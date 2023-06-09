import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
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
        //use renderCell to grab access property
        //BG color changes based on access
        //Different Icons based on access
        { field: "access", 
          headerName: "Access Level",
          flex: 1,
          minWidth: 150,
          renderCell: ({ row: {access }}) => {
            return (
                <Box
                    width="60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                        access === "admin"
                        ? colors.greenAccent[600]
                        : colors.greenAccent[700]
                    }
                    borderRadius="4px"
                >
                    {access ==="admin" && <AdminPanelSettingsOutlinedIcon />}
                    {access ==="manager" && <SecurityOutlinedIcon />}
                    {access ==="user" && <LockOpenOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ ml: "5px"}}>
                        {access}
                    </Typography>
                </Box>
            );
          },
        },
    ];

    return (
      //Section for MUI datagrid style
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing Team Members" />
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
             }}
            >
                <DataGrid 
                checkboxSelection 
                rows={mockDataTeam} 
                columns={columns} /> 
            </Box>
        </Box>
    );
};

export default Team;