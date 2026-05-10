const taskSamples = {
  addition: {
    classic: "648 + 275 = ?",
    story: "Ғарыш базасында 348 энергия кристалы болды. Детектив тағы 275 кристалл тапты. Барлығы қанша?",
    detective: "Құпия есіктің бірінші коды: 128 + 72. Кодты аш.",
    code: "Код құрастыр: 45+55, 120+80, 300+25."
  },

  subtraction: {
    classic: "900 - 475 = ?",
    story: "Кемеде 900 отын болды. 245 отын жұмсалды. Қанша қалды?",
    detective: "Жоғалған сан: 700 - ? = 425. Белгісіз санды тап.",
    code: "Код құрастыр: 500-250, 900-450, 1000-399."
  },

  multiplication: {
    classic: "36 × 4 = ?",
    story: "8 роботтың әрқайсысында 7 батарея бар. Барлығы қанша батарея?",
    detective: "Роботты іске қосу коды: 9 × 8.",
    code: "Код құрастыр: 7×8, 12×5, 25×4."
  },

  division: {
    classic: "144 ÷ 12 = ?",
    story: "48 жұлдыз 6 оқушыға тең бөлінді. Әрқайсысына қанша?",
    detective: "Құпия порталды аш: 96 ÷ 6.",
    code: "Код құрастыр: 72÷8, 100÷5, 81÷9."
  },

  logic: {
    classic: "Қатарды жалғастыр: 3, 6, 12, 24, ...",
    story: "Детектив әр планетада екі есе көп clue тапты: 2, 4, 8, ... Келесі сан?",
    detective: "Артық санды тап: 12, 18, 24, 31, 36.",
    code: "Код құрастыр: 2,4,8,? және 5,10,20,?."
  },

  geometry: {
    classic: "Шаршы қабырғасы 7 см. Периметрі?",
    story: "Ғарыш алаңының ұзындығы 9 м, ені 4 м. Периметрі қанша?",
    detective: "4 қабырғасы тең фигура жоғалды. Ол не?",
    code: "Код құрастыр: шаршы ауданы 6×6, үшбұрыш периметрі 5+5+5."
  },

  measure: {
    classic: "3 кг = неше грамм?",
    story: "Робот 2 л су және 500 мл су алды. Барлығы неше мл?",
    detective: "Портал үшін 500 см-ді метрге айналдыр.",
    code: "Код құрастыр: 1м=?см, 2л=?мл, 3кг=?г."
  },

  time: {
    classic: "3 сағат = неше минут?",
    story: "Сабақ 09:00-де басталып, 09:45-те аяқталды. Қанша минут?",
    detective: "14:30-дан кейін 40 минут өткенде уақыт қанша?",
    code: "Код құрастыр: 2 аптадағы күн, 3 сағаттағы минут."
  },

  money: {
    classic: "1000 - 350 = ?",
    story: "Дәптер 120 тг, қалам 80 тг. Барлығы қанша?",
    detective: "500 тг-ден 180 тг және 220 тг жұмсадың. Қайтарым?",
    code: "Код құрастыр: 250×3, 500-180, 1000-650."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");

  if (!generateBtn) return;

  generateBtn.addEventListener("click", () => {
    const topic = document.getElementById("topic").value;
    const level = document.getElementById("level").value;
    const type = document.getElementById("type").value;

    const levelText = {
      easy: "Easy: тірек сөздермен",
      medium: "Medium: стандарт деңгей",
      pro: "Pro: күрделі challenge"
    };

    const output = document.getElementById("output");

    output.innerHTML = `
      <b>${levelText[level]} тапсырмасы</b>
      <br><br>

      ${taskSamples[topic][type]}

      <br><br>
      <b>AI hint:</b> Дайын жауап бермеңіз. Оқушыға бірінші логикалық қадамды көрсетіңіз.
      <br>

      <b>Бағалау:</b> дұрыс жауап — 20 ⭐, қате жауап — hint және екінші мүмкіндік.
      <br>

      <b>Квест элементі:</b> дұрыс жауаптан кейін clue немесе badge ашылады.
    `;
  });
});
