export const load = async () => {
    const resp = await fetch('http://127.0.0.1:8080');
    const data = await resp.json(); // Parse JSON response
    console.log(data.message); // Log the message after awaiting the Promise
    return {
        msg: data.message
    };
};
