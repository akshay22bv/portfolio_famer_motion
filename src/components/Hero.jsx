import { content } from "../Content";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const Hero = () => {
  const { hero } = content;
  return (
    <section id="home">
      <div className="min-h-screen relative flex flex-col justify-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="z-10 absolute h-full top-0 right-0  w-8/12 md:w-4/12 bottom-0"
        >
          <h1 className="hidden md:block sm:rotate-90 absolute top-[10%] sm:top-[35%] text-white p-1 sm:right-[-15%]">
            {hero.firstName}&nbsp;
            <span className="text-white"> {hero.LastName}</span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          // data-aos="fade-up"
          className="pb-10 md:pb-30 px-6 max-w-md m-0 md:m-auto"
        >
          <h2 className="flex md:hidden text-white gap-2">
            {hero.firstName}&nbsp;
            <span className="text-white"> {hero.LastName}</span>
          </h2>
          <h3 className="">{hero.title}</h3>
          <br />
          <div className="flex justify-end">
            <button className="btn ">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            {hero.hero_content?.map((item, i) => (
              <div
                key={i}
                className={`flex ${i === 1 && "flex-row-reverse"} gap-5`}
              >
                <h3>{item.count}</h3>
                <span className="text-xl">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
