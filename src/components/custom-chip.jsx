/* eslint-disable react/prop-types */
import Chip from "@mui/material/Chip";
export default function CustomChip({ ...props }) {
  return (
    <Chip
      label={props.label}
      sx={{ color: props.clr, backgroundColor: props.bck }}
    />
  );
}
