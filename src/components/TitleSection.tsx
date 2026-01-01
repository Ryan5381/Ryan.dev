import { motion } from "framer-motion";

const TitleSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center md:flex-row md:gap-8"
      >
        <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter text-white">
          Ryan<span className="text-amber-400">.</span>dev
        </h1>

        {/* 分隔線 */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "3rem" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden md:block w-px bg-white/20"
        />

        <h2 className="text-3xl md:text-5xl font-earthlight tracking-[0.5em] text-stone-300 mt-4 md:mt-0">
          通網
        </h2>
      </motion.div>

      {/* 小字 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="mt-6 text-[10px] tracking-[0.8em] text-white uppercase"
      >
        Welcome to my web.
      </motion.p>
    </div>
  );
};

export default TitleSection;
