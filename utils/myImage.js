function myImage(name) {
  const img = wx.createImage()
  img.src = `./images/${name}.png`
  return img
}
export default myImage