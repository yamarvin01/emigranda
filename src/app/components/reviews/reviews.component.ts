import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-reviews',
  imports: [TuiButton, TuiCarousel, TuiIcon, CommonModule, TuiIcon, TuiPagination],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  public index = 0;
  public items = [
    {
      text: 'Спасибо Оксане Сергеевне за подготовку дочери к ЕГЭ по русскому. От нас только самые лучшие рекомендации, дочь довольна, ей было комфортно в мини-группе. Благодарим за профессионализм и отдельно - за моральную и психологическую поддержку.',
      author: 'Наталия',
      subject: 'Русский язык • ЕГЭ по русскому языку',
    },
    {
      text: 'Оксана Сергеевна - Профессионал. ЕГЭ по литературе и русскому языку, ДВИ по литературе в МГУ, олимпиады - это судьбоносные для будущих абитуриентов события. И доверие своей судьбы (без преувеличения) Оксане Сергеевне - правильный выбор, надежный, с целью достичь наивысших результатов. Наш бал ЕГЭ 2020 года: русский язык - 100 баллов, литература - 100 баллов, ДВИ по литературе - 85 баллов. Начали заниматься с Оксаной Сергеевной с октября 2019 года, до этого момента долго подбирая репетитора русского языка и литературы одновременно для поступления в МГУ на филологический факультет. И только Оксана Сергеевна может поднять своих учеников на уровень уверенного абитуриента и с нужным багажом знаний, акцентируя внимание на необходимом и важном, четко, структурировано, интересно ничего лишнего - есть цель и дорога к ней, по которой строго и доброжелательно одновременно ведет профессиональный репетитор. Если репетитор русского яз. и литературы, то однозначно Оксана Сергеевна! С благодарностью!',
      author: 'Мария',
      subject: 'Литература • ДВИ по литературе',
    },
    {
      text: 'Оксана Сергеевна - отличный репетитор. Занятия проходили комфортно, были содержательны и полезны. Рада, что удалось найти хорошего специалиста, который помог разобраться с форматом ДВИ в МГУ и попрактиковаться перед экзаменом. К сожалению, проверяющий на ДВИ мне попался не самый удачный, в результате чего балл был получен ниже ожидаемого. Оценку не считаю объективной, а в добросовестности своей подготовки, как и в профессионализме репетитора, не сомневаюсь. Так или иначе, поступить на филологический факультет МГУ мне удалось, на бюджет. Поэтому уверена - Оксана Сергеевна не только обеспечивает условия для качественной подготовки, но еще и приносит удачу!)',
      author: 'Елизавета',
      subject: 'ДВИ по литературе',
    },
    {
      text: 'С Оксаной Сергеевной провели два занятия за неделю до ДВИ. Научилась в разы качественнее писать работу, что оценили на филфаке (похвалили в рецензии глубину раскрытия темы). 86 баллов на ДВИ! Оксана Сергеевна дала понятную схему написания сочинения по любой сопоставительной теме. Итоги работы с Оксаной Сергеевной: 97 баллов на ЕГЭ по литературе (3 месяца занятий) 85 на филфаке МГУ (2 занятия)',
      author: 'Оксана',
      subject: 'Литература • ЕГЭ по литературе',
    },
    {
      text: 'Оксана Сергеевна - лучший репетитор в нашей истории обучения!',
      author: 'Вера',
      subject: 'Подготовка к экзаменам • ЕГЭ',
    },
    {
      text: 'Моя дочь занималась с Оксаной Сергеевной 2017-2018 год, мы решили готовиться к ЕГЭ заранее и старт был дан прямо летом - в июне 2017 года. Приняли решение готовиться с педагогом, так как очень волновались за подготовку к ЕГЭ по литературе, нам нужен был высокий балл, а в школе занимались литературой по обычной (неуглубленной) программе и не успевали пройти все произведения. Режим занятий с репетитором у нас был 1 раз в неделю по 2 академических часа, а далее дочь занималась самостоятельно в течении недели – решала тесты и писала сочинения. Оксана Сергеевна проверяла сочинения и разбирала ошибки. Подготовку к экзамену начали с самого начала, чтобы ничего не пропустить, разбирая все термины и произведения, а также критику. В таком режиме мы занимались весь год, и успели разобрать практически все школьные произведения и написать почти по всем сочинения. Сами занятия дочери очень нравились, всегда ходила на занятия с удовольствием. Хочу отметить, что Оксана Сергеевна в курсе всех требований и новостей по поводу нововведений и изменений в ЕГЭ, что было очень важно, так как она предупреждала нас о таких тонкостях, о которых наши школьные учителя не знали. Также у Оксаны Сергеевны есть дополнительные тематические курсы, на которых ребята занимаются небольшими группами, например, курс подготовки к итоговому сочинению, или курс «ЕГЭ по русскому на 100 баллов». Мы также посещали такие курсы, и это нам помогло сдать ЕГЭ по русскому на 98 баллов, а ЕГЭ по литературе на 100 баллов. Мы очень счастливы! Для нас это лучший результат, о котором мы мечтали. Это результат хорошо отлаженной работы педагога и огромный труд и желания ученика! Говорим огромное спасибо преподавателю Оксане Сергеевне и рекомендуем тем, кому необходим отличный результат на ЕГЭ по литературе и русскому языку. Спасибо!',
      author: 'Лада',
      subject: 'Литература • Подготовка к олимпиадам',
    },
    {
      text: 'Я занималась с Оксаной Сергеевной год. Оценка в школе колебалась между 3 и 4, после обучения - вышла на стабильную 4 и 5. Ни разу у меня не возникло мысли сменить репетитора, никаких замечаний и недовольств. Все четко и структурировано. Занятия всегда начинались вовремя, без опозданий, в каких-то экстренных ситуациях Оксана Сергеевна всегда предлагала альтернативный выход. Занятия пролетали как одна минута, потому что они были интересными и насыщенными. На любой вопрос, даже не относящийся к теме урока, я получала развернутый ответ. Ничего не оставалось непонятным и неразобранным. Большое количество теории подкреплялось еще большим количеством практики. Оксана Сергеевна не только давала необходимые знания, но и учила действовать самостоятельно, находить выход из любой ситуации. "Нет непонятных текстов, есть недоразобранные",- говорила она. Оксана Сергеевна давала советы, отвечала на волнующие вопросы о вступлении и выборе профессии, рассказывала о дополнительных источниках и материалах для обучения. Помимо занятий в конце обучения были организованы дополнительные семинары и встречи. Балл за ЕГЭ - 91. Без раздумий советую всем. Вы точно не пожалеете.',
      author: 'Арина',
      subject: 'Русский язык • ЕГЭ по русскому языку',
    },
  ];

  public images: string[] = [
    'assets/reviews/2025-05-10 (2).png',
    'assets/reviews/2025-05-10 (3).png',
    'assets/reviews/2025-05-10 (4).png',
    'assets/reviews/2025-05-10 (5).png',
    'assets/reviews/2025-05-10.png',
    'assets/reviews/photo_2025-04-17 00.26.40.jpeg',
    'assets/reviews/photo_2025-04-17 00.26.44.jpeg',
    'assets/reviews/photo_2025-04-17 00.26.47.jpeg',
    'assets/reviews/photo_2025-04-17 00.26.54.jpg',
    'assets/reviews/photo_2025-05-21_16-38-33.jpg',
    'assets/reviews/photo_2025-05-21_16-44-22 (2).jpg',
    'assets/reviews/photo_2025-05-21_16-44-22.jpg',
    'assets/reviews/photo_2025-05-30_21-46-16.jpg',
  ];
}
