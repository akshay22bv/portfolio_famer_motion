import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const Projects = () => {
  const { Projects } = content;

  return (
    <div className="" id="projects">
      <div className="container px-5 py-14 flex flex-col  justify-evenly  min-h-screen">
        {/* title  */}
        <div>
          <h2 className="">{Projects.title}</h2>
          <h4 className="text-white">{Projects.subtitle}</h4>
        </div>

        {/* page  */}
        <div className="flex items-center md:flex-row flex-col-reverse gap-5 justify-evenly">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={Projects.image}
              alt=""
              className="w-[300px] md:max-w-[30vw] rounded-2xl overflow-hidden object-fill "
            />
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-md shadow-md"
          >
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="rounded-3xl pb-16 max-w-xs self-start"
            >
              {Projects.project_content?.map((item, i) => (
                <SwiperSlide key={i} className="p-5 h-fit rounded-3xl ">
                  {}
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.image} alt="" className="rounded-xl" />
                    <div className="flex flex-col gap-1 mt-2">
                      <h5 className="font-semibold">{item.title}</h5>
                      <button className="font-bold text-gray">READ MORE</button>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
