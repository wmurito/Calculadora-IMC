// Declarando as variáveis resultado, altura e peso.
const imcResult = document.querySelector('#result');
const classificationResult = document.querySelector('#classification');
const height = document.querySelector('#input-height');
const weight = document.querySelector('#input-weight');

const calcIMC = ( ) => {
    if (height.value !== '' && weight.value !== '') {
        const imc = (weight.value / (height.value * height.value)).toFixed(2);
        let classification = classificationResult;

        if (imc >= 0 && imc <= 16.9) {
            classification = `Você está muito abaixo do peso.`;
        } if (imc >= 17 && imc <= 18.4) {
            classification = `Você está abaixo do peso.`;
        } if (imc >= 18.5 && imc <= 24.9) {
            classification = `Você está com o peso normal.`;
        } if (imc >= 25 && imc <= 29.9) {
            classification = `Você está acima do peso.`;
        } if (imc >= 30 && imc <= 34.9) {
            classification = `Você está com obesidade grau I.`;
        } if (imc >= 35 && imc <= 40) {
            classification = `Você está com obesidade grau II.`;
        } if (imc > 40) {
            classification = `Você está com obesidade grau III.`;
        }

        imcResult.innerHTML = `Seu IMC é: ${imc}.`
        classificationResult.innerHTML = `${classification}`;

        if (height.value == 0 && weight.value == 0) {
            classification.innerHTML = `Insira um valor válido.`;
            imcResult.innerHTML = `Erro.`;
        }
    }
}