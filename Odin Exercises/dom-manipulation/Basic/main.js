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