import styles from "./New.module.css";
import NewElement from "../NewElement/NewElement";

const newArr = [
  {
    heading: "Hydrogen Vs Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    heading: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    heading: "Is VC Funding Drying Up?",
    desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const newElement = newArr.map((arr, i) => (
  <NewElement key={i} heading={arr.heading} desc={arr.desc} />
));

export default function New() {
  return (
    <div className={styles.new}>
      <h1 className={styles.heading}>New</h1>
      <section className={styles.newelement}>{newElement}</section>
    </div>
  );
}
