// import { Reader } from "protobufjs";
import { Bean } from './generated/bean'
import LZString from 'lz-string'
// @ts-ignore
const JSURL = require('jsurl')

function encode(bean: Bean) {
    const bytes = Bean.encode(bean).finish()

    const decoder = new TextDecoder('utf-8')
    const b64encoded = btoa(decoder.decode(bytes))

    const url = new URL('https://beanconqueror.com')
    url.searchParams.set("bean", b64encoded)

    return url.toString()
}

function decode(str: string) {
    const url = new URL(str);
    const b64 = url.searchParams.get("bean")
    const encoder = new TextEncoder()
    const encoded = encoder.encode(atob(b64!))

    const bean = Bean.decode(encoded)
    return bean
}

function currentEncode(_bean: Bean) {
    const stringifyBean = JSURL.stringify(_bean);
    const compressedBean = LZString.compressToEncodedURIComponent(stringifyBean);


    const loops = Math.ceil(compressedBean.length / 400);

    let jsonParams = '';
    for (let i = 0; i < loops; i++) {
        if (jsonParams === '') {
            jsonParams = 'shareUserBean' + i + '=' + compressedBean.substr(0, 400);
        } else {
            jsonParams += '&shareUserBean' + i + '=' + compressedBean.substr(i * 400, 400);
        }
    }


    const beanMessage: string = 'https://beanconqueror.com?' + jsonParams;
    return beanMessage
}


function example() {
    const bean = {
        name: "my beans",
        buyDate: "08/12/2022",
        roastingDate: "08/02/2022",
        note: "some note",
        roaster: "best roaster",
        config: {
            uuid: '123123-123',
            unixTimestamp: 123,
        },
        roast: 123,
        roastRange: 123,
        beanMix: 123,
        roastCustom: "",
        aromatics: "",
        weight: 0,
        finished: false,
        coast: 0,
        attachments: [],
        cuppingPoints: "",
        decaffeinated: false,
        url: "",
        beanArticleNumber: "",
        rating: 0,
        beanInformation: [],
        beanRoastingType: 0,
        beanRoastInformation: undefined,
        qrCode: "",
        favourite: false,
        shared: false,
    }
    const encoded = encode(bean)

    console.log('encoded with protobuf to', encoded)
    console.log('encoded with the current code', currentEncode(bean))

    const decodedBean = decode(encoded)

    console.log("decoded to", decodedBean)
}

example()