import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Paper,
  Link,
  IconButton,
 
} from "@mui/material";
import { Box } from "@mui/system";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Container from "@mui/material/Container";


export default function Footer() {
  return (
    <div className="container">
      <Container>
      <Paper
        elevation={24}
        sx={{
          mt: 8,
          background: "radial-gradient(circle,#fde4e4,#fde4e4,white)",
          borderRadius: "20px",
          p: { xs: 4, md: 10 },
          pt: 12,
          pb: 12,
          fontSize: { xs: "12px", md: "14px" },
          mb: 1,
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={6} lg={4}>
            <DinnerDiningIcon
              sx={{ width: 50, height: 35, color: "#a33307" }}
            ></DinnerDiningIcon>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#a33307",
                mt: 2,
              }}
            >
              About us
            </Typography>
            <Typography variant="caption2">
              Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
              tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud.
            </Typography>
            <Box
              sx={{
                mt: 4,
              }}
            >
              <Link href="https://www.facebook.com/">
                <IconButton>
                  <FacebookIcon
                    sx={{ mr: 1, color: "#a33307", cursor: "pointer" }}
                  />
                </IconButton>
              </Link>
              <Link href="https://www.twitter.com/">
                <IconButton>
                  {" "}
                  <TwitterIcon
                    sx={{ mr: 1, color: "#a33307", cursor: "pointer" }}
                  />
                </IconButton>
              </Link>
              <Link href="https://www.instafram.com/">
                <IconButton>
                  <InstagramIcon
                    sx={{ mr: 1, color: "#a33307", cursor: "pointer" }}
                  />
                </IconButton>
              </Link>
              <Link><IconButton></IconButton></Link>
              <Link href="https://www.linkedin.com/"><IconButton><LinkedInIcon
                sx={{ mr: 1, color: "#a33307", cursor: "pointer" }}
              /></IconButton></Link>
         <Link href="https://www.youtube.com/"><IconButton>     <YouTubeIcon sx={{ color: "#a33307", cursor: "pointer" }} /></IconButton></Link>
            </Box>
          </Grid>

          <Grid item md={6} lg={2}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", fontWeight: "600", color: "#a33307" }}
            >
              Contact
            </Typography>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Location: Dhulikhel, Sarsowtibazar
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#a33307" }}
                >
                  Phone:9860428022
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#a33307" }}
                >
                  Email: foodieweb12@gmail.com
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item md={6} lg={2}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", fontWeight: "600", color: "#a33307" }}
            >
              Delivery Time
            </Typography>
            <List>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#a33307" }}
                >
                  Sunday - Friday
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  10:00am - 9:00pm
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#a33307" }}
                >
                  Saturday
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Off day
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item md={6} lg={2}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", fontWeight: "600", color: "#a33307" }}
            >
              Information
            </Typography>
            <List>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#a33307" }}
                >
                  Order Tracking
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Privacy &amp; Policy
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography
                  lineHeight={2}
                  variant="caption2"
                  sx={{ fontSize: "1rem", fontWeight: "600", color: "#a33307" }}
                >
                  Terms &amp; Conditions
                </Typography>
              </ListItemText>
            </List>
          </Grid>
        </Grid>
      </Paper></Container>
    </div>
  );
}
