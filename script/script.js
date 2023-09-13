const datos = document.querySelector('.datos')
const cursor = document.querySelector('.cursor')
datos.addEventListener('mousemove', (e) => {

    cursor.style.top = (e.pageY - 200) + "px"
    cursor.style.left = (e.pageX - 200) + "px"

})