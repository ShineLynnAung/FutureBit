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
    items: ["Algorithm ဆိုတာဘာလဲ?", "Algorithm ရေးနည်း"]
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
  "heading": "Algorithm ဆိုတာဘာလဲ?",
  "content": [
    { "type": "text", "value": "Algorithm ဆိုတာ ပြဿနာတစ်ခုကို ဖြေရှင်းဖို့အတွက် အဆင့်လိုက် စီစဉ်ထားတဲ့ လုပ်ဆောင်ချက်တွေ ဖြစ်ပါတယ်။ Computer ကို ဘာလုပ်ရမလဲဆိုတာ တိတိကျကျ အဆင့်လိုက် ပြောပြထားတဲ့ လမ်းညွှန်ချက်လည်း ဖြစ်ပါတယ်။" },
    { "type": "text", "value": "Coding မရေးခင်မှာ အရင်ဆုံး Algorithm ကို စဉ်းစားထားရပါတယ်။ ဘာလုပ်မလဲ၊ ဘယ်လိုလုပ်မလဲ၊ ဘယ်အဆင့်နဲ့လုပ်မလဲ ဆိုတာကို အစီအစဉ်ချပြီးမှ Code ရေးတာဖြစ်ပါတယ်။" },
    { "type": "heading", "value": "Algorithm ရဲ့ အရေးပါမှု" },
    { "type": "list", "value": [
      "🧠 ပြဿနာကို အလွယ်တကူ ဖြေရှင်းနိုင်စေတယ်",
      "📋 အလုပ်လုပ်ပုံကို စနစ်တကျ စီစဉ်နိုင်စေတယ်",
      "💻 Code ရေးတဲ့အခါ အမှားနည်းစေတယ်",
      "⚡ Program ကို ပိုမိုမြန်ဆန်အောင် လုပ်ပေးနိုင်တယ်"
    ]},
    { "type": "heading", "value": "ဥပမာ - မုန့်လုပ်တဲ့ Algorithm" },
    { "type": "list", "value": [
      "1️⃣ မုန့်မှုန့်ထည့်",
      "2️⃣ ရေထည့်",
      "3️⃣ မွှေ",
      "4️⃣ မီးဖိုထဲထည့်",
      "5️⃣ အချိန်ပြည့်ပြီးရင် ထုတ်ယူ"
    ]},
    { "type": "text", "value": "ဒီလို အဆင့်လိုက် လုပ်ဆောင်ခြင်းက Algorithm ဖြစ်ပါတယ်။ Coding လောကမှာတော့ Algorithm က အခြေခံအရေးကြီးဆုံး အရာတစ်ခုဖြစ်ပါတယ်။" }
  ]
},
      {
  "heading": "Algorithm ရေးနည်း",
  "content": [
    { "type": "text", "value": "Algorithm ရေးနည်းဆိုတာ ပြဿနာတစ်ခုကို ဖြေရှင်းဖို့အတွက် လုပ်ဆောင်ရမယ့် အဆင့်တွေကို စနစ်တကျ ရေးသားခြင်းဖြစ်ပါတယ်။ Coding မရေးခင် အရင်ဆုံး Algorithm ကို ရေးသားထားရင် ပိုမိုရှင်းလင်းပြီး အမှားနည်းစေပါတယ်။" },
    { "type": "text", "value": "Algorithm ကို ရေးတဲ့အခါမှာ ရိုးရိုးလေးနဲ့ တိတိကျကျ အဆင့်လိုက် စဉ်းစားပြီး ရေးရပါတယ်။ Computer နားလည်အောင်မဟုတ်ဘဲ လူနားလည်အောင် အစီအစဉ်ချရေးတာဖြစ်ပါတယ်။" },
    { "type": "heading", "value": "Algorithm ရေးနည်း အဆင့်များ" },
    { "type": "list", "value": [
      "💡 ပြဿနာကို သေချာနားလည်ခြင်း",
      "🧠 ဖြေရှင်းမည့်နည်းလမ်းကို စဉ်းစားခြင်း",
      "📋 အဆင့်လိုက် စာရင်းရေးခြင်း",
      "🔍 အမှားရှိမရှိ စစ်ဆေးခြင်း",
      "⚙️ လိုအပ်လျှင် ပြန်ပြင်ခြင်း"
    ]},
    { "type": "heading", "value": "ဥပမာ - 2 + 3 တွက်ရန် Algorithm" },
    { "type": "list", "value": [
      "1️⃣ ပထမ နံပါတ် (2) ကိုယူ",
      "2️⃣ ဒုတိယ နံပါတ် (3) ကိုယူ",
      "3️⃣ နှစ်ခုကို ပေါင်း",
      "4️⃣ ရလဒ်ကို ပြန်ပြ"
    ]},
    { "type": "text", "value": "Algorithm ကောင်းတစ်ခုရေးနိုင်ရင် Coding ရေးတဲ့အခါ ပိုမိုလွယ်ကူပြီး စနစ်တကျဖြစ်လာပါတယ်။ ဒါကြောင့် Programming လေ့လာရာမှာ Algorithm က အရမ်းအရေးကြီးပါတယ်။" }
  ]
},
      // {
      //   heading: "Flowchart",
      //   content: [
      //     { type: "text", value: "Flowchart ဆိုတာ Algorithm ကို ပုစ်ပါ။ အရုပ်လေးများနဲ့ ဖော်ပြပါ။" },
      //     { type: "heading", value: "Flowchart မှာ အသုံးများတဲ့ ပုစ်ပများ" },
      //     {
      //       type: "list", value: [
      //         "⬜ ထောင့်လိုက်ပါ။ - အစအဆုံး",
      //         "🔷 မျဉ်းနွယ် - လမ်းကြောင်း",
      //         "🔶 မြားညွှန် - လုပ်ဆောင်ရမယ့် အလုပ်",
      //         "🔹 စတုမဟုတ် - ဆုံးဖြတ်ချက်"
      //       ]
      //     }
      //   ]
      // }
    ]
  },
  "part-4": {
    title: "Part 4: Syntax နဲ့ Semantics",
    sections: [
      {
  "heading": "Syntax နဲ့ Semantics",
  "content": [
    {
      "type": "text",
      "value": "Programming Language တွေမှာ Syntax နဲ့ Semantics ဆိုတာ အရမ်းအရေးကြီးတဲ့ အခြေခံ concept နှစ်ခုဖြစ်ပါတယ်။ Code ရေးတဲ့အခါမှာ ဒီနှစ်ခုကို နားလည်ထားမှ program မှန်ကန်စွာ အလုပ်လုပ်နိုင်ပါတယ်။"
    },
    {
      "type": "heading",
      "value": "Syntax ဆိုတာဘာလဲ?"
    },
    {
      "type": "text",
      "value": "Syntax ဆိုတာ Programming Language ရဲ့ စည်းမျဉ်း (rules) တွေဖြစ်ပါတယ်။ Code ကို ဘယ်လိုရေးရမလဲ၊ ဘယ်စကားလုံးတွေကို ဘယ်နေရာမှာထားရမလဲ ဆိုတာကို သတ်မှတ်ထားတာပါ။"
    },
    {
      "type": "list",
      "value": [
        "ရေးသားပုံ စည်းမျဉ်းများ",
        "စကားလုံးနေရာချထားမှု",
        "သင်္ကေတ (symbols) အသုံးပြုပုံ"
      ]
    },
    {
      "type": "text",
      "value": "Syntax မှားရင် Computer က နားမလည်နိုင်ပါဘူး။ ဒါကို Syntax Error လို့ခေါ်ပါတယ်။"
    },
    {
      "type": "heading",
      "value": "Semantics ဆိုတာဘာလဲ?"
    },
    {
      "type": "text",
      "value": "Semantics ဆိုတာ Code ရဲ့ အဓိပ္ပါယ် (meaning) ဖြစ်ပါတယ်။ Code က မှန်ကန်စွာရေးထားပေမယ့် လုပ်ချင်တဲ့ အလုပ်မှန်ကန်မမှန်ကန်ကို ဆုံးဖြတ်တာပါ။"
    },
    {
      "type": "list",
      "value": [
        "Code ရဲ့ အဓိပ္ပါယ်",
        "Program က ဘာလုပ်မလဲဆိုတာ",
        "Logic မှန်မမှန် စစ်ဆေးခြင်း"
      ]
    },
    {
      "type": "text",
      "value": "Semantics မှားရင် Code က run လုပ်နိုင်ပေမယ့် လိုချင်တဲ့ ရလဒ်မထွက်နိုင်ပါဘူး။"
    },
    {
      "type": "heading",
      "value": "ဥပမာ"
    },
    {
      "type": "list",
      "value": [
        "Syntax မှန်ပေမယ့် Semantics မှား → အလုပ်မမှန်တဲ့ program",
        "Syntax မှား → program run မလုပ်နိုင်"
      ]
    },
    {
      "type": "text",
      "value": "ဒါကြောင့် Programming လေ့လာတဲ့အခါ Syntax ကိုမှန်အောင်ရေးနိုင်သလို Semantics ကိုလည်း နားလည်ထားဖို့ အရေးကြီးပါတယ်။"
    }
  ]
},
      {
  "heading": "Debugging",
  "content": [
    {
      "type": "text",
      "value": "Debugging ဆိုတာ Program (သို့) Code ထဲမှာရှိတဲ့ အမှားတွေကို ရှာဖွေပြီး ပြင်ဆင်ခြင်းဖြစ်ပါတယ်။ Coding ရေးတဲ့အခါ အမှား (bug) တွေ မဖြစ်အောင်လည်း လုပ်ရသလို ဖြစ်လာရင်လည်း ပြန်ရှာပြီး ပြင်ရပါတယ်။"
    },
    {
      "type": "text",
      "value": "Bug ဆိုတာက Program မျှော်လင့်ထားသလို မလုပ်တာ၊ ဒါမှမဟုတ် လုံးဝမလုပ်နိုင်တာကို ဆိုလိုပါတယ်။ Debugging ကတော့ အဲ့ဒီ bug တွေကို ဖယ်ရှားတဲ့ process ဖြစ်ပါတယ်။"
    },
    {
      "type": "heading",
      "value": "Debugging ဘာကြောင့်အရေးကြီးလဲ?"
    },
    {
      "type": "list",
      "value": [
        "🧠 Program ကို မှန်ကန်အောင် လုပ်ပေးတယ်",
        "⚙️ System အလုပ်လုပ်မှုကို တည်ငြိမ်စေတယ်",
        "💻 App နဲ့ Game တွေ crash မဖြစ်အောင် ကူညီတယ်",
        "🔍 Code ရဲ့ logic ကို ပိုမိုနားလည်စေတယ်"
      ]
    },
    {
      "type": "heading",
      "value": "Debugging လုပ်နည်းများ"
    },
    {
      "type": "list",
      "value": [
        "1️⃣ Code ကို တစ်လိုင်းချင်း စစ်ဆေးခြင်း",
        "2️⃣ Error message တွေကို ဖတ်ရှုခြင်း",
        "3️⃣ Print/Log ထုတ်ပြီး စစ်ဆေးခြင်း",
        "4️⃣ အဆင့်လိုက် run ပြီး ကြည့်ခြင်း",
        "5️⃣ မမှန်တဲ့ logic ကို ပြန်ပြင်ခြင်း"
      ]
    },
    {
      "type": "heading",
      "value": "ဥပမာ"
    },
    {
      "type": "list",
      "value": [
        "Program က 2 + 2 ကို 5 လို့ပြနေတယ် → Bug ရှိနေတယ်",
        "Debugging လုပ်ပြီး 2 + 2 = 4 ဖြစ်အောင် ပြင်တယ်"
      ]
    },
    {
      "type": "text",
      "value": "Debugging က Programmer တစ်ယောက်အတွက် အရမ်းအရေးကြီးတဲ့ skill တစ်ခုဖြစ်ပြီး Code ရေးနိုင်တာထက် Bug ရှာနိုင်တာက ပိုအရေးကြီးတတ်ပါတယ်။"
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