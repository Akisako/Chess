/**
 * Load an image, encapsulated in a promise which garantees that the loading
 * has completed.
 *
 * @param url url of the image
 */
export let loadImage = async (url: string): Promise<HTMLImageElement> => {
    let resolve;

    let onload = () => resolve();

    let image = document.createElement("img");
    image.src = url;
    image.onload = onload;

    await new Promise((resFunc) => {
        resolve = resFunc;
    });

    return image;
};
