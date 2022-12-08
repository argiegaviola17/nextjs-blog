import {
  format,
  parseISO,
} from 'date-fns';

export default function Date({dateString}){
    console.log("dateString:",dateString)
    const date = parseISO(dateString);
    console.log("date: ",date);
    return <time defaultTime={dateString}>{format(date,'LLLL d, yyyy')}</time>;
}