import * as React from "react";

export default function Footer() {
  return (
    <footer className="bg-footer w-full text-text-3 p-5 text-center text-xs sticky max-md:text-[10px]">
      <div>
        <span>This work includes material taken from the System Reference Document 5.1 (“SRD 5.1”) by Wizards of the Coast LLC and available at </span>
        <a className="underline hover:text-link" href="https://dnd.wizards.com/resources/systems-reference-document">
          https://dnd.wizards.com/resources/systems-reference-document</a>

        <span>. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at </span>
        <a className="underline hover:text-link" href="https://creativecommons.org/licenses/by/4.0/legalcode">
          https://creativecommons.org/licenses/by/4.0/legalcode</a>
        <span>.</span>
      </div>
      <div className="h-3"/>
      <div>
        Copyright © 2024 Legend Mama
      </div>
    </footer>
  );
}