const  link = document.querySelector("a");

link.textContent = "Mozila Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "Hope you enjoyed the ride.";

sect.appendChild(para);

const text = document.createTextNode(
    " - the premier source for developer knowledge"
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

//Remove from if we have both node and parent reference

sect.removeChild(linkPara);

// Remove if we have the node reference (only on modern browsers)
// linkPara.remove()

// On older browsers if we only have node reference
// linkPara.parentNode.removeChild(linkPara);

// Modify inline CSS
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

para.setAttribute("class", "highlight");

