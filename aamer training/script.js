// Collapsible
const collapsibles = document.getElementsByClassName("collapsible");
for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if(content.style.display === "block") content.style.display = "none";
    else content.style.display = "block";
  });
}

// Script Generator
const scripts = {
  eid: "CSR Script: Check EID Application ID / Job ID, confirm payment, provide pickup/delivery details.",
  residency_normal: "CSR Script: Normal residency includes spouse + children. Parents cannot be added.",
  residency_golden: "CSR Script: Golden residency includes spouse, children, and parents.",
  goldenvisa: "CSR Script: Submit nomination first through Aamer app, then apply for Golden Visa.",
  judicial: "CSR Script: All judicial cases must be submitted through the Aamer app. CSR cannot access files.",
  workpermits: "CSR Script: Provide work permit, company file, job offer guidance. Submit request through app.",
  domestic: "CSR Script: Handle domestic worker visa, renewal, cancellation. Submit via app.",
  attestations: "CSR Script: Translation and attestation of documents. Submit originals through app.",
  commercial: "CSR Script: Assist with licenses, trade name, freelance, economic license. Submit request via app.",
  delivery: "CSR Script: Delivery, pickup, return services. Schedule and fees via app.",
  visa: "CSR Script: UAE multi-entry, Saudi tourism visas. Apply via app."
};

function generateScript() {
  const service = document.getElementById('serviceSelect').value;
  const output = document.getElementById('scriptOutput');
  output.textContent = scripts[service] || "Please select a valid service.";
}

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(btn => {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
