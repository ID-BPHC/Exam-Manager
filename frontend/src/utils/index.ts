const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};

export {
    isLoggedIn
};