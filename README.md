# ornito-skeleton

> Generate SequelizeJS schemas via command-line

Ornito Alert: This is an experimental tool! Please do not use it for production purposes!

## Getting Started

Install the module with: `npm install ornito-skeleton -g`

## Documentation

_(Coming soon)_

## Examples

Initializing with your db configuration

```bash
ornito-skeleton init -c ~/path/to/your/conf.json -p ~/path/to/your/project
```

Example conf.json the attribute "db" is required:

```js
	{ 
		"db" : 
					{ "host" 		: "localhost"
					, "database" 	: "myDB"
					, "user" 		: "fake_user"
					, "password" 	: "fake_pass@123"
					, "port" 		: 3306
					, "type" 		: "mysql"
			    	}
	}
```
 
To create a model schema "customer.js"

```bash
ornito-skeleton md customer name:string document:number age:number address:string -p ~/path/to/your/project
```

To list all models

```bash
ornito-skeleton ls
```

## Contributing
For now this library is in total development only ornito members are allowed to contribute

## License

Copyright (c) 2014 Ornitorrinko
Licensed under the MIT license.