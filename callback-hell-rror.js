const empleados = [
    {
        id: 1,
        nombre: `Fernando`
    },
    {
        id: 2,
        nombre: `Marta`
    },
    {
        id: 3,
        nombre: `Manuel`
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1500
    },
    {
        id: 2,
        sueldo: 2000
    },
]

const id = 1;

const getSueldoById = (id, callback) => {
    const sueldo = sueldos.find((s) => s.id === id);
    
    if (sueldo) {
        callback(sueldo);
    }
}

getSueldoById (id,  (sueldo) => {
    console.log(`el sueldo es: sueldo `, sueldo);
})