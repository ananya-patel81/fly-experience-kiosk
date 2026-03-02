function showModule(moduleId) {
  document.getElementById("home").classList.add("hidden");
  document.getElementById(moduleId).classList.remove("hidden");
}

function showOutcome(moduleId, positive) {
  const outcomeDiv = document.getElementById(moduleId + "-outcome");

  if (positive) {
    outcomeDiv.innerHTML = `
      <p>The team organizes quickly and delivers successfully.</p>
      <p><strong>Micro Challenge:</strong> Start one task this week without being told.</p>
    `;
  } else {
    outcomeDiv.innerHTML = `
      <p>No one acts. The project suffers.</p>
      <p><strong>Reflection:</strong> Leadership begins when waiting ends.</p>
    `;
  }
}
