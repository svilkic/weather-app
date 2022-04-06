import React from "react";
import i18next from "i18next";
// Styles
import { Container } from "./dropdown.styled";

export function Dropdown() {
  const handleLanguageChange = (lang = "en") => {
    i18next.changeLanguage("sr");
  };

  return (
    <Container>
      <select onChange={handleLanguageChange}>
        <option>en</option>
        <option>sr</option>
      </select>
    </Container>
  );
}
