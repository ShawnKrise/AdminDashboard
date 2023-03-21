const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

//this is used for the sidebar
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;