import "regenerator-runtime/runtime";
import { createDisplay } from "./display";
import { getPieceObject } from "./piece";

let h1 = document.createElement("h1");
h1.textContent = document.title;
document.body.appendChild(h1);
let canvas = document.createElement("canvas");
document.body.appendChild(canvas);

let main = async () => {
    let piece = await getPieceObject();
    let display = createDisplay(canvas, piece);
};

main();
