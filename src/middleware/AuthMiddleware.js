const isAuthenticated = (to, from, next) => {
  next({ name: 'auth.login' });
};

export default null;
export { isAuthenticated };
