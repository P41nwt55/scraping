const request = require('request-promise');
const cheerio = require('cheerio');

const URL = 'https://ptax.bcb.gov.br/ptax_internet/consultarUltimaCotacaoDolar.do';

async function acesso(){
    const response = await request(URL);
    let $ = cheerio.load(response);
    let dolar = $('td[align=right]').first().text();
    let data = $('td[align=CENTER]').text();
    console.log('Data da cotação: ' + data);
    console.log('Valor do Dólar: ' + dolar);
}
acesso();