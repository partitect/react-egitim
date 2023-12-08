/* eslint-disable no-undef */
/* import { Box, Grid } from "@mui/material";
import CardComponent from "../components/card-component"; */
/* import CardImage from "../assets/1.webp";
import CardImage2 from "../assets/2.webp";
import CardImage3 from "../assets/3.webp"; */
import "../styles/main.scss";

export default function HomeScreen() {
  /*   const Ayse =
    styled.input <
    { title } >
    `
    font-size: 1.5em;
    
    background: var(--accent-color);
    color: black;

    olor: ${title || "#BF4F74"};
  
  `; */
  /* const gameCardList = [
    {
      image: CardImage,
      title: "Upcoming Games",
      description: "Lorem İpslum Dolor Sit Amet",
      chip: "success",
      chipColor: "success",
      starNumber: 18,
      sendNumber: 14,
      messageNumber: 10,
    },
    {
      image: CardImage2,
      title: "Test Card Title",
      description: "Lorem İpslum Dolor Sit Amet asfasgf asgasgsagasg",
      chip: "Primary",
      chipColor: "success",
      starNumber: 23,
      sendNumber: 33,
      messageNumber: 44,
    },
    {
      image: CardImage3,
      title: "Test Card Title",
      description: "Lorem İpslum Dolor Sit Amet asfasgf asgasgsagasg",
      chip: "Primary",
      chipColor: "success",
      starNumber: 23,
      sendNumber: 33,
      messageNumber: 44,
    },
  ]; */
  return (
    <>
      <div className="renk deneme">
        <a href="https://www.google.com">Google</a>
      </div>
      <div className="deneme"></div>
    </>
    /*  <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#27264e",
      }}
    >
      <Grid container spacing={2}>
        {gameCardList.map((item, index) => (
        
           
            <CardComponent key={index} data={item} />
           
         
        ))}
      </Grid>
    </Box> */
  );
}
