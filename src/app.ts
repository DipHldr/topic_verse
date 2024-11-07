
import express, {Application,Request,Response} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app:Application=express();


const corsOptions={
    origin:'*',
    method:'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders:'*'
}

app.use(cors(corsOptions))

app.use(cookieParser())
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public'))

// import userRouter from './routes'

// app.use('/api/v1/users',userRouter)

export {app}

