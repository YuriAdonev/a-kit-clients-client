import { useParams } from "react-router-dom"

export const ReportItem = () => {
  const { id } = useParams()
  const isCreate = id === 'new'

  return (
    <div>
      Страница {isCreate && 'создания '}отчета1
      <div>
        <div className="field-item">
          <div className="field-item__label">Субъект права</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">ОГРН</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Дата государственной регистрации</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Вид права</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Объект права</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Адрес (местоположение)</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Кадастровый номер</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div>Количественные и качественные характеристики объекта оценки</div>
        <div className="field-item">
          <div className="field-item__label">Площадь: общая, м²</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Этажность</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Подземная этажность</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Кадастровый номер</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Право</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Ограничение</div>
          <div className="field-item__wrap">
            <textarea />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Кадастровая стоимость, руб</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Арендуемая площадь (суммарно), м²</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Арендная плата (суммарно), руб/мес.</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Оплата коммунальных расходов</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Литер</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Год постройки</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Этаж/Этажность</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Износ, %</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Площадь подвала, м²</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Площадь 1-го этажа, м²</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Площадь 2-го и выше этажей, м²</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Выявленные несогласованные перепланировки/переустройства</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label"></div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Общая характеристика состояния объекта</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Текущее использование / назначение помещений объекта</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
        <div className="field-item">
          <div className="field-item__label">Балансовая (остаточная) стоимость, руб</div>
          <div className="field-item__wrap">
            <input type="text" />
          </div>
        </div>
      </div>
      
      <div>

Конструктивные элементы	Материал	Признаки износа
Стены	кирпич, керамогранит (частично)	отдельные повреждения, трещины в кладке
Перекрытия	железобетонные	нет видимых признаков износа
Проемы	двери пластиковые, металлические и деревянные; окна пластиковые	отдельные незначительные повреждения
Полы	плитка, линолеум, бетонный	
Отделка	покраска, кафель, потолки "Армстронг"	отдельные повреждения и загрязнения
Коммуникации	электричество, водоснабжение, канализация, отопление, вентиляция	в рабочем состоянии


      </div>
      <div>
      "Субъект права
ОГРН
дата государственной регистрации
"	"ООО ""ГАРАНТИЯ""
1122224001855
09.04.2012
Общество с ограниченной ответственностью ""Гарантия"""		https://egrul.nalog.ru/
			Копия Выписки из ЕГРН № 22/363/003/2018-896 от 06.04.2018 г.
Вид права	собственность, краткосрочная аренда, долгосрочная аренда		
номер и дата государственной регистрации права	22-22-01/135/2012-219, 19.04.2012 г.		
Наименование объекта	Земельный участок		
Адрес	край Алтайский, г. Барнаул, пр-кт Космонавтов, дом 33		
Кадастровый номер	22:63:020309:2		
Кадастровые номера расположенных в пределах земельного участка объектов недвижимости	"22:63:020309:26
22:63:020309:53
22:63:020309:54"		
Количественные и качественные характеристики объекта оценки			
Площадь, м²	1666		
Категория земель	Земли населенных пунктов		
Разрешенное использование	Для эксплуатации здания магазина		
Кадастровый номер	22:63:020309:2		https://lk.rosreestr.ru/eservices/real-estate-objects-online
Право	Собственность № 22-22-01/135/2012-219 от 19.04.2012		
Ограничение	"Ипотека № 22:63:020309:2-22/001/2020-10 от 18.03.2020
Ипотека № 22:63:020309:2-22/001/2019-9 от 21.02.2019
Аренда от 22.09.2005
Ограничения прав на земельный участок, предусмотренные статьей 56 Земельного кодекса Российской Федерации от 13.10.2020
Ограничения прав на земельный участок, предусмотренные статьей 56 Земельного кодекса Российской Федерации от 11.01.2021"		
Кадастровая стоимость, руб.	5 669 781,18		
Кадастровые номера и наименования расположенных на участке объектов капитального строительства, права на которые зарегистрированы	22:63:020309:26	Магазин	
	22:63:020309:53	Тепловая сеть	
	22:63:020309:54	Тепловая сеть	
Наличие на участке строений, права на которые не зарегистрированы	2 кирпичных здания (ориентировочная площадь 2-4 кв.м, подсобно-складского назначения), 3 металлических склада/гаража		Визуальный осмотр оценщика
Примечание	По мнению Оценщика, наличие на участке вышеупомянутого незарегистрированного строения никак не влияет на стоимость участка при текущем использовании		
Текущее использование	застроен объектом коммерческой недвижимости		
Балансовая стоимость, руб	297 132,35		Справка о балансовой стоимости ООО "Гарантия"

      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
