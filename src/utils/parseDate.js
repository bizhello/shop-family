
const parseDateInText = (date)=> {

  const text = new Date(date)

    let month = text.getMonth() + 1;
    if (month < 10) {
      month = '0' + month
    }

    return text.getFullYear() + "-" + month;
}

const parseDateInNumber = (e) => {
  
  const parseDate = Date.parse(new Date(e.target.value));
  
  return parseDate
}

export { parseDateInText, parseDateInNumber };