const form = document.querySelector('form')

// this will give you empty value
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit',function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = (`Please enter a valid height ${height}`)
  }
  else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = (`Please enter a valid weight ${weight}`)
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show results
    ////check the results whether it is under or over weight or normal
    results.innerHTML = `<span>${bmi}</span>`

    if (bmi < 18.6) {
      results.innerHTML = (`You are under weight with bmi ${bmi}`)
    }
    if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = (`You are weight is normal with bmi ${bmi}`)
    }
    if (bmi >= 24.9) {
      results.innerHTML = (`You are over weight with bmi ${bmi}`)
    }
  }

})