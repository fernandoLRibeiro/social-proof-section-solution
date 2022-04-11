import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Social proof section</title>

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
      </Head>
      <div className={styles.container}>
        <Main />
      </div>
    </div>
  );
}
