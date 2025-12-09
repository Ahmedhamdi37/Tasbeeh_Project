const btn = document.getElementById('btn');
let text = document.querySelector('h1');
text.style.color = 'gold';
text.textContent = 'ابدأ التسبيح';
let counter = 0;

btn.onclick = () => {
  btn.disabled = true;

  // المرحلة 1 — سبحان الله
  counter = 0;
  let intOne = setInterval(() => {
    text.style.color = 'white';
    text.textContent = `سُبحانَ الله ${++counter}`;
    if (counter === 33) {
      clearInterval(intOne);

      // المرحلة 2 — الحمد لله
      counter = 0;
      let intTwo = setInterval(() => {
        text.style.color = 'red';
        text.textContent = `الحمدُ لله ${++counter}`;
        if (counter === 33) {
          clearInterval(intTwo);

          // المرحلة 3 — الله أكبر
          counter = 0;
          let intThree = setInterval(() => {
            text.style.color = 'gold';
            text.textContent = `اللهُ أكبر ${++counter}`;
            if (counter === 33) {
              clearInterval(intThree);

              // المرحلة 4 — الذكر الأخير
              text.style.color = 'green';
              text.textContent =
                'لا إلهَ إلا اللهُ وحدَه لا شريكَ له، لهُ المُلكُ ولهُ الحمدُ، وهو على كلِّ شيءٍ قدير';
              btn.disabled = false;
              alert('جعلها الله في ميزان حسناتكم');
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
};
