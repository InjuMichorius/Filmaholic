const input = document.getElementById('find-movies');

input.addEventListener('input', search);

export async function search(event) {
    console.log(event.target.value)
};