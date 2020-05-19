import { PieceObject } from "./asset";

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
    ctx.drawImage(piece.reine, 188, 440, 60, 60);
    ctx.drawImage(piece.roi, 250.5, 440, 60, 60);
    ctx.drawImage(piece.breine, 188, 0, 60, 60);
    ctx.drawImage(piece.broi, 250.5, 0, 60, 60);
    ctx.drawImage(piece.tour, 0, 440, 60, 60);
    ctx.drawImage(piece.tour, 440, 440, 60, 60);
    ctx.drawImage(piece.btour, 0, 0, 60, 60);
    ctx.drawImage(piece.btour, 440, 0, 60, 60);
    ctx.drawImage(piece.fou, 313, 440, 60, 60);
    ctx.drawImage(piece.fou, 125.5, 440, 60, 60);
    ctx.drawImage(piece.bfou, 313, 0, 60, 60);
    ctx.drawImage(piece.bfou, 125.5, 0, 60, 60);
    ctx.drawImage(piece.cheval, 375.5, 440, 60, 60);
    ctx.drawImage(piece.cheval, 63, 440, 60, 60);
    ctx.drawImage(piece.bcheval, 375.5, 0, 60, 60);
    ctx.drawImage(piece.bcheval, 63, 0, 60, 60);
    ctx.drawImage(piece.bpion, 0.5, 62.5, 60, 60);
    ctx.drawImage(piece.bpion, 63, 62.5, 60, 60);
    ctx.drawImage(piece.bpion, 125.5, 62.5, 60, 60);
    ctx.drawImage(piece.bpion, 188, 62.5, 60, 60);
    ctx.drawImage(piece.bpion, 250.5, 62.5, 60, 60);
    ctx.drawImage(piece.bpion, 313, 62.5, 60, 60);
    ctx.drawImage(piece.bpion, 375.5, 62.5, 60, 60);
    ctx.drawImage(piece.bpion, 438, 62.5, 60, 60);

    ctx.drawImage(piece.pion, 0.5, 375, 60, 60);
    ctx.drawImage(piece.pion, 63, 375, 60, 60);
    ctx.drawImage(piece.pion, 125.5, 375, 60, 60);
    ctx.drawImage(piece.pion, 188, 375, 60, 60);
    ctx.drawImage(piece.pion, 250.5, 375, 60, 60);
    ctx.drawImage(piece.pion, 313, 375, 60, 60);
    ctx.drawImage(piece.pion, 375.5, 375, 60, 60);
    ctx.drawImage(piece.pion, 438, 375, 60, 60);

    return {};
};
