import Explore from "../Components/Explore/Explore";
import ModelCard from "../Components/ModelCard";
import messageImg from '../Components/Explore/message.png';
import locationImg from '../Components/Explore/location.png';
import imageImg from '../Components/Explore/image.png';
import microphoneImg from '../Components/Explore/microphone.png';
import writeImg from '../Components/Explore/writing.png';
import voiceImg from '../Components/Explore/voice.png';
import tuningImg from '../Components/Explore/equalizer-control.png';
import visionImg from '../Components/Explore/vision.png';
import video from '../Components/video.mp4';
import Footer from "../Components/Footer/Footer";
import chatImg from '../Components/Footer/bubble-chat.png';

export default function Home() {
  return (
    <>
      <div className="text-white overflow-x-hidden mt-12 grid justify-center items-center px-4">
        <h1 className="text-[10px] text-xl md:text-3xl font-bold font-roboto text-gray-100">
          Welcome to the MY-GPT developer platform
        </h1>
        <h3 className="mt-16 text-xl  md:text-2xl font-semibold text-gray-400">
          Start with the basics
        </h3>
        <div className="grid grid-cols-1 text-center md:grid-cols-2 gap-4 md:gap-24 mt-4 items-center">
          <div className="bg-gradient-to-tr from-blue-500 to-green-800 cursor-pointer select-none text-sm px-3 hover:brightness-105 transition-all duration-100 h-28 py-4 w-full md:h-48 md:w-96 md:py-16 rounded-md flex flex-col justify-center">
            <p className="md:font-bold md:text-xl text-xs">
              Quickstart tutorial
            </p>
            <span className="md:text-sm mt-4 text-xs">
              Make your first Chat Completions API request
            </span>
          </div>
          <div className="bg-gradient-to-br from-yellow-900 to-red-800 cursor-pointer select-none text-sm px-3 hover:brightness-105 transition-all duration-100 h-28 py-4 w-full md:h-48 md:w-96 md:py-16 rounded-md flex flex-col justify-center">
            <p className="md:font-bold md:text-xl text-xs">
              Prompt examples
            </p>
            <span className="md:text-sm mt-4 text-xs">
              Explore what OpenAI models can do with prompts
            </span>
          </div>
        </div>
        <div className="mt-24 text-sm md:text-3xl font-semibold">
          <h2 className="text-gray-400 text-xl ">Meet the models</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          <ModelCard title='GPT-4o' body='Our fastest' f1='Text and image input, text output' f2='128k context length' f3='Input: $5 | Output: $15*'/>
          <ModelCard title='GPT-4 Turbo' body='Our high-intelligence' f1='Text and image input, text output' f2='128k context length' f3='Input: $10 | Output: $30*'/>
          <ModelCard title='GPT-3.5 Turbo' body='Our fast, inexpensive' f1='Text input, text output' f2='16k context length' f3='Input: $0.50 | Output: $1.50*'/>
        </div>
        <div className="mt-24 text-sm md:text-3xl font-semibold">
          <h1 className="text-gray-400">Explore the API</h1>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            <Explore img={messageImg} head='Text generation' body='Learn how to generate text and call functions' bgColor='bg-purple-700'/>
            <Explore img={locationImg} head='Embeddings' body='Learn how to search, classify, and compare text' bgColor='bg-yellow-500'/>
            <Explore img={imageImg} head='Image generation' body='Learn how to generate or edit images' bgColor='bg-blue-700'/>
            <Explore img={microphoneImg} head='Text to speech' body='Learn how to text into spoken audio' bgColor='bg-green-700'/>
            <Explore img={writeImg} head='Prompt engineering' body='Learn best practices for prompt engineering' bgColor='bg-purple-700'/>
            <Explore img={voiceImg} head='Speech to text' body='Learn how to turn audio into text' bgColor='bg-yellow-500'/>
            <Explore img={tuningImg} head='Fine-tuning' body='Learn how to train a model for your use case' bgColor='bg-blue-700'/>
            <Explore img={visionImg} head='Vision' body='Learn how to process image inputs with GPT-4' bgColor='bg-green-700'/>
          </div>
        </div>
        <div className="mt-24 text-sm md:text-3xl font-semibold">
          <h1 className="text-gray-400 text-center">Watch the first OpenAI Developer Day keynote</h1>
          <div className="mt-8 flex justify-center">
            <video className="w-full md:w-3/4" height="auto" loop autoPlay muted>
              <source src={video} />
            </video>
          </div>
        </div>
        <div className="py-7 grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
          <Footer img={writeImg} head='Help center' body='Ask questions and discuss topics'/>
          <Footer img={chatImg} head='Developer forum' body='Answers to frequently asked questions.'/>
          <Footer img={voiceImg} head='Service status' body='Check the status of OpenAI services.'/>
        </div>
      </div>
    </>
  );
}
