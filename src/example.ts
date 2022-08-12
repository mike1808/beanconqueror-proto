// import { Reader } from "protobufjs";
import { Bean } from './generated/bean'

function example() {
    const bytes = Bean.encode({
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
    }).finish()

    const decoder = new TextDecoder('utf-8')
    const b64encoded = btoa(decoder.decode(bytes))

    const url = new URL('https://beanconqueror.com')
    url.searchParams.set("bean", b64encoded)

    console.log(url.toString())
}

example()