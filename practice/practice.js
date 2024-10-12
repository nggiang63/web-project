function updateOutput() {
    const htmlCode = document.getElementById("htmlInput").value;
    const cssCode = `<style>${document.getElementById("cssInput").value}</style>`;
    const outputFrame = document.getElementById("outputFrame").contentWindow.document;

    outputFrame.open();
    outputFrame.write(htmlCode + cssCode);
    outputFrame.close();
}
