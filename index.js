function clscompose(...args) {
  let res = [];
  args.forEach((arg) => {
    if (typeof arg === "string") {
      res.push(arg);
    }

    if (Array.isArray(arg)) {
      res.push(clscompose(...arg));
    } else if (arg instanceof String) {
      res.push(arg);
    } else if (typeof arg === "object" && arg !== null) {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          res.push(key);
        }
      });
    }
  });
  return res.join(" ");
}

module.exports = {
  clscompose,
};
