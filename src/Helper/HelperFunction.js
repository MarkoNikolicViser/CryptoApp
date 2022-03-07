export const HelperFunction = () => {

    const DateConversion = (unix) => {
        const date = new Date(unix)
        const DodajNulu = (vrednost) => {
            const string = vrednost.toString()
            if (string.length === 1)
                return '0' + string
                else return string
        }
        return DodajNulu(date.getHours()) + ':' + DodajNulu(date.getMinutes())
    }

    return { DateConversion }
}