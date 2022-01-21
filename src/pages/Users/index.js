import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const Users = ({ ...props }) => {
  const { name } = props;
  console.log(name);
  return (
    <Box>
      <Typography variant="h2">{name}</Typography>
    </Box>
  );
};

Users.propTypes = {
  name: PropTypes.string,
};

export default Users;
