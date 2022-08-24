import promptSync from "prompt-sync";
const prompt = promptSync({ eot: true }); // Strg. + D

function dsgvo() {
  console.log(
    `Ich habe die Datenschutzrichtlinie und Nutzungsbedingungen für von E.B.R.U.-Games erstellte Anwendungen gelesen, verstanden und akzeptiere diese. Für Lesen, bitte "l" tippen und ENTER, für sofortiges akzeptieren ohne zu lesen, also wie immer, bitte "a" tippen und ENTER. `
  );
  const dsgvo = prompt();

  switch (dsgvo) {
    case "l":
      console.log(
        "Laberrhabarberusw.Undsofort, wichtig, ganz wichtig, super wichtig, MEGA wichtig. Gähn, schlaf gleich ein."
      );
      break;
    case "a":
      console.log("Danke, du kannst jetzt starten.");
      console.log("");
      break;
  }
}

export { dsgvo };
