const submitButton = document.querySelector('#addition');
const multButton = document.querySelector('#mul');
const subButton = document.querySelector(`#sub`);
const divButton = document.querySelector(`#div`)


const field_One = document.querySelector('#field1');

const field_Two = document.querySelector('#field2');

 

const resultValue = document.querySelector('.resultValue');

 

submitButton.addEventListener('click', () => {

    const value_One = +field_One.value;

    const value_Two = +field_Two.value;

    const result = value_One + value_Two;

    console.log(value_One + value_Two);
    // alert(` Addition is: ${valueOne + valueTwo}`);

    resultValue.innerHTML = result;

} );

multButton.addEventListener(`click` , ()=> {
    const valu1 = +field_One.value;
    const valu2 = +field_Two.value;

    const multiplication = valu1 * valu2;

    resultValue.innerHTML = multiplication;
});


subButton.addEventListener(`click` , ()=> {
    const valu1 = +field_One.value;
    const valu2 = +field_Two.value;

    const subtraction = valu1 - valu2;

    resultValue.innerHTML = subtraction;
})


divButton.addEventListener(`click` , ()=> {
    const valu1 = +field_One.value;
    const valu2 = +field_Two.value;

    const division = valu1 / valu2;

    resultValue.innerHTML = division;
})