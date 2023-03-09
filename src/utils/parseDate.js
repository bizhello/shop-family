
const parseDateInText = (date)=> {
    
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month
    }

    return date.getFullYear() + "-" + month;
}

const parseDateInNumber = (e) => {
  
  const parseDate = Date.parse(new Date(e.target.value));
  
  return parseDate
}

export { parseDateInText, parseDateInNumber };