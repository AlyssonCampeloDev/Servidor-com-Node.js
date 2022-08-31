type Com = { modelo: string, marca: string, ram: int, hd: int}
type ComPrototype = {showDetails(): void}

const comPrototype: ComPrototype = {
    showDetails(): void {
        console.log(this)
    },
};

const comFactory = (modelo: string, marca: string, ram: int, hd: int) Com & ComPrototype => {
    const idAsPrivateMember = math.floor(Math.ramdom()*1000)
    const comObj = Object.create(comPrototype)
    return Object.assign(comObj, {id: idAsPrivateMember, modelo, marca, ram, hd})
}

const com1 = comFactory('Slim', 'Lenovo', '8', '500')
com1.showDetails()
const com2 = comFactory('Space', 'Samsung', '16', '1000')
com2.showDetails()