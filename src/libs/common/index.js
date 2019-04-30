export const tranObj = model => {
  return () => {
    let newModel = {};
    Object.keys(model).forEach(key => {
      if (typeof model[key] == "object") {
        newModel[key] = model[key].defaults;
      } else {
        newModel[key] = null;
      }
    });
    return newModel;
  };
};
export const getModel = model => {
  let newModel = {};
  Object.keys(model).forEach(key => {
    if (typeof model[key] == "object") {
      newModel[key] = model[key].name;
    } else {
      newModel[key] = model[key];
    }
  });
  return newModel;
};

export const mouseEvent = {
  wheel(opt) {
    console.log(opt);
    if (!opt.target) {
      console.log("什么都没有，还让我帮忙！");
      return;
    }
    let callback = opt.callback || function() {};
    let target = opt.target;

    //获取兼容事件
    let mouseWheel = /Firefox/i.test(navigator.userAgent)
      ? "DOMMouseScroll"
      : "mousewheel";

    //IE
    if (document.attachEvent) {
      document.attachEvent("on" + mouseWheel, function(e) {
        if (e.target.parentElement == target) {
          callback(e, e.wheelDelta);
        }
      });
    }

    //FF、Chrome、Opera、safari
    else {
      document.addEventListener(mouseWheel, function(e) {
        e = e || window.event;
        if ($(e.target).parents("." + target.className)[0] == target) {
          if (e.detail) {
            //FF
            callback(e, e.detail * 40);
          } else {
            callback(e, e.wheelDelta);
          }
        }
      });
    }
  }
};

export const tranRank = data => {
  const target = {};

  const loop = (obj, pname) => {
    for (const key in obj) {
      let name = pname + "." + key;
      if (
        obj[key] &&
        typeof obj[key] == "object" &&
        obj[key] instanceof Array == false
      ) {
        loop(obj[key], name);
      } else {
        target[name] = obj[key];
      }
    }
  };
  for (const key in data) {
    let name = key;
    if (
      data[key] &&
      typeof data[key] == "object" &&
      data[key] instanceof Array == false
    ) {
      loop(data[key], name);
    } else {
      target[name] = data[key];
    }
  }
  return target;
};

export const clone = (target, data) => {
  for (let d in data) {
    if (d in target) {
      target[d] = data[d];
    }
  }
  return target;
};
