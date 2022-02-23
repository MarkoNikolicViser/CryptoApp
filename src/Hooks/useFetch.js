export const useFetch = () => {

    const DataFetch = async (param) => {
        try {
            return await (await fetch(`https://api.coingecko.com/api/v3/coins/${param}`)).json()
        } catch (err) {
            alert(err)
        }
    }

    return ({ DataFetch })
}