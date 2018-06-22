$(readyNow);

function readyNow() {
    addEventListener();
}

function addEventListener() {
    $('#submitBtn').on('click', handleSubmit);
}

function handleSubmit() {
    console.log('You clicked it!');
    
}