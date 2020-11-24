var axios = require("axios");
var fd = require("form-data");
var fs = require("fs");
var cheerio = require("cheerio");

var root = 'https://s3.ezgif.com';

module.exports = class Ezgif {
  constructor() {}
  
  static async gif2video(path) {
    var data = new fd();
    fd.append("new-image",fs.createReadStream(path),"image.gif");
    var result = await axios({
      url: root + '/gif-to-mp4',
      method: 'POST',
      data: data,
      headers: data.getHeaders();
    });
    var $ = cheerio.load(result.data);
      
  }
}
