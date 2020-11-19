const canvas = wx.createCanvas(); //创建画布
const ctx = canvas.getContext("2d"); //创建一个2d 画笔
const { windowWidth, windowHeight } = wx.getSystemInfoSync();

function createImage(name: string) {
  const img = wx.createImage();
  img.src = `./images/${name}.png`;
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
  });
}

interface Point {
  x: number;
  y: number;
}
interface Shape {
  width?: number;
  height?: number;
}

class Entity {
  image: any;

  constructor(public name: string, public info: Point & Shape) {}

  async init() {
    this.image = await createImage(this.name);
    return this;
  }

  async render(info: Point & Shape = this.info) {
    console.log(this.name, " render");
    if (this.image) {
      await this.init();
    }
    const { x, y, width, height } = info;
    ctx.drawImage(this.image, x, y);
    return this;
  }
}

class MovedEntity extends Entity {
  constructor(
    public name: string,
    public info: Point & Shape,
    public step: number = 0
  ) {
    super(name, info);
  }

  async move() {
    console.log(this.name, " move");
    this.info.y += this.step;
    await this.render(this.info);
    return this;
  }
}

const initData = { x: 0, y: 0, width: 0, height: 0 };

const data: { [props: string]: Point & Shape } = {
  // bg: { ...initData, width: windowWidth, height: windowHeight },
  dog: { ...initData, x: windowWidth / 2 - 50, y: windowHeight - 100 },
  food1: { ...initData, x: windowWidth / 2 - 50 },
};

console.log("entry");

Promise.all(
  Object.keys(data).map(
    async (key) => await new MovedEntity(key, data[key]).init()
  )
).then((entities) => {
  console.log("start");
  function render() {
    console.log("render");
    // ctx.clearRect(0, 0, windowWidth, windowHeight); //清除整个画布
    entities.forEach((item) => item.move());
    requestAnimationFrame(render); //自动重绘
  }

  render();
});

// function renderEach(x, y, x1, y1) {
//   ctx.clearRect(0, 0, windowWidth, windowHeight); //清除整个画布
//   ctx.drawImage(bg, 0, 0, windowWidth, windowHeight); //背景图
//   ctx.drawImage(dog, x, y); //狗狗
//   ctx.drawImage(food, x1, y1); //食物
// }

// wx.onTouchMove((res) => {
//   dX = res.changedTouches[0].clientX;
//   dY = res.changedTouches[0].clientY;
// }); //狗狗跟随触摸点移动
