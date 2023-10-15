import { log } from './log.mjs';


export const handler = async (event) => {

    log('event: ' + JSON.stringify(event))

    return {
        statusCode: 200,
        body: '<html><body><p>Dados da requisicao ${JSON.stringify(event)}</p></body></html>',
        headers: {
            'Content-Type': 'text/html'
        }
      };
  
  };
  