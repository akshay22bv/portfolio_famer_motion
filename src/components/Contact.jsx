import { createElement } from "react";
import { content } from "../Content";
import { fadeIn } from "../varients";
import { motion } from "framer-motion";

const Contact = () => {
  const { Contact } = content;
  console.log("Contact: ", Contact);

  return (
    <div id="contact" className=" text-black">
      <div className="md:container px-5 py-14 min-h-screen  flex flex-col  justify-evenly">
        <div>
          <h2 className="">{Contact.title}</h2>
          <h4 className="text-white">{Contact.subtitle}</h4>
        </div>

        <div className="flex flex-col md:flex-row gap-5  w-full">
          <motion.form
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            action="https://getform.io/f/513534e9-f78b-4d4a-9fa3-10e3b55e7d39"
            method="POST"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border-white border  p-3 rounded"
            ></input>

            <input
              type="email"
              name="user_emmail"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email"
              required
              className="border-white border p-3 rounded"
            ></input>

            <textarea
              placeholder="Message"
              name="message"
              required
              className="border border-white  p-3 rounded "
            />

            <button className="btn self-start bg-white text-black">
              Submit
            </button>
          </motion.form>

          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-5"
          >
            {Contact?.social_media.map((item, i) => {
              return (
                <div key={i} className="flex gap-5 items-center">
                  <h2 className="text-white">{createElement(item.icon)}</h2>
                  <a className="text-white" href={item.link}>
                    {item.text}
                  </a>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
