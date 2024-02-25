document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitQuestion');
    const answerText = document.getElementById('answer');

    submitButton.addEventListener('click', function() {
        const questionInput = document.getElementById('questionInput');
        const question = questionInput.value.trim();

        if (question === '') {
            answerText.textContent = 'Пожалуйста пишите свой вопрос.';
        } else {
            const answers = [
            "Это не так",
            "Это определенно",
            "Это категорически так",
            "Без сомнения",
            "Да, определенно",
            "Вы можете на это полагаться",
            "Как я вижу, да",
            "Скорее всего",
            "Перспективы хорошие",
            "Да",
            "Знаки указывают на да",
            "Ответ неоднозначен, попробуйте еще раз",
            "Спросите позже",
            "Лучше вам сейчас не говорить",
            "Сейчас нельзя предсказать",
            "Сосредоточьтесь и спросите снова",
            "Не рассчитывайте на это",
            "Мой ответ - нет",
            "Мои источники говорят нет",
            "Перспективы не так уж хороши",
            "Очень сомнительно",
            "Безусловно",
            "Абсолютно точно",
            "Сомневаюсь",
            "Безусловно",
            "Делай дело",
            "Думай об близких",
            "Все дело в вас самом",
            "Ваши проблемы легко решаются",
            "Не волнуйтесь",
            "Спроси у родителей",
            "Тебе никто не поможет",
            "Иди сам решай проблемы",
            "Помогай сам себе",
            "Ну да, это же очевидно.",
            "Ваши знаки ясные: да.",
            "Вероятность успеха весьма высока.",
            "Как только вы сделаете это, ответ станет ясен: да.",
            "Ваши звезды благосклонны, да."

             
            ];

            const randomIndex = Math.floor(Math.random() * answers.length);
            const randomAnswer = answers[randomIndex];
            answerText.textContent = randomAnswer;
        }
    });
});