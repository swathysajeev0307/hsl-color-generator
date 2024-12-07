/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

document.addEventListener("DOMContentLoaded", function () {
  const hueInput = document.getElementById("hue");
  const saturationInput = document.getElementById("saturation");
  const lightnessInput = document.getElementById("lightness");

  const hueValueSpan = document.getElementById("hueValue");
  const saturationValueSpan = document.getElementById("saturationValue");
  const lightnessValueSpan = document.getElementById("lightnessValue");

  const colorDisplay = document.querySelector(".color-display");

  const copyButton = document.getElementById("copyButton");

  hueInput.addEventListener("input", updateColor);
  saturationInput.addEventListener("input", updateColor);
  lightnessInput.addEventListener("input", updateColor);

  updateColor();

  function updateColor() {
    const hue = hueInput.value;
    const saturation = saturationInput.value;
    const lightness = lightnessInput.value;

    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    colorDisplay.style.backgroundColor = color;

    hueValueSpan.textContent = hue;
    saturationValueSpan.textContent = saturation;
    lightnessValueSpan.textContent = lightness;
  }

  copyButton.addEventListener("click", copyToClipboard);

  function copyToClipboard() {
    const textToCopy = `hsl(${hueInput.value}, ${saturationInput.value}%, ${lightnessInput.value}%)`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        alert("The color is copied to clipboard");
      })
      .catch(function (err) {
        console.error("Unable to copy the data", err);
      });
  }
});