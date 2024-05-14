"use client"
import React from 'react'
import Typewriter from "typewriter-effect";

const Typer = () => {
  return (
    <Typewriter
      options={{
        strings: ["FullStack Developer",],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Typer;