function handleBtn() {
    const btn = document.getElementById("btn__map_list");
    const btn2 = document.getElementById("btn__address");
    const modal = document.getElementById("modal__address");

    btn.onclick = function() {
        if(btn.innerHTML === "목록") {
            btn.innerHTML = "지도";
        } else if(btn.innerHTML === "지도") {
            btn.innerHTML = "목록";
        }
    }

    btn2.onclick = function() {
        modal.classList.toggle("hidden");
    }
}

export default handleBtn;
