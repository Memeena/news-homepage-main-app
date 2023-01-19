import styles from "./News.module.css";
import NewsElement from "../NewsElement/NewsElement";

const newsArr = [
  {
    img: "image-retro-pcs.jpg",
    imgName: "retro-pcs-image",
    heading: "Reviving Retro PCs",
    desc: " What happens when old PCs are given modern upgrades?",
  },
  {
    img: "image-top-laptops.jpg",
    imgName: "top-laptops-image",
    heading: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
  },
  {
    img: "image-gaming-growth.jpg",
    imgName: "gaming-growth-image",
    heading: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities.",
  },
];

const newsElement = newsArr.map((arr, i) => (
  // console.log(arr.heading);
  <NewsElement
    key={i}
    id={i + 1}
    heading={arr.heading}
    img={arr.img}
    imgName={arr.imgName}
    desc={arr.desc}
  />
));

export default function News() {
  return <section className={styles.newsElement}>{newsElement}</section>;
}
