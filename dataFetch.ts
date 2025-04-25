const dataFetch = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
            throw new Error('fetch error');
        }
        const data = res.json();
        return data;
    } catch (error) {
        throw Error('error');
    }
};

export default dataFetch;
