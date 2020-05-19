import { loadImage } from "./loadImage";
import { promiseObjectAll } from "./util/promise";
// @ts-ignore
import reineUrl from "../asset/piece/reine.png";
// @ts-ignore
import roiUrl from "../asset/piece/roi.png";
// @ts-ignore
import broiUrl from "../asset/piece/broi.png";
// @ts-ignore
import breineUrl from "../asset/piece/breine.png";
// @ts-ignore
import tourUrl from "../asset/piece/tour.png";
// @ts-ignore
import btourUrl from "../asset/piece/btour.png";
// @ts-ignore
import fouUrl from "../asset/piece/fou.png";
// @ts-ignore
import bfouUrl from "../asset/piece/bfou.png";
// @ts-ignore
import chevalUrl from "../asset/piece/cheval.png";
// @ts-ignore
import bchevalUrl from "../asset/piece/bcheval.png";
// @ts-ignore
import bpionUrl from "../asset/piece/bpion.png";

export interface PieceObject {
    reine: HTMLImageElement;
    roi: HTMLImageElement;
    broi: HTMLImageElement;
    breine: HTMLImageElement;
    tour: HTMLImageElement;
    btour: HTMLImageElement;
    fou: HTMLImageElement;
    bfou: HTMLImageElement;
    cheval: HTMLImageElement;
    bcheval: HTMLImageElement;
    pion: HTMLImageElement;
    bpion: HTMLImageElement;
    // écrire toutes les autres pièces à la suite
}

export let getPieceObject = async (): Promise<PieceObject> => {
    return promiseObjectAll<PieceObject>({
        reine: loadImage(reineUrl),
        roi: loadImage(roiUrl),
        broi: loadImage(broiUrl),
        breine: loadImage(breineUrl),
        tour: loadImage(tourUrl),
        btour: loadImage(btourUrl),
        fou: loadImage(fouUrl),
        bfou: loadImage(bfouUrl),
        cheval: loadImage(chevalUrl),
        bcheval: loadImage(bchevalUrl),
        bpion: loadImage(bpionUrl),
        // écrire toutes les autres pièces à la suite
    });
};
