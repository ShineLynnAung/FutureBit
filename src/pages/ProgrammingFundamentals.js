import { useState } from "react";
import Header from "../components/Header";

const parts = [
  {
    id: "part-1",
    title: "Part 1: Coding ဆိုတာဘာလဲ?",
    items: ["Coding ဆိုတာဘာလဲ?", "Coding ဘာအတွက်လိုအပ်ပါး?", "Computer အလုပ်လုပ်ပုံ"]
  },
  {
    id: "part-2",
    title: "Part 2: Programming Language",
    items: ["Programming Language ဆိုတာဘာလဲ?", "Language များ", "ဘာဘာသားကို စတင်လုပ်ပါး"]
  },
  {
    id: "part-3",
    title: "Part 3: Algorithm နဲ့ Logic",
    items: ["Algorithm ဆိုတာဘာလဲ?", "Algorithm ရေးနည်း", "Flowchart"]
  },
  {
    id: "part-4",
    title: "Part 4: Syntax နဲ့ Semantics",
    items: ["Syntax နဲ့ Semantics", "Error များ", "Debugging"]
  }
];

const contents = {
  "part-1": {
    title: "Part 1: Coding ဆိုတာဘာလဲ?",
    sections: [
      {
        heading: "Coding ဆိုတာဘာလဲ?",
        content: [
          { type: "text", value: "Coding ဆိုတာ မိမိလုပ်ချင်တဲ့ အလုပ်တစ်ခုခုကို Computer က လုပ်ပေးအောင် ပြောကြားခြင်းဖြစ်ပါတယ်။ ပြောတဲ့အခါမှာ computer ကို အသေးစိတ် တစ်ဆင့်ခြင်း ပြောပြပေးဖို့လိုပါတယ်။" },
          { type: "text", value: "Computer က လူလို မစဉ်းစားတတ်တာကြောင့် မင်းပြောတဲ့အတိုင်းပဲ လုပ်မယ်။ ဒါကြောင့် အမှားမရှိအောင် တိတိကျကျ ပြောဖို့အရေးကြီးပါတယ်။" },
          { type: "heading", value: "ဥပမာအနေနဲ့ - မီးဖိုမှာ မုန့်လုပ်ခြင်း" },
          {
            type: "list", value: [
              "ဘာထည့်ရမလဲ",
              "ဘယ်အချိန်မှာ ထည့်ရမလဲ",
              "ဘယ်လိုလုပ်ရမလဲ",
              "ဘယ်အချိန်မှာ ထွက်ရမလဲ"
            ]
          },
          { type: "text", value: "ဆိုတာတွေကို တစ်ဆင့်ချင်း ပြောရသလိုပဲ Coding မှာလည်း အလုပ်တစ်ခုကို အဆင့်လိုက် စီစဉ်ပြီး Computer ကို ပြောရပါတယ်။" },
          { type: "heading", value: "Coding လုပ်တဲ့အခါမှာ အဓိကလိုအပ်တာတွေကတော့" },
          {
            type: "list", value: [
              "🧠 စဉ်းစားနိုင်မှု (Logic)",
              "📋 အဆင့်လိုက် စီစဉ်နိုင်မှု (Step by step thinking)",
              "💡ပြဿနာ ဖြေရှင်းနိုင်မှု (Problem solving)"
            ]
          },
          { type: "text", value: "Coding ကို လေ့လာလိုက်တာနဲ့ မင်းတို့က Game တွေ ဖန်တီးနိုင်မယ်၊ Website တွေ တည်ဆောက်နိုင်မယ်၊ App တွေ ရေးနိုင်မယ်။" }
        ]
      },
      {
        "heading": "Coding ဘာအတွက်လိုအပ်လဲ?",
        "content": [
          { "type": "text", "value": "Coding ကို အသုံးပြုခြင်းအားဖြင့် မိမိစိတ်ကူးထားတဲ့ အရာတွေကို Computer နဲ့ ဖန်တီးနိုင်ပါတယ်။ ဒီနေ့ခေတ်မှာ အသုံးပြုနေတဲ့ App တွေ၊ Game တွေ၊ Website တွေ အားလုံးကို Coding နဲ့တည်ဆောက်ထားတာဖြစ်ပါတယ်။" },
          { "type": "text", "value": "Coding ကို သိထားရင် မိမိရဲ့ အလုပ်တွေကို အလိုအလျောက်လုပ်ဆောင်နိုင်အောင် ပြုလုပ်နိုင်ပြီး အချိန်နှင့်အားထုတ်မှုကို လျော့ချပေးနိုင်ပါတယ်။" },
          { "type": "heading", "value": "Coding လိုအပ်တဲ့ အကြောင်းအရင်းများ" },
          {
            "type": "list", "value": [
              "📱 Mobile App တွေ ဖန်တီးနိုင်ရန်",
              "🌐 Website တွေ တည်ဆောက်နိုင်ရန်",
              "🎮 Game တွေ ပြုလုပ်နိုင်ရန်",
              "🤖 Robot နှင့် AI ကို ထိန်းချုပ်နိုင်ရန်",
              "⚙️ အလုပ်များကို အလိုအလျောက်လုပ်ဆောင်နိုင်ရန်"
            ]
          },
          { "type": "text", "value": "Coding သင်ယူခြင်းက မင်းတို့ရဲ့ စဉ်းစားနိုင်မှုကို တိုးတက်စေပြီး ပြဿနာတွေကို ဖြေရှင်းနိုင်စွမ်းကိုလည်း မြှင့်တင်ပေးပါတယ်။" },
          { "type": "text", "value": "အနာဂတ်မှာ IT နဲ့ဆိုင်တဲ့ အလုပ်အကိုင်တွေ များလာတာကြောင့် Coding ကို သင်ယူထားခြင်းဟာ အရမ်းအရေးကြီးပါတယ်။" }
        ]
      },
      {
        "heading": "Computer အလုပ်လုပ်ပုံ",
        "content": [
          { "type": "text", "value": "Computer က လူလို မစဉ်းစားတတ်ပါဘူး။ မင်းပေးတဲ့ အမိန့် (instruction) တွေကိုသာ လိုက်နာပြီး အလုပ်လုပ်ပါတယ်။ ဒါကြောင့် Coding နဲ့ Computer ကို ဘာလုပ်ရမလဲဆိုတာ တိတိကျကျ ပြောပြရပါတယ်။" },
          { "type": "text", "value": "Computer အလုပ်လုပ်ပုံကို အလွယ်တကူ နားလည်ဖို့ဆိုရင် Input → Process → Output ဆိုတဲ့ အဆင့် ၃ ဆင့်နဲ့ ကြည့်နိုင်ပါတယ်။" },
          { "type": "heading", "value": "Computer အလုပ်လုပ်ပုံ အဆင့်များ" },
          {
            "type": "list", "value": [
              "📥 Input - User က data (ဥပမာ - စာရိုက်ခြင်း၊ ခလုတ်နှိပ်ခြင်း) ထည့်ပေးခြင်း",
              "⚙️ Process - Computer က data ကိုတွက်ချက်ခြင်း၊ စဉ်းစားခြင်း",
              "📤 Output - Result ကို ပြန်ထုတ်ပေးခြင်း (screen ပေါ်မှာ ပြခြင်း)"
            ]
          },
          { "type": "heading", "value": "ဥပမာ" },
          {
            "type": "list", "value": [
              "User က 2 + 3 ကို ရိုက်ထည့်သည် (Input)",
              "Computer က 2 + 3 ကို တွက်ချက်သည် (Process)",
              "Result = 5 ကို Screen ပေါ်မှာ ပြသည် (Output)"
            ]
          },
          { "type": "text", "value": "ဒါကြောင့် Coding လုပ်တဲ့အခါမှာ Input, Process, Output ကို မှန်ကန်အောင် စဉ်းစားပြီး Computer ကို အမိန့်ပေးဖို့ အရေးကြီးပါတယ်။" }
        ]
      }
    ]
  },
  "part-2": {
    title: "Part 2: Programming Language",
    sections: [
      {
        "heading": "Programming Language ဆိုတာဘာလဲ?",
        "content": [
          { "type": "text", "value": "Programming Language ဆိုတာ Computer နဲ့ ဆက်သွယ်ဖို့ အသုံးပြုတဲ့ အထူးဘာသာစကားတစ်ခုဖြစ်ပါတယ်။ လူတွေက Computer ကို နားလည်အောင် ဒီ language တွေကို အသုံးပြုပြီး အမိန့်ပေးကြပါတယ်။" },
          { "type": "text", "value": "Computer က တကယ်တော့ 0 နဲ့ 1 (binary) ပဲ နားလည်ပါတယ်။ Programming Language တွေကတော့ လူတွေ အလွယ်တကူ ရေးနိုင်အောင် လုပ်ထားတဲ့ language ဖြစ်ပါတယ်။" },
          { "type": "heading", "value": "Programming Language ရဲ့ အရေးပါမှု" },
          {
            "type": "list", "value": [
              "💻 Computer ကို အမိန့်ပေးနိုင်ရန်",
              "📱 App တွေ ဖန်တီးနိုင်ရန်",
              "🌐 Website တွေ တည်ဆောက်နိုင်ရန်",
              "🎮 Game တွေ ဖန်တီးနိုင်ရန်"
            ]
          },
          { "type": "heading", "value": "ဥပမာ Programming Language များ" },
          {
            "type": "list", "value": [
              "JavaScript - Website တွေမှာ အသုံးများတယ်",
              "Python - စတင်လေ့လာဖို့ လွယ်ကူတယ်",
              "Java - Mobile App တွေမှာ အသုံးများတယ်",
              "C++ - Game နဲ့ system programming တွေမှာ အသုံးများတယ်"
            ]
          },
          { "type": "text", "value": "Programming Language မရှိရင် Computer ကို ဘာလုပ်ရမလဲဆိုတာ ပြောလို့မရပါဘူး။ ဒါကြောင့် Coding လုပ်ရာမှာ Programming Language က အရေးကြီးတဲ့ အရာတစ်ခုဖြစ်ပါတယ်။" }
        ]
      }
    ]
  },
  "part-3": {
    title: "Part 3: Algorithm နဲ့ Logic",
    sections: [
      {
        heading: "Algorithm ဆိုတာဘာလဲ?",
        content: [
          { type: "text", value: "Algorithm ဆိုတာ ပြဿနာတစ်ခုကို ဖြေရှင်းဖို့ လုပ်ဆောင်ရမယ့် အဆင့်လိုက်လုပ်နည်း ဖြစ်ပါတယ်။" },
          { type: "heading", value: "ဥပမာ - မနက်စာ စားဖို့ Algorithm" },
          {
            type: "list", value: [
              "၁။ မနက်အိပ်ရာက ထလာပါ။",
              "၂။ သွားတိုက်ပါ။",
              "၃။ မိမိစားချင်တဲ့ ဟာကို ရွေးပါ။",
              "၄။ စားပါ။",
              "၅။ ပါ။"
            ]
          },
          { type: "text", value: "ဒီလိုအဆင့်လိုက် လုပ်တာဟာ Algorithm ဖြစ်ပါတယ်။" }
        ]
      },
      {
        heading: "Algorithm ရေးနည်း",
        content: [
          { type: "heading", value: "Algorithm ရေးသားနည်း အဆင့်များ" },
          {
            type: "list", value: [
              "၁။ ပြဿနာကို နားလည်အောင် ဖတ်ပါ။",
              "၂။ ဘယ်လို ဖြေရှင်းမလဲ စဉ်းစားပါ။",
              "၃။ အဆင့်လိုက် ရေးသားပါ။",
              "၄။ စမ်းသပ်ပြီး ပါ။"
            ]
          },
          { type: "text", value: "Algorithm သေချာရေးပါ။ ဒါမှ ပါးတိုက်အောင်ျမင်ပါ။" }
        ]
      },
      {
        heading: "Flowchart",
        content: [
          { type: "text", value: "Flowchart ဆိုတာ Algorithm ကို ပုစ်ပါ။ အရုပ်လေးများနဲ့ ဖော်ပြပါ။" },
          { type: "heading", value: "Flowchart မှာ အသုံးများတဲ့ ပုစ်ပများ" },
          {
            type: "list", value: [
              "⬜ ထောင့်လိုက်ပါ။ - အစအဆုံး",
              "🔷 မျဉ်းနွယ် - လမ်းကြောင်း",
              "🔶 မြားညွှန် - လုပ်ဆောင်ရမယ့် အလုပ်",
              "🔹 စတုမဟုတ် - ဆုံးဖြတ်ချက်"
            ]
          }
        ]
      }
    ]
  },
  "part-4": {
    title: "Part 4: Syntax နဲ့ Semantics",
    sections: [
      {
        heading: "Syntax နဲ့ Semantics",
        content: [
          { type: "heading", value: "Syntax ဆိုတာ ဘာလဲ?" },
          { type: "text", value: "Syntax ဆိုတာ ပါးပါးပါ း။ ပါးပါးပါ ပါ။ ဒါပါတယ်။" },
          { type: "heading", value: "Semantics ဆိုတာ ဘာလဲ?" },
          { type: "text", value: "Semantics ဆိုတာ ပါ းသဘောပါ း။ ပါးပါ း။" }
        ]
      },
      {
        heading: "Error များ",
        content: [
          { type: "heading", value: "Error နှစ်မျိုးရှိပါ။" },
          {
            type: "list", value: [
              "⚠️ Syntax Error - ပါးပါးပါ း။ ပါးပါးပါ ပါ။ ဒါပါ။",
              "⚠️ Logical Error - ပါ းသဘော မှားပါ။ ဒါပါ။"
            ]
          }
        ]
      },
      {
        heading: "Debugging",
        content: [
          { type: "text", value: "Debugging ဆိုတာ error ရှာဖွေပြင်ပါ။ ပါ။" },
          { type: "heading", value: "Debugging လုပ်နည်း" },
          {
            type: "list", value: [
              "🔍 Error ပါ။ ပါ။",
              "🔍 ပါ။ ပါ။ ပါ။",
              "🔍 ပါ။ ပါ။ ပါ။"
            ]
          }
        ]
      }
    ]
  }
};

