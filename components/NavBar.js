import React, { useState, useEffect } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function NavBar(props) {
  const { white } = props;

  useEffect(() => {
    console.log("white");
    const navBar = document.getElementById("navbar");
    if (white) {
      navBar.style.backgroundColor = "white";
    } else {
      navBar.style.backgroundColor = "#faf2d9";
    };
  }, [white]);

  return (
    <div className={styles.NavBar} id="navbar">
      <div className={styles.logo_container}>
        <Image src="/ku-ola-logo.png" layout="fill"/>
      </div>
    </div>
  )
}
