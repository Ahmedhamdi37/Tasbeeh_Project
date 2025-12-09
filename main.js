const btn = document.getElementById('btn');
let text = document.querySelector('h1');
text.style.color = 'gold';
text.textContent = 'ابدأ التسبيح';
let counter = 0;

btn.onclick = () => {
  btn.disabled = true;
  btn.style.backgroundColor = 'gray';

  counter = 0;
  let intOne = setInterval(() => {
    text.style.color = 'white';
    text.textContent = `سُبحانَ الله ${++counter}`;
    if (counter === 33) {
      clearInterval(intOne);

      counter = 0;
      let intTwo = setInterval(() => {
        text.style.color = 'red';
        text.textContent = `الحمدُ لله ${++counter}`;
        if (counter === 33) {
          clearInterval(intTwo);

          counter = 0;
          let intThree = setInterval(() => {
            text.style.color = 'gold';
            text.textContent = ` اللهُ أكبر ${counter + 1}`;
            counter++;
            if (counter === 33) {
              clearInterval(intThree);

              text.style.color = 'green';
              text.textContent =
                'لا إلهَ إلا اللهُ وحدَه لا شريكَ له، لهُ المُلكُ ولهُ الحمدُ، وهو على كلِّ شيءٍ قدير';
              btn.disabled = false;
              btn.style.backgroundColor = 'gold';
              setTimeout(() => {
                alert('جعلها الله في ميزان حسناتكم');
              }, 1000);
            }
          }, 500);
        }
      }, 500);
    }
  }, 500);
};
