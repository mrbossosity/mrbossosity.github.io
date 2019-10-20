const primary = document.getElementById('next');
const secondary = document.getElementById('resume');
function somePrimaryAction(e){
  e.preventDefault();
}
function clickPrimaryButton(e){
  e.preventDefault();
  primary.click();
}
primary.addEventListener("click", somePrimaryAction, false);
secondary.addEventListener("click", clickPrimaryButton, false);
