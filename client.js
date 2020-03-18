var form = document.querySelector("#form");

form.addEventListener('done', (e)=> {
    e.preventDefault();
    const data = new FormData(form)
    const name = data.get('name');
    const password = data.get('password');
    alert('Hey there ' + name)
})