import Colorthief from 'colorthief';

export default function () {
  const colorthief = new Colorthief();
  const getColorthief = async (imgPath: string) => {
    const imgObj = new Image();
    imgObj.src = imgPath;
    return new Promise((resolve: any) => {
      imgObj.addEventListener('load', async function () {
        const data = await colorthief.getColor(imgObj, 90);
        resolve(data);
      });
    });
  };

  return {
    getColorthief
  };
}
