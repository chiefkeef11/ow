const calculate = () => {
    const inputwork1 = parseInt(document.querySelector('#work-1').value);
    const inputwork2 = parseInt(document.querySelector('#work-2').value);
    const inputwork3 = parseInt(document.querySelector('#work-3').value);

    const inputresource1 = parseInt(document.querySelector('#resource-1').value);
    const inputresource2 = parseInt(document.querySelector('#resource-2').value);
    const inputresource3 = parseInt(document.querySelector('#resource-3').value);


    if ( isNaN(inputwork1) || isNaN(inputwork2) || isNaN(inputwork3) || isNaN(inputresource1) || isNaN(inputresource2) || isNaN(inputresource3))

    {
        alert("Нужно заполнить каждое поле.");
        return;
    }
    let constSum =inputresource1+inputresource2+inputresource3;
    let WorkSum =(inputwork1*inputresource1)+(inputwork2*inputresource2)+(inputwork3*inputresource3);
    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = `
    <p>Общее количество работ: ${constSum}<p>
    <p>Общая стоимость работ: ${WorkSum}<p>
    `;
    }