"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { PrimaryInput } from "@/components/primary-input";
import { useState } from "react";
import { ButtonPrimary } from "@/components/button-primary";
import router from "next/router";

export default function Home() {
  const [search, setSearch] = useState("");
  const handleChange = (value: string) => {
    setSearch(value)
  }

  const handleNavigate = (value: string) => {
    router.push("/drinks?search=" + value)
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>What do you want to drink today?</h1>
      <PrimaryInput value="" label="Search by your favorite ingredient." onChange={handleChange} />
      <p className={styles.paragraph}>OR</p>
      <ButtonPrimary label="Get surprised!" onClick={() => { }} />
    </main>
  );
}
