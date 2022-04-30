let currTool = "0";
let tool1 = document.getElementById("tool1");
let tool2 = document.getElementById("tool2");
let tool3 = document.getElementById("tool3");
let tools = [tool1, tool2, tool3];
tools.forEach((item) => item.addEventListener("click", setTool));

function setTool(e) {
  currTool = e.target.getAttribute("tool-type");
  tools.forEach((item) => (item.style.backgroundColor = ""));
  e.target.style.backgroundColor = "red";
}

export { currTool };
