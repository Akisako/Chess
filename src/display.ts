import { PieceObject } from "./piece";

export let createDisplay = function (
    canvas: HTMLCanvasElement,
    piece: PieceObject
) {
    canvas.width = 500;
    canvas.height = canvas.width;
    const TAILLE_GRILLE = 8;
    let w = canvas.width / TAILLE_GRILLE;
    let h = canvas.height / TAILLE_GRILLE;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#433";
    Array.from({ length: TAILLE_GRILLE }, (_, ky) => {
        let y = ky * h;
        Array.from({ length: TAILLE_GRILLE }, (_, kx) => {
            let shouldFillSquare = false;
            let x = kx * w;
            if ([1, 3, 5, 7].includes(kx)) {
                if ([0, 2, 4, 6].includes(ky)) {
                    shouldFillSquare = true;
                }
            } else if ([0, 2, 4, 6].includes(kx)) {
                if ([1, 3, 5, 7].includes(ky)) {
                    shouldFillSquare = true;
                }
            }
            if (shouldFillSquare === true) {
                ctx.fillRect(x, y, w, h);
            }
        });
    });
    ctx.drawImage(piece.queen, 188, 440, 60, 60);
    return {};
};
