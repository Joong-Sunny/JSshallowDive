self.onmessage = async function(e){
  const {image} = e.data;
  const result = await offScreenCanvasImageResizing(image);
  self.postMessage(result);
}

const offScreenCanvasImageResizing = async (image) => {
  const imageBitmap = await createImageBitmap(image);
  const offscreen = new OffscreenCanvas(
    imageBitmap.width / 2,
    imageBitmap.height / 2
  );
  const ctx = offscreen.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0, offscreen.width, offscreen.height);

  const resizedBlob = await offscreen.convertToBlob();
  return await convertBlobToBase64(resizedBlob);
}












const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
  });
};
