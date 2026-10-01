function deobfuscate(encoded) {
  try {
    const reversed = encoded.split('').reverse().join('');
    return atob(reversed);
  } catch (e) {
    console.error("Failed to decode report token:", e);
    return null;
  }
}

function formatReportTime(timeUsed) {
  const minutes = Math.floor(Number(timeUsed) / 60);
  const seconds = Math.floor(Number(timeUsed) % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function formatReportTimeLimit(timeLimit) {
  const minutes = Math.floor(Number(timeLimit) / 60);
  const seconds = Math.floor(Number(timeLimit) % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const encodedData = params.get("data");
  
  if (!encodedData) {
    alert("Invalid report link.");
    return;
  }
  
  const decoded = deobfuscate(encodedData);
  if (!decoded || !decoded.includes("|")) {
    alert("Corrupted report data.");
    return;
  }
  
  const [name, instrument, level, score, timeUsed, timeLimit] = decoded.split("|");
  
  const timeDisplay = `${formatReportTime(timeUsed)} / ${formatReportTime(timeLimit)}`;
  
  document.getElementById("rpt-name").textContent = name || "N/A";
  document.getElementById("rpt-instrument").textContent = instrument || "N/A";
  document.getElementById("rpt-level").textContent = level || "N/A";
  document.getElementById("rpt-time").textContent = timeDisplay;
  document.getElementById("rpt-score").textContent = score || "N/A";
  
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById("rpt-date").textContent = formattedDate;
});


function copyReportLink() {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl).then(() => {
    const msg = document.getElementById("copy-msg");
    msg.classList.remove("hidden");
    setTimeout(() => msg.classList.add("hidden"), 2000);
  }).catch(err => {
    alert("Failed to copy link: " + err);
  });
}
