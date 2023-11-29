import "./home.css";
import Button from "react-bootstrap/Button";
import CustomChip from "../components/custom-chip";
import Stack from "@mui/material/Stack";

export default function HomeScreen() {
  return (
    <Stack direction="row" spacing={1}>
      <div className="kutu">
        <Button variant="secondary">Secondary</Button>
        <CustomChip label="Ayşe Nazlı" clr="red" bck="yellow" />
      </div>
    </Stack>
  );
}
