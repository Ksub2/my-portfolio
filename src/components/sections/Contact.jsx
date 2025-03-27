import { RevealOnScroll } from "../RevealOnScroll";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Let's discuss something cool 👇
          </h2>
          
          <div className="flex justify-center mb-6">
            <a
              href="mailto:keshabdahal008@gmail.com"
              className="flex items-center bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <FaEnvelope className="mr-2" /> Send a Message
            </a>
          </div>

          {/* Social Media Buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <a
              href="https://www.facebook.com/keshab.KRD/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 text-2xl transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/keshab_yo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/keshab-dahal2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Ksub2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-2xl transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
