import styles from "@/app/page.module.css";
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
            variant="outlined"
            color="primary"
          >
            Deploy now
          </Button>
          <Button
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            color="secondary"
          >
            Read our docs
          </Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          variant="body-small"
        >
          Learn
        </Link>
        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          variant="body-small"
        >
          Examples
        </Link>
        <Link
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          variant="body-small"
        >
          Go to nextjs.org →
        </Link>
      </footer>
    </div>
  );
}
