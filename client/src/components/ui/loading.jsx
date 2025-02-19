import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Background Effects */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -inset-20 bg-primary/20 rounded-full blur-3xl opacity-50"
        />
        
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="relative flex flex-col items-center"
        >
          {/* Logo Text */}
          <motion.div
            className="text-4xl font-bold relative"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              Evonative
            </span>
            <span className="ml-2 text-gray-600 font-normal">
              Solutions
            </span>
          </motion.div>

          {/* Animated Dots */}
          <div className="flex gap-2 mt-4">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-primary"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Geometric Shapes */}
          <div className="absolute -inset-10 -z-10">
            {[45, 90, 135, 180].map((rotation, index) => (
              <motion.div
                key={rotation}
                className="absolute inset-0"
                initial={{ rotate: rotation }}
                animate={{
                  rotate: [rotation, rotation + 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "linear"
                }}
              >
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary/20 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
