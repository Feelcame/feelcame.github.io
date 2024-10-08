---
title: Bluetooth модули и усилители звука
no-date: 2021-05-30T13:25:02+03:00
---

## Bluetooth модули
Сейчас молодежь пользуется передачей звука по блютузу. Это просто и удобно. Если вы не обладаете аудиофильским слухом, то звук по этой технологии достаточно качественный. Единственное что, не нужно ожидать от китайского модуля за 60 центов звука как от качественной стереосистемы. В самые дешевые модули ставят самые дешевые чипы. По моему опыту и мнению, модули с хорошей схемотехникой стоят от 10 долларов. 

В дешевых бт-модулях и беспроводных колонках распространены чипы с маркировкой JL. Это китайские микроконтроллеры со встроенным блютузом. 

- Информация про чипы jielie (JL, jelly) <https://kagaimiq.github.io/jielie/>+ [репо](https://github.com/kagaimiq/jielie?tab=readme-ov-file)


## Усилители звука
я пользуюсь в основном усилителями класса D (от digital - цифровой) так как они энергоэффективные, дешевые и при этом достаточно легкие для того что бы встраивать их в портативную технику

## Детальнее по схемотехнике
- кнопки подключаются через делитель
- регулятор громкости подключается на входе. звук нельзя пускать напрямую без резистора и нельзя глушить звук на землю
- на выходе цифрового усилителя меандр на высокой частоте. его надо сгладить с помощью дросселя. если его нет, то расстояние до динамика должно быть не более 30см


## Плата расширения для китайского модуля усилителя звука

Модуль о котором пойдет речь продается на алике. Вот скриншот: <ссылка>

Задача платы - сделать возможным использование модуля без дополнительной пайки разъемов. Ну и конечно же придать красоты непрезентабельной железке.

![image](https://user-images.githubusercontent.com/17731587/140838596-7767b876-aace-4713-b4f5-fe72e6ea8a95.png)


Текстолит односторонний, чтобы сверху не было токопроводящих линий и торчащих выводов разъемов.  
Хотя можно сделать двухсторонним, если надо. Главное покрасить в черный цвет, чтобы скрыть все грехи. И сделать толщину 1.5мм для механической прочности.

С нижней стороны усилителя будут прикручиваться резиновые ножки

На плате присутствуют: 
- регулятор громкости
- разъем 3.5mm мама, для подключения кабеля Jack 3.5mm папа-папа
- разъем SMD pinheader female для подключения платы расширения к самому усилителю
- надписи возле раазъемов на русском

Механика:
- размер платы по модулю усилителя
- отверстия для скручивания двух плат вместе через стойки
- большой вырез в центре над радиатором. возможно в клеточку
- вырезы в местах, где прикручиваются кабели колонок и питания. Эти разъемы чуть выпирают над остальными компонентами, значит влезут внутрь выреза в шилде
- отверстия в месте крутилок баланса каналов

Тут сложно, нужно будет где то взять питание:
- индикатор переполюсовки питания. Диод, который светит внутьрь PCB через отверстие. 
- Если вместо покупных стоек использовать 3D-печатные стенки, то можно замутить светомузыку


Дополнительная плата с разъемами для подключения аккумуляторов 18650.  
Крепится снизу и придает устойчивости устройству. Без аккумуляторов усилитель слишком легкий, не хочется чтобы его унесло ветром, как осенний лист.
А если на нее поставить разъем питания и микросхему чарджер, то можно сделать усилок с автономным питанием

## Как сделать регулятор громкости

для китайского усилителя TPA3118
![регулятор громкости](https://user-images.githubusercontent.com/17731587/181825096-0ad08e9d-882a-4bfa-96ed-a094b2297dc1.jpg)


* <http://interlavka.narod.ru/nabor/nabf005.htm>
* <http://interlavka.narod.ru/nabor/im/f005sh.jpg>
* <https://forum.cxem.net/uploads/monthly_01_2015/post-145741-0-71367900-1420535837.jpg>
* Устранить щелчки при включении tpa3116 <http://9zip.ru/home/tpa3116_dorabotka.htm>

