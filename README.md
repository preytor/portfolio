# portfolio
My personal website using Angular 16

## Deploy in github pages
Run the following command to deploy the project in github pages
```
ng build --base-href "https://preytor.github.io/portfolio/"
``` 

Alternatively we can use this command with the domain
```
ng build --base-href "https://pablogr.dev" --cname=pablogr.dev
``` 

We deploy it to the gh-pages branch using the following command
```
npx angular-cli-ghpages --dir=dist/portfolio
```
