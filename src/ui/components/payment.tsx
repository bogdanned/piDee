

export default async function pay(amount: any){
    const response = await fetch("https://demo.stax.tlabs.cloud/projects/demo/contexts/IOTA_payment/payment", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'accept': '*/*',
            'Authorization': 'KLCTTSWE9EJPL9ZAVXAPBYW9SQSHMMTIKIWGZCG9SE9ITWXKAZLAVV9GZKZZLGI9DVOMCHNWC9XDTXZKN',
            'Originator-Ref': 'DDUSYCTGGMJXAKFTQDW9EMWSYMOAIIGKLQEMGPTPYJXIKOOHDCOEMHROAZHYSOVANVILCGIXXIMFNOYUY',
            'contentType': 'application/json',
        },
        body: JSON.stringify({ 
            "amount": amount, 
            "recipient_ref": "9AROGCNRY9LETHOVCNA9PC9XIUKFVCAJGMQHKCEEVDCBWHQYKS9SKRUVXUBFIAEABQGVUXRMTAUKRACH9"}
        )
    })

    const data = await response.json()

    return data
    
}

