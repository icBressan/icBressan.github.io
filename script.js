function loadContent(url) {
  if (url === 'resumo') {
    const urlcv = "https://drive.google.com/uc?export=download&id=1k7Eftoj9L7NMeiPe8aXRnXYPTepGlwpU";
    const pdfcv = "src/curriculo.pdf"
    const div = document.getElementById("contentstuff");
    div.innerHTML = `
      <center><a class="buttond" href="${urlcv}" target="_blank"> Download CV </a></center>
<iframe src="${pdfcv}" width="100%" height="450px"></iframe>
    `
  }

  else {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById("contentstuff").innerHTML = data;
      });
  }
}

