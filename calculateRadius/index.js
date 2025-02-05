const PI = 3.14159;
let Input;
document.getElementById("btn").onclick = () => {
  Input = document.getElementById("myInput").value;
  Input = Number(Input);

  if (isNaN(Input)) {
    document.getElementById("result").textContent = `Accept the Number Only`;
    return;
  }

  result = 2 * PI * Input;
  console.log(result);

  document.getElementById("result").textContent = `Result : ${result} CM`;
};
