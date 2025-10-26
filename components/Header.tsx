import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="bg-white py-5">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Logo />
        <HeaderMenu />
        <div className="">Others</div>
        {/* Nav Button */}
        {/* Nav Admin */}
      </Container>
    </header>
  );
}
