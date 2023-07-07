export function RenderTextTexture(text: string): Uint8ClampedArray {
    // Create a canvas and a 2D rendering context
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Failed to get 2D rendering context');
    }

    // Set the size of the canvas to match the size of the text
    canvas.width = text.length * 16; // Adjust as needed
    canvas.height = 16; // Adjust as needed

    // Render the text to the canvas
    ctx.font = '16px sans-serif'; // Adjust as needed
    ctx.fillStyle = 'white';
    ctx.fillText('text', 0, 16);

    // Get the pixel data from the canvas
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return imageData.data;
}
