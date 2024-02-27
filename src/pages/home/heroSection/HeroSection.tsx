import Container from '@/components/container/Container';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const headerBg = 'https://i.ibb.co/ZVbdWmV/pexels-julia-m-cameron-6995109.jpg';

const heroText = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

const heroTextChildren = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: 'spring',
      bounce: 0.5,
    },
  },
};

const HeroSection = () => {
  return (
    <Container className="h-screen">
      <div
        className="h-full bg-no-repeat relative text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="h-full bg-gradient-to-b from-[rgba(6,28,61,0.7)] to-[rgba(6,28,61,1)] absolute w-full ">
          <motion.div
            variants={heroText}
            initial="hidden"
            animate="visible"
            className="text-center roboto space-y-5 mt-32"
          >
            <motion.h1 variants={heroTextChildren} className="uppercase pt-6">
              Warmth for All
            </motion.h1>
            <motion.h2
              variants={heroTextChildren}
              className="font-extrabold capitalize text-primary text-[56px]"
            >
              For Winter
            </motion.h2>
            <motion.p
              variants={heroTextChildren}
              className="text-xl max-w-[80ch] mx-auto"
            >
              Join us in our mission to provide winter clothing to those in need
            </motion.p>
            <motion.div variants={heroTextChildren}>
              <Button className="my-gradient rounded-none px-10 py-3 plus-jakarta">
                Donate Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