function ContentRenderer({ content }) {
  return (
    <div className="space-y-4">
      {content.map((item, idx) => {
        if (item.type === "heading") {
          return (
            <h3 key={idx} className="text-lg font-bold text-blue-400 mt-6 mb-2">
              {item.value}
            </h3>
          );
        }
        if (item.type === "list") {
          return (
            <ul key={idx} className="list-decimal list-inside space-y-2 ml-4">
              {item.value.map((listItem, listIdx) => (
                <li key={listIdx} className="text-slate-300 leading-relaxed">
                  {listItem}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={idx} className="text-slate-300 leading-relaxed">
            {item.value}
          </p>
        );
      })}
    </div>
  );
}

export default function ProgrammingFundamentals() {
  const [activePart, setActivePart] = useState("part-1");

  const content = contents[activePart];

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <Header />

      <div className="flex flex-col lg:flex-row">
        <nav className="w-full lg:w-72 border-b lg:border-b-0 lg:border-r border-white/10 p-4 lg:p-6">
          <h2 className="text-lg font-black mb-4 text-slate-400">Content</h2>
          <ul className="space-y-2">
            {parts.map((part) => (
              <li key={part.id}>
                <button
                  onClick={() => setActivePart(part.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all ${activePart === part.id
                    ? "bg-blue-600 font-bold"
                    : "hover:bg-white/5 text-slate-400"
                    }`}
                >
                  {part.title}
                </button>
                {activePart === part.id && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {part.items.map((item, idx) => (
                      <li key={idx}>
                        <span className="flex items-center gap-2 py-2 text-sm text-slate-400">
                          <span className="text-blue-400">•</span>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 p-4 lg:p-8">
          <article className="mx-auto max-w-3xl">
            <h1 className="text-2xl font-black mb-6">{content.title}</h1>

            {content.sections.map((section, idx) => (
              <section key={idx} className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-blue-400">
                  {section.heading}
                </h2>
                <ContentRenderer content={section.content} />
              </section>
            ))}

            <div className="mt-10 flex justify-between">
              <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                {/* <FaCheck /> Completed */}
              </div>
              <button
                onClick={() => {
                  const currentIdx = parts.findIndex(p => p.id === activePart);
                  if (currentIdx < parts.length - 1) {
                    setActivePart(parts[currentIdx + 1].id);
                  }
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-colors"
              >
                Next Part →
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}