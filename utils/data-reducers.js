const parseDate = (date) => {
    const stringDate = new Date(date).toString()
    const formattedDate =
        stringDate.substring(4, 7) +
        ' ' +
        stringDate.substring(8, 10) +
        ', ' +
        stringDate.substring(11, 15)

    return formattedDate
}

module.exports = {
    parseDate,
}
