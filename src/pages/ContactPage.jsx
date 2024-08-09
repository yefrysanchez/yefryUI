import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";

const ContactPage = () => {


  return (
    <motion.div variants={fadeUp} animate="animate" initial="initial" className="max-w-4xl mx-auto ">
      <section className="mb-6 bg-navyBG p-8 rounded-3xl">
        <div className="mb-4 tracking-tighter border w-fit py-1 px-3 rounded-3xl border-softDarkText text-softDarkText font-semibold text-sm">
          <p>Contact</p>
        </div>
        <div className="mb-10">
          <h1 className="mb-4 tracking-tighter text-5xl font-bold">
            Have an idea?
            <br /> Let’s connect.
          </h1>
          <p className="text-softDarkText">
            Good design can make a real difference in the world
          </p>
        </div>

        <article className="bg-darkBackground p-12 rounded-3xl flex flex-col items-center">
          <div className="mb-4 w-32 rounded-full overflow-hidden ">
            <img
              className="h-full w-full object-cover scale-150"
              src="/profile.jpeg"
              alt=""
            />
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tighter mb-[2px]">
              Yefry Sanchez
            </h2>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full">
                <div className="h-2 w-2 bg-accent rounded-full animate-ping"></div>
              </div>

              <p className=" text-softDarkText"> Open to work</p>
            </div>
            <div className="text-3xl flex justify-center gap-4">
              <a
                target="_blank"
                className="text-softDarkText hover:text-white transition duration-300"
                href="https://www.linkedin.com/in/yefrysanchez/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                target="_blank"
                className="text-softDarkText hover:text-white transition duration-300"
                href="https://www.github.com/yefrysanchez"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="bg-navyBG p-8 rounded-3xl">
        <div className="text-center mb-8">
          <p className=" text-softDarkText">Prefer Email instead?</p>
          <h2 className="text-4xl tracking-tighter font-bold">
            Send me a message.
          </h2>
        </div>
        <form className="flex flex-col gap-2">
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="p-4 rounded-xl bg-darkBackground"
          />
          <input
            placeholder="Email Address"
            type="email"
            name="email"
            className="p-4 rounded-xl bg-darkBackground"
          />
          <textarea
            placeholder="Your message"
            name="message"
            cols="20"
            rows="10"
            
            className="p-4 rounded-xl resize-none bg-darkBackground"
          />
          <input type="submit" value="Submit" className="bg-accent text-darkBackground font-bold p-2 rounded-3xl cursor-pointer hover:opacity-80 transition duration-300"/>
        </form>
      </section>
    </motion.div>
  );
};

export default ContactPage;
