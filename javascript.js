let result = document.getElementById('result');

function clearResult() {
    result.value = '0';
}

function backspace() {
    result.value = result.value.slice(0, -1);
    if (result.value === '') {
        result.value = '0';
    }
}

function addToResult(value) {
    if (result.value === '0' && value !== '.') {
        result.value = '';
    }
    result.value += value;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}