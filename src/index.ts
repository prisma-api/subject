/******************************************************************************************
 * Repository: https://github.com/prisma-api/prisma-api
 * Author: Prisma Api Community
 * Email: <prisma.api.community@gmail.com>  
 * License: MIT 
 * License Text: THE SOFTWARE IS PROVIDED 'AS IS'  
 * Copyright: prisma-api (c), All rights reserved
 * Create date: Sat Oct 16 2021 00:29:34 GMT+0700 (Krasnoyarsk Standard Time)
******************************************************************************************/
import prismaApi from '../../prisma-api/dist/src/index';
import dotenv from 'dotenv';
dotenv.config();

const server = prismaApi({ maxBodySize: '12mb' });
 
const port = 3000;

server.get('/', (req, res) => {  
  res.status(200).json({d: 2}) 
})  

server.listen(port, () => { 
  console.info('Listen on port', port);
})

 