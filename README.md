# ornito-skeleton

> Generate SequelizeJS schemas via command-line

Ornito Alert: This is an experimental tool! Please do not use it for production purposes!

## Getting Started

Install the module with: `npm install git://github.com/Ornitorrinko/ornito-skeleton.git -g`

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
ornito-skeleton md customer id:integer>pk>ai name:string>nn document:integer>nn age:integer address:string -p ~/path/to/your/project
```
You can add ">pk", ">ai", ">nn" or combine them to sinalize a Primary Key, Auto increment and Not Null fields

To list all models

```bash
ornito-skeleton ls
```

## Tests
```bash
make
```

## Contributing
For now this library is in total development only ornito members are allowed to contribute

## License

Copyright (c) 2014 Ornitorrinko
Licensed under the MIT license.