# ezgif API

![ezgif](https://user-images.githubusercontent.com/17960677/100124630-e2865980-2ea1-11eb-94e4-7240432ed4a6.png)

>**Unofficial ezgif API**

 ## Example

The Following Code snipet will help you understand how to use this.

```js
var ezgif = require("ezgif");
var dl = require("dlurl");

(async function() {
  var op = await ezgif.gif2video("file_path");
  await dl(op);
  op = await ezgif.crop("file_path");
  await dl(op);
})();
```

## Contributing

Thank you for your interest in contributing, If you feel like there's something missing or any new feature can be added, just create a PR and I will see the rest.

## Help

You can contact me on social media, Everything about me can be found [here](https://theabbie.github.io)

## Installation

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios
* Form-Data

## Credits

* [ezgif](https://ezgif.com) For making an excellent tool

## Contact

Contact me anywhere, just visit [my portfolio](https://theabbie.github.io)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information



