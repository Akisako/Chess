import { loadImage } from "./loadImage";
import { promiseObjectAll } from "./util/promise";
// @ts-ignore
import queenUrl from "../asset/piece/queen.png";

export interface PieceObject {
    queen: HTMLImageElement;
    // écrire toutes les autres pièces à la suite
}

export let getPieceObject = async (): Promise<PieceObject> => {
    return promiseObjectAll<PieceObject>({
        queen: loadImage(queenUrl),
        // écrire toutes les autres pièces à la suite
    });
};
