import dayjs from 'dayjs'
import excelJS from 'exceljs'
import FileSaver from 'file-saver'

export const buildExcel = async (list: any[]) => {
  const workbook = new excelJS.Workbook()
  const worksheet = workbook.addWorksheet("Недвижимость")
  console.log('list', list)

  worksheet.columns = [
    { header: "№", key: "no", width: 5 },
    { header: "Название объекта", key: "title", width: 50 },
    { header: "Адрес", key: "address", width: 50 },
    { header: "Цена м.кв, руб", key: "pricePerSquare", width: 20 },
    // { header: "Цена м.кв, тыс.руб", key: "pricePerSquare", width: 20 },
    { header: "Площадь, м.кв", key: "square", width: 20 },
    { header: "Цена предложения, руб", key: "price", width: 30 },
    { header: "Дата размещения", key: "startDate", width: 20 },
    { header: "Описание", key: "description", width: 50 },
    // { header: "Цена предложения, тыс.руб", key: "price", width: 30 },
    { header: "Источник информации", key: "link", width: 50 },
  ]

  list.forEach((item, idx) => {
    const formattedDate = dayjs(item.startDate).format('DD.MM.YYYY')

    const row = {
      no: idx + 1,
      title: item.title,
      address: item.address,
      price: item.price,
      // price: item.price / 1000,
      square: parseFloat(item.area.toFixed(3)),
      // square: item.square,
      pricePerSquare: parseFloat(item.pricePerMeter.toFixed(3)),
      startDate: formattedDate,
      description: item.description,
      // pricePerSquare: Math.ceil((item.price / item.square) / 1000),
      link: item.link
    }

    worksheet.addRow(row)
  })

  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true }
  })

  const buf = await workbook.xlsx.writeBuffer()
  FileSaver.saveAs(new Blob([buf]), 'result.xlsx')
}
