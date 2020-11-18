const canvas = wx.createCanvas(); //创建画布
const food = wx.createImage()//创建图像
const dog = wx.createImage()//创建图像
food.src = './images/food1.png'
dog.src = './images/dog.png'
let dogLoad = false
dog.onload = function () {
  dogLoad = true
}
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d'); //创建一个2d context
const { windowWidth, windowHeight } = wx.getSystemInfoSync()
function drawFood(x, y) {
  ctx.clearRect(0, 0, windowWidth, windowHeight)//清除整个画布
  ctx.drawImage(food, x, y)
}//绘制一个区域用于放置食物图像,图像尺寸为60x60
const X = width / 2 - 30
let Y = 0
setInterval(() => {
  drawFood(X, Y++)
  if (dogLoad) {
    ctx.drawImage(dog, X, 450)
  }//绘制一个区域用于放置狗狗图像,图像尺寸为60x60
}, 15)//每15秒绘制一次，且向下移动

