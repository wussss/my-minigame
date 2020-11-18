const canvas = wx.createCanvas(); //创建画布
const width = canvas.width;
const height = canvas.height;
const food = wx.createImage()//创建图像
const dog = wx.createImage()//创建图像
food.src = './images/food1.png'
dog.src = './images/dog.png'
let dogLoad = false
const ctx = canvas.getContext('2d'); //创建一个2d context（画笔）
const { windowWidth, windowHeight } = wx.getSystemInfoSync()
function drawFood(x, y) {
  ctx.clearRect(0, 0, windowWidth, windowHeight)//清除整个画布
  ctx.drawImage(food, x, y)
}//绘制一个区域用于放置食物图像,图像尺寸为60x60
let X = width / 2 - 30
let Y = 0
let ImgX = width / 2 - 30;
let ImgY = 450

function render() {
  drawFood(X, Y++)
  ctx.drawImage(dog,ImgX, ImgY)//绘制一个区域用于放置狗狗图像，图像尺寸为60x60
  requestAnimationFrame(render)//自动重绘
}
dog.onload = function () {
  dogLoad = true
  render()
}//狗狗图片加载完成后绘制页面

