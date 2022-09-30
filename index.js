const fs = require('fs')

const a = process.argv;
fs.writeFileSync(a[2], 'Hello '+ a[3])
  console.log('Hello ' + a[3])

   const b = process.env.USERNAME;
   fs.writeFileSync(b, 'Hello '+ b)
      console.log('Hello ' + b)

