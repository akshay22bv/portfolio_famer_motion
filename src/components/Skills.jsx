import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const Skills = () => {
  const { skills } = content;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modeldata, setModelData] = useState({});
  console.log("modeldata: ", modeldata);

  function openModal() {
    setIsOpen(true);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div id="skills" className="">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col p-2 rounded-sm bg-white backdrop-blur-md">
          <div className="flex gap-4  items-center">
            <img src={modeldata.logo} alt="" className="h-10 w-10" />
            <h6>{modeldata.name}</h6>
          </div>
          <br />

          <p className="text-black">{modeldata.para}</p>

          <br />
          <div className="flex justify-end">
            <button className="px-5 btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <div className="container   px-5 py-14 flex flex-col justify-evenly min-h-screen">
        {/* title  */}
        <div>
          <h2 className="">{skills.title}</h2>
          <h4 className="text-white">{skills.subtitle}</h4>
        </div>
        {/* page  */}
        <div className="flex flex-wrap gap-4 justify-center ">
          {skills?.skills_content?.map((item, i) => {
            return (
              <motion.div
                variants={fadeIn("up", 0.2 * i)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={i}
                className=" max-w-sm flex items-center gap-5 p-5 border-2 justify-center border-slate-200 rounded-lg relative group"
              >
                <div>
                  <img
                    src={item.logo}
                    className="w-20 duration-300 group-hover:scale-125"
                  />
                </div>
                <div>
                  <span className="text-xl font-semibold">{item.name}</span>
                  <p>{item.para}</p>
                  <div
                    onClick={() => {
                      openModal();
                      setModelData(item);
                    }}
                    className="absolute top-3 right-3 cursor-pointer"
                  >
                    {createElement(skills.icon)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
