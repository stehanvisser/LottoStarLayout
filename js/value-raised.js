var outputHTML = "";
const valueRaised = 100732;
const currency = "R";

let stringValueRaised = valueRaised.toString();

while (stringValueRaised.length < 7) {
  stringValueRaised = "0" + stringValueRaised;
}

stringValueRaised = currency + stringValueRaised;

for (let str of stringValueRaised) {
  outputHTML += ` <div class="value-container">
            <div class="value-background top"></div>
            <div class="dent right"></div>
            <div class="value">${str}</div>
            <div class="value-divider"></div>
            <div class="dent left"></div>
            <div class="value-background bottom"></div>
          </div>`;
}

document.getElementById("output_div").innerHTML = outputHTML;
