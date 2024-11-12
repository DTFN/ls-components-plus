import Colorthief from 'colorthief';

export default function () {
  const colorthief = new Colorthief();
  const getColorthief = async (imgPath: string) => {
    const imgObj = new Image();
    imgObj.src = imgPath;
    imgObj.crossOrigin = 'Anonymous';
    return new Promise((resolve: any) => {
      imgObj.addEventListener('load', async function () {
        const data = await colorthief.getColor(imgObj, 90);
        resolve({
          bgColor: `rgb(${data[0]}, ${data[1]}, ${data[2]})`
        });
      });
    });
  };

  return {
    getColorthief
  };
}
