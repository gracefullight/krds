import MenuBookIcon from "@mui/icons-material/MenuBook";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        minHeight: "100svh",
        padding: "80px",
        gap: "64px",
      }}
    >
      <Grid component="main">
        <Stack direction="column" gap="32px">
          <Typography variant="display-medium">NEXT.JS</Typography>

          <Box
            component="ol"
            sx={{
              listStylePosition: "inside",
            }}
          >
            <Typography
              component="li"
              sx={{
                mb: 1,
              }}
            >
              Get started by editing <code>src/app/page.tsx</code>.
            </Typography>
            <Typography component="li">
              Save and see your changes instantly.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid>
              <Button
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                startIcon={<RocketLaunchIcon />}
              >
                Deploy now
              </Button>
            </Grid>
            <Grid>
              <Button
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="secondary"
                endIcon={<MenuBookIcon />}
              >
                Read our docs
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Grid>

      <Grid component="footer" sx={{ display: "flex", gap: "24px" }}>
        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          type="subtle-none"
          icon="external"
        >
          Learn
        </Link>
        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          type="subtle"
          icon="external"
        >
          Examples
        </Link>
        <Link
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          size="medium"
          icon="external"
        >
          Go to nextjs.org
        </Link>
      </Grid>
    </Grid>
  );
}
