<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Regulamente Tabs</title>
<style>
  body {
    background-color: #121212;
    color: #eee;
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .tab-btn {
    padding: 10px 20px;
    background-color: #333;
    border: none;
    border-radius: 5px;
    color: #eee;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .tab-btn:hover {
    background-color: #555;
  }

  .active-tab {
    background-color: #007bff;
    color: white;
    font-weight: bold;
  }

  #reguli-list > div {
    background-color: #222;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
  }

  .rule-title {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .rule-description ul {
    padding-left: 20px;
  }

  .rule-description li {
    margin-bottom: 6px;
  }
</style>
</head>
<body>

<div class="tabs">
  <button id="tab-general" class="tab-btn" onclick="switchTab('general')">General</button>
  <button id="tab-sanctiuni" class="tab-btn" onclick="switchTab('sanctiuni')">Sancțiuni</button>
</div>

<div id="reguli-list"></div>

<script>
const regulamente = {
  general: [
    { titlu: 'Roleplay (RP)', descriere: 'Simularea vieții reale în joc, totalitatea acțiunilor pe care un om le-ar face în viața reală.' },
    // alte reguli general...
  ],

  sanctiuni: [
    {
      titlu: 'SANCȚIUNI RP',
      descriere: `
        <ul>
          <li>Fail Roleplay - 35 Minute</li>
          <li>Power Gaming - 50 Minute</li>
          <li>Meta Gaming - 50 Minute</li>
          <li>Mixing - 45 Minute</li>
          <li>Random Deathmatch - 60 Minute</li>
          <li>Vehicle Deathmatch - 55 Minute</li>
          <li>Rob&Kill, Kill&Rob - 55 Minute</li>
          <li>Drop&Kill - 45 Minute</li>
          <li>Revenge Kill - 70 Minute + 1 warn</li>
          <li>Non Fear PASIV - 25 Minute</li>
          <li>Non Fear AGRESIV - 50 Minute</li>
          <li>Post Hunting - 75 Minute + 1 warn</li>
          <li>Cop Bait - 40 Minute</li>
          <li>Provoking - 65 Minute + 1 warn</li>
          <li>Car Ram - 35 Minute</li>
          <li>Car Surf - 45 Minute + 1 warn</li>
          <li>Ninja Jack - 50 Minute</li>
          <li>Olimpic Swim - 30 Minute</li>
          <li>Infinity Punch - 55 Minute</li>
          <li>Fake Cop - 80 Minute + 1 warn</li>
          <li>Fake Mafia - 85 Minute + 1 warn</li>
          <li>Roleplay Scarbos - 200 Minute + 1 warn</li>
          <li>Suferințe - 100 Minute + 1 warn</li>
          <li>Disconnect in Roleplay - 90 Minute + 1 warn</li>
          <li>Comportament de Bombardier - 150 Minute + 1 warn</li>
          <li>Death Match - 75 Minute + 1 warn</li>
          <li>Bug Abuse - 200 Minute + 1 warn</li>
          <li>Amenințări - 150 Minute + 1 warn</li>
          <li>Refuz RP - 100 Minute</li>
          <li>LER - 50 Minute</li>
          <li>Fake Crash - 100 Minute</li>
          <li>Armă în zonă publică - 60 Minute</li>
          <li>TROLL - 500 Minute</li>
          <li>Reclamă - Ban Permanent</li>
        </ul>
      `
    },
    {
      titlu: 'SANCȚIUNI CHAT',
      descriere: `
        <ul>
          <li>Prelungire / exces - 10 - 30 minute (în funcție de gravitate)</li>
          <li>SPAM - 30 - 60 minute</li>
          <li>CAPS - 30 minute</li>
          <li>Mixing (inclusiv menționare {ic}) - 30 minute</li>
          <li>Insulte - 60 - 120 minute</li>
          <li>Suferințe - 60 - 180 minute</li>
          <li>Bullying - 180 minute</li>
        </ul>
      `
    }
  ]
};

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));
  document.getElementById('tab-' + tab).classList.add('active-tab');
  
  const reguliContainer = document.getElementById('reguli-list');
  reguliContainer.innerHTML = '';

  if (!regulamente[tab]) return;

  regulamente[tab].forEach(rule => {
    const ruleElement = document.createElement('div');
    ruleElement.classList.add('p-4', 'bg-gray-800', 'rounded-md', 'mb-4');
    ruleElement.innerHTML = `
      <div class="rule-title">${rule.titlu}</div>
      <div class="rule-description">${rule.descriere}</div>
    `;
    reguliContainer.appendChild(ruleElement);
  });
}

// Setăm tab-ul implicit la încărcare
window.onload = () => switchTab('general');
</script>

</body>
</html>
