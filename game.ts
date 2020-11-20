const canvas = wx.createCanvas(); //创建画布
const ctx = canvas.getContext("2d"); //创建一个2d 画笔

const { windowWidth, windowHeight } = wx.getSystemInfoSync();

function createImage(info: string) {
  const img = wx.createImage();
  img.src = `./images/${info}.png`;
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
  });
}

const initData = { x: 0, y: 0, width: 0, height: 0 };

const getData: () => { [props: string]: any } = () => {
  const x = Math.random() * windowWidth - 50;

  return {
    bg: { ...initData, width: windowWidth, height: windowHeight, step: 0 },
    dog: {
      ...initData,
      x: windowWidth / 2 - 50,
      y: windowHeight - 100,
      step: 0,
    },
    food1: {
      ...initData,
      x: Math.random() * windowWidth - 50,
      step: 1,
    },
    shit: {
      ...initData,
      x: Math.random() * windowWidth - 50,
      step: 1,
    },
  };
};

enum Kind {
  Negative,
  Positive,
}

interface Info {
  name: string;
}

interface Point {
  x: number;
  y: number;
}
interface Shape {
  width?: number;
  height?: number;
}

interface Context {
  ctx?: any;
}

class Entity {
  image: any;

  constructor(public info: Info, public feature: Point & Shape) {}

  async init() {
    this.image = await createImage(this.info.name);
    return this;
  }

  async render(context: any = ctx) {
    if (this.image) {
      await this.init();
    }
    const { x, y, width, height } = this.feature;
    if (width && height) {
      ctx.drawImage(this.image, x, y, width, height);
    } else {
      ctx.drawImage(this.image, x, y);
    }

    return this;
  }
}

class MovedEntity extends Entity {
  constructor(
    public info: Info,
    public feature: Point & Shape,
    public step: number
  ) {
    super(info, feature);
  }

  async move() {
    this.feature.y += this.step;

    if (this.feature.y > windowHeight) {
      this.feature.y = 0;

      if (this.step < 3) {
        this.step += 1;
      }
    }

    await this.render(this.feature);
    return this;
  }
}

const WORLD = { score: 0 };

class AutoMovedEntity extends MovedEntity {
  constructor(
    public info: Info,
    public feature: Point & Shape,
    public step: number,
    public kind: Kind
  ) {
    super(info, feature, step);
  }

  async move() {
    this.feature.y += this.step;

    if (this.feature.y > windowHeight) {
      this.feature.y = 0;

      if (this.step < 3) {
        this.step += 1;
      }
    }

    await this.render(this.feature);
    return this;
  }

  match(target: Point & Shape) {
    const { x, y, width, height } = target;
    if (
      Math.abs(this.feature.x - x) < 20 &&
      Math.abs(this.feature.y - y) < 20
    ) {
      this.hit();
      const { food1 } = getData();
      this.feature = { ...this.feature, ...food1 };
    }
  }

  hit() {
    // 得分
    if (this.kind === Kind.Positive) {
      console.log("得分");
      WORLD.score++;
    } else {
      // 扣分
      console.log("扣分");
      WORLD.score -= 10;
    }
  }
}

async function run() {
  const data = getData();

  const [bg, dog] = await Promise.all(
    Object.keys({ bg: data.bg, dog: data.dog }).map(
      async (key) => await new MovedEntity({ name: key }, data[key], 0).init()
    )
  );

  const list: AutoMovedEntity[] = [];

  setInterval(async () => {
    if (list.length > 10) {
      return;
    }
    const data = getData();
    list.push(
      await new AutoMovedEntity(
        { name: "shit" },
        data.shit,
        data.shit.step,
        Kind.Negative
      ).init()
    );
  }, 1000 * 10);

  setInterval(async () => {
    if (list.length > 10) {
      return;
    }

    const data = getData();
    list.push(
      await new AutoMovedEntity(
        { name: "food1" },
        data.food1,
        data.food1.step,
        Kind.Positive
      ).init()
    );
  }, 1000 * 1);

  async function render() {
    list.map((item) => item.match(dog.feature));
    Promise.all([bg, dog, ...list].map((item) => item.move()));
    ctx.font = "20px Georgia";
    ctx.fillText(String(WORLD.score), 10, 20);
    requestAnimationFrame(render);
  }

  render();

  wx.onTouchMove((res: any) => {
    dog.feature.x = res.changedTouches[0].clientX - 50;
    dog.feature.y = res.changedTouches[0].clientY - 50;
  }); //狗狗跟随触摸点移动
}

run();
