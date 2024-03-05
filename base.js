// Локальное видео
// ><video controls><source src="путь к видео" type="video/mp4"></video>

// Слайдер на 3 фотографии
// <div class="slider"><ul><li><img src="Путь к картинке" alt="Slider 1"></li><li><img src="Путь к картинке" alt="Slider 2"></li><li><img src="Путь к картинке" alt="Slider 3"></li></ul></div>

// Groups of objects
var groups = [
    {
        name: "Лагеря смерти",
        style: "islands#redIcon",
        items: [
            {
                center: [53.125, 77.26657645466847],
                image: "",
                name: "Деревня Белица",
                about: "В июльские дни 1941г. в деревне Белице Лидского района у православной церкви были расстреляны 47 мужчин-евреев. Ян Устинович Качан, коренной житель, вспоминает: «В тот день немецкие солдаты задержали меня на улице и приказали идти за ними. Привели на бывшее польское стрельбище. Вижу: в метрах шестидесяти от православной церкви наши местные евреи копают яму… В стороне от церкви немцы ставят пулемёт…Выбрали немцы первых или 5, или 7 евреев и приказали им бежать к яме. Те побежали, а по им - пулемётная очередь… Подняли вторую группу и толкнули в сторону ямы, потом ещё… Когда стрельба закончилась, подтолкнули меня к яме. Немец дал лопату в руки, сделал жест, мол, закапывай…». "
            },
            {
                center: [60.221354166666664, 72.39512855209743],
                image: "",
                name: "Деревя Селец",
                about: "В 23 июля 1941г. в д. Селец солдаты-эсесовцы расстреляли около 30 евреев, которые до этого размещались в специально отведённых для них домах. В своей книге «Сялец. Прынёманская рэчаiснасць» местный краевед Николай Дикевич рассказывает: «Людзей павялi каля станцыi, дзе была выкапана яма глыбiнёй па пояс. Там немцы загадалi арыштаваным бегаць да знямогi па крузе i абавязкова скакаць праз яму… Потым яýрэяý павялi ýздоýж плоту ý суправаджэннi аýтаматчыкаý, двух кулямётаý i некалькiх сабак. У лясочку, што завецца ý нас Лужок, бязвiнных людзей расстралялi…». В тот же день эсесовцы расправились и над местными активистами. Их похоронили в одной могиле."
            },
            {
                center: [42.2, 20.3],
                image: "",
                name: "3",
                about: "some text"
            }
        ]},
    {
        name: "Соженные населенные пункты",
        style: "islands#redIcon",
        items: [
            {
                center: [50.1, 20.4],
                name: "Деревня Бобовцы",
                image: "img/R.jpg",
                about: '<p>Всего уничтожено домов: 15.</p><iframe src="https://www.youtube.com/embed/Yv3DpAf9-RA?si=qTQe5OqJhqrK4Rtz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <div class="slider"><ul><li><img src="img/R.jpg" alt="Slider 1"></li><li><img src="img/R.jpg" alt="Slider 2"></li><li><img src="img/R.jpg" alt="Slider 3"></li></ul></div>'
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Докудово",
                image: "",
                about: "<b>1941 г.</b> - в результате бомбардировки.<br><b>1944 г.</b> - при отступлении отстроена.<br><br>Количество погибших: 88 человек.<br>период: август 1941 - сентябрь 1945 гг."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Докудово Село 1",
                image: "",
                about: "<b>1941 г.</b> - в результате бомбардировки.<br><b>1944 г.</b> - при отступлении отстроена.<br><br>Было уничтожено 75 домов."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Лайковщина",
                image: "",
                about: "Всего уничтожено домов: 8."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Лесники",
                image: "",
                about: "Количество погибших: 81 человек.<br>Период: август 1942 - 1944 гг.<br><br>Всего уничтожено домов: 100."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Микуличи",
                image: "",
                about: "Дважды: в середине войны - частично; 1945 г. при отступлении, отстроена.<br><br>Всего уничтожено домов: 17."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Мыто, хутор",
                image: "",
                about: "Всего уничтожено домов: 10."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Нетечь",
                image: "",
                about: "Период: лето 1943 - ноябрь 1949 гг.<br>Количество погибших: 10 человек."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Новоселки",
                image: "",
                about: "Всего уничтожено домов: 96."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Смолаки (частично)",
                image: "",
                about: "Всего уничтожено домов: 7."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Татарцы",
                image: "",
                about: "Всего уничтожено домов: 8."
            },
            {
                center: [42.2, 20.3],
                name: "Деревня Чапли",
                image: "",
                about: "Всего уничтожено домов: 9."
            }
        ]},
        {
            name: "Места расстелов",
            style: "islands#redIcon",
            items: [
                {
                    center: [53.125, 77.26657645466847],
                    image: "",
                    name: "Деревня Белица",
                    about: "<p>В <b>июльские дни 1941г.</b> в деревне Белице Лидского района у православной церкви были расстреляны <i>47 мужчин-евреев</i>. Ян Устинович Качан, коренной житель, вспоминает: «В тот день немецкие солдаты задержали меня на улице и приказали идти за ними. Привели на бывшее польское стрельбище. Вижу: в метрах шестидесяти от православной церкви наши местные евреи копают яму… В стороне от церкви немцы ставят пулемёт…Выбрали немцы первых или 5, или 7 евреев и приказали им бежать к яме. Те побежали, а по им - пулемётная очередь… Подняли вторую группу и толкнули в сторону ямы, потом ещё… Когда стрельба закончилась, подтолкнули меня к яме. Немец дал лопату в руки, сделал жест, мол, закапывай…».</p><p>В годы Великой Отечественной войны цыгане также подвергались полному физическому уничтожению. Так, <b>15 июля 1941г.</b> немцы расстреляли в деревне Белица <i>60 цыган</i>. Цыганки с малыми детьми на руках рвали себе волосы с головы, а плач их переходил почти в звериный рык. </p>"
                },
                {
                    center: [60.221354166666664, 72.39512855209743],
                    image: "",
                    name: "Деревя Селец",
                    about: "<p>В <b>23 июля 1941г.</b> в д. Селец солдаты-эсесовцы расстреляли около <i>30 евреев</i>, которые до этого размещались в специально отведённых для них домах. В своей книге «Сялец. Прынёманская рэчаiснасць» местный краевед Николай Дикевич рассказывает: «Людзей павялi каля станцыi, дзе была выкапана яма глыбiнёй па пояс. Там немцы загадалi арыштаваным бегаць да знямогi па крузе i абавязкова скакаць праз яму… Потым яýрэяý павялi ýздоýж плоту ý суправаджэннi аýтаматчыкаý, двух кулямётаý i некалькiх сабак. У лясочку, што завецца ý нас Лужок, бязвiнных людзей расстралялi…». В тот же день эсесовцы расправились и над местными активистами. Их похоронили в одной могиле.</p><p><b>23 июля 1941г.</b> в д. Селец немецко-фашистские захватчики расстреляли <i>местных комсомольцев и советских активистов</i>. Среди них - <b>Некрашевич Александр Иванович</b>, активный член подпольной группы КПЗБ, председатель Неманского сельсовета и председатель колхоза «Красный Селец» в 1940-41 гг., начальник отдела кадров райисполкома в 1941г.; Маньковская Елена Михайловна, член ЛКСМБ, создала политический кружок молодежи, вечернюю школу ликбеза, весной 1940г. выступила инициатором создания колхоза «Красный Селец», с декабря 1940г. - депутат Барановичского областного Совета. Всего погибло 13 человек. Их имена увековечены на мраморной доске в д. Селец. В этой могиле похоронены и евреи, расстрелянные в тот же день.</p>"
                },
                {
                    center: [32.682291666666664, 45.06089309878214],
                    image: "",
                    name: "Деревня Ваверка",
                    about: "<p>В <b>1942г.</b> было расстреляно <i>около 10 цыган</i> в околице д. Ваверка. Их под стражей привели из других мест. Местные жители рассказывают, что каратели жестоко расправились над 10-летним мальчишкой, которому удалось сбежать из-под конвоя. «Немец увидел и бросился за ним. Поймав ребёнка, застрелил его. Одного из местных жителей заставил нести тело к выкопанной яме».</p>"
                },
                {
                    center: [52.473958333333336, 35.047361299052774],
                    image: "",
                    name: "Город Лида",
                    about: "<p><b>В сентябре 1941г.</b> немецкие оккупанты расстреляли в лесу за Северным городком <i>100 цыган</i>. «Толпу цыган вели от Чапаева, видимо, из тюрьмы, - вспоминает Миронович Ирина Викентьевна. -  Толпа небольшая. Когда на дорогу ложили картошку, хлеб, они ничего не брали, знали, куда идут. Мы стояли в конце Малодворцовой. Стояли и плакали. Старая цыганка крикнула: «Люди, молитесь за нас мертвых, а мы будем - за вас живых»..[38] По свидетельским показаниям жителя города Стасевича Михаила Семеновича, расстрел производился из пулемета. Казнённых ставили у края длинного окопного рва, где и забрасывали убитых землей.</p>  <line></line>  <p>Нацисты жестоко расправлялись с активными деятелями подпольного и партизанского движения.  <b>27 марта 1944 г.</b> на базарной площади г. Лиды были казнены через повешение участники сопротивления фашистам: врач Крыжановская Луцьяна – участница антифашисткой группы Заря», учитель Степан Чураков – связной между лидским и минским подпольем и Роман Острейко – один из участников покушения на Лидского гебитскомиссара Дрекселя в марте 1944г. День и место расправы были выбраны не случайно: именно по понедельникам в Лиде проходили базары. Поэтому казнь имела широкую огласку, ведь за ней наблюдало множество людей. </p> <p>В <b>мае 1944г.</b> в Лиде начались массовые аресты участников Лидского подполья. В «секретную» тюрьму, размещавшуюся в Северном городке, были доставлены приблизительно 130 человек. Они долгое время терпели пытки, издевательства, но держались мужественно. 23 июня 1944г. во дворе Лидской тюрьмы был расстрелян М.Н. Игнатов – один из активных деятелей подполья.  Казни подпольщиков проводились 25 июня и 3 июля 1944 года. Большинство из них были расстреляны <b>3 июля 1944г.</b>, за 5 дней до освобождения Лиды, в лесу в двух километрах севернее Лиды. Это Л.А. и П.А. Аверьяновы, О.А. и А.С. Климко, А.Г. и Г.П. Качаны, Зоя и Лёня Кудачёвы, Матрёна Наказных – ученица нашей школы и др. Удалось избежать расстрела четырём подпольщикам: Горбачевскому Илье, Шаронову Михаилу, Макуцевичу Петру и Кальфу Михаилу. Указом Президиума Верховного Совета СССР от 10.05.1965г. погибшие подпольщики М. Игнатов, А. Климко, А.Качан, М.Наказных, М. Кастрамина, Л.Кудачёв, Л. Холевинский награждены Орденом I степени посмертно. </p>"
                },
            ]},

];
