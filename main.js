const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECk = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

const options = {weekday : "long", month:"short", day:"numeric"};

const today = new Date();

dateElement.innerHTML = today.toDateString("en-US", options)














const list = document.getElementById("list")

const text = <li class="item">
    <i class="co fa fa-circle-thin" job="complete"></i>
</li>