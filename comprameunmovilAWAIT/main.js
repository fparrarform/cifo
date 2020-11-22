//COMPRAME UN MOVIL VERSION AWAIT (ESPERANDO 5SEGUNDOS)

const isMomHappy = true;

//promise
const willIGetNewPhone = new Promise(
    (resolve, reject)=>{
        if (isMomHappy){
            const phone ={
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }
    }
)

willIGetNewPhone
.then((phone2)=>console.log(phone2))
.catch((reason)=>console.log(reason))


// 2nd promise
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}

(async () => {
    await askMom();
})();