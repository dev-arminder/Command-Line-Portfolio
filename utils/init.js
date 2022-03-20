module.exports = (welcome, packJSON) => {
  welcome({
    title: packJSON.name,
    tagLine: `Hey! It's great to see you Here.😎`,
    version: `${packJSON.version}`,
    description: packJSON.description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true
  });
};
