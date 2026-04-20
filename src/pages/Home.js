import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaBrain, FaGamepad, FaGlobe, FaJs, FaPython, FaServer, FaStar } from "react-icons/fa";

const tutorials = [
  {
    id: 1,
    title: "Programming Fundamentals",
    description: "Coding ဆိုတာဘာလဲ၊ Programming အလုပ်လုပ်ပုံ၊ Programming Language များနဲ့ Algorithm အခြေခံတွေကို လေ့လာမယ်။",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
    category: "Basics",
    icon: <FaBrain />,
    color: "from-gray-600 to-gray-800",
    path: "/programming-fundamentals"
  },
  {
    id: 2,
    title: "Scratch Level 1",
    description: "Block တွေနဲ့ အလွယ်တကူ coding စတင်ပြီး animation နဲ့ game သေးသေးလေးတွေဖန်တီးမယ်။",
    image: "https://cdn.prod.website-files.com/63fda77e5fd49598bbf00892/64149f778a2a25a45a72d345_%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83%20Scratch%20-%20%D0%BE%D0%B4%D0%B8%D0%BD%20%D0%B8%D0%B7%20%D0%BB%D1%83%D1%87%D1%88%D0%B8%D1%85%20%D1%8F%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82%D0%BE%D0%B2%20%D0%BE%D1%82%208%20%D0%BB%D0%B5%D1%82.jpg",
    category: "Scratch",
    icon: <FaGamepad />,
    color: "from-orange-400 to-yellow-500",
    path: "/scratch-level-1"
  },
  {
    id: 3,
    title: "Scratch Level 2",
    description: "Loop၊ Condition စတဲ့ logic တွေသုံးပြီး game တွေကို ပိုမိုအဆင့်မြင့်အောင် ဖန်တီးမယ်။",
    image: "https://user-images.githubusercontent.com/20625381/46603998-c394a400-cb2f-11e8-82e3-a8a6c39050d0.png",
    category: "Scratch",
    icon: <FaGamepad />,
    color: "from-orange-500 to-red-500",
    path: "/scratch-level-2"
  },
  {
    id: 4,
    title: "HTML & CSS",
    description: "Website တစ်ခုကို စတင်တည်ဆောက်ပြီး design လှလှလေးတွေကို CSS နဲ့ ပြုလုပ်မယ်။",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    category: "Web",
    icon: <FaGlobe />,
    color: "from-blue-500 to-cyan-500",
    path: "/html-css"
  },
  {
    id: 5,
    title: "JavaScript Basics",
    description: "Website ကို interactive ဖြစ်အောင် JavaScript နဲ့ button, event, logic တွေထည့်သွင်းမယ်။",
    image: "https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "JavaScript",
    icon: <FaJs />,
    color: "from-yellow-400 to-orange-500",
    path: "/javascript-basics"
  },
  {
    id: 6,
    title: "Python Basics",
    description: "Python ရဲ့ syntax, variable, loop, function စတဲ့ အခြေခံတွေကို လေ့လာမယ်။",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Python",
    icon: <FaPython />,
    color: "from-green-500 to-emerald-500",
    path: "/python-basics"
  },
  {
    id: 7,
    title: "Python API Development",
    description: "Python အသုံးပြုပြီး API တည်ဆောက်နည်းနဲ့ app တွေကို ချိတ်ဆက်အသုံးပြုနည်းကို လေ့လာမယ်။",
    image: "https://images.unsplash.com/photo-1658204191944-374e8115a2de?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Backend",
    icon: <FaServer />,
    color: "from-indigo-500 to-purple-500",
    path: "/python-api"
  }
];
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Header />
      
      <main className="px-4 py-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <h1 className="text-2xl font-black md:text-3xl">
              Ready to Learn & Create? 
            </h1>
            <p className="mt-2 text-sm text-slate-400 md:text-base">
              Pick a tutorial and start your coding adventure!
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial) => (
              <article
                key={tutorial.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a2130] shadow-lg transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-44 w-full overflow-hidden sm:h-52">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tutorial.color} opacity-50`} />
                  <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
                    {tutorial.icon}
                    {tutorial.category}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-black">{tutorial.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {tutorial.description}
                  </p>

                  <Link
                    to={tutorial.path}
                    className={`mt-4 block w-full rounded-2xl bg-gradient-to-r ${tutorial.color} py-3 text-sm font-bold flex gap-3 items-center justify-center`}
                   >
                    <spam>Start Learning</spam>  <FaStar className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}