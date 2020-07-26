const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const nodemailer=require('nodemailer')

const app=express()

let port=process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader('Content-Type', 'application/json')
  
    next()
  })


app.listen(port,(err)=>{
    if(err) console.log(err)
    console.log(`http://localhost:${port}`)
})



app.post('/mailer',(req,res)=>{
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      //configurar el email de la entidad que manda el mail, user y pass
      auth: {
        user: 'sublimadodelmundo@gmail.com',
        pass: 'sublimados123'
      }, 
      tls: {
        rejectUnauthorized: false
      } 
    })
  //cambia los datos emi
    let mailoptions = {
        //aca el email de sublimados
      from: 'sublimadodelmundo@gmail.com',
      //el email a donde queres que llegue
      to: 'sublimadodelmundo@gmail.com',
      subject: 'Sublimadomundo',
      html: `
      <strong>Nombre:</strong> ${req.body.name} <br/>
      <strong>Tell:</strong> ${req.body.tell} <br/>
      <strong>E-mail:</strong> ${req.body.email} <br/>
      <strong>Mensaje:</strong> ${req.body.text}
      `
    }
  
    transporter.sendMail(mailoptions, (error, info) => {
        if (error) console.log(`${error}`)
        else {
          console.log(info) 
        }
      })
    })
  