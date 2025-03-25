import styles from "@/app/page.module.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { Box, Button, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="display-medium">NEXT.JS</Typography>
        <Box component="ol">
          <Typography component="li">
            Get started by editing <code>src/app/page.tsx</code>.
          </Typography>
          <Typography component="li">
            Save and see your changes instantly.
          </Typography>
        </Box>

        <div className={styles.ctas}>
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
        </div>
      </main>
      <footer className={styles.footer}>
        <Button
          variant="text"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
        >
          Learn
        </Button>
        <Button
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          size="small"
        >
          Examples
        </Button>
        <Button
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          size="small"
        >
          Go to nextjs.org →
        </Button>
      </footer>
    </div>
  );
}
